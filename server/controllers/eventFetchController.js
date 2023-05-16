const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY
});

const openai = new OpenAIApi(configuration);

let fetch;
(async () => {
  fetch = (await import('node-fetch')).default;
})();

async function generateSummary(prompt) {
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Write a 300 word summary of the following event: ${prompt}`,
        },
      ],
    });
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error while generating summary:", error);
  }
}

async function getRandomSummary(items) {
  const randomItem = items[Math.floor(Math.random() * items.length)];
  return await generateSummary(randomItem);
}

const organizeData = (content) => {
  const organizedData = {
    events: [],
    births: [],
    deaths: [],
  };

  const lines = content.split('\n');
  let currentCategory = '';

  lines.forEach(line => {
    if (line.startsWith('== ')) {
      currentCategory = line.slice(3, -3).toLowerCase();
    } 

    else if (currentCategory && line.trim()  && !line.startsWith('=== ') && organizedData[currentCategory]) {
      organizedData[currentCategory].push(line);
    }
  });

  return organizedData;
};

exports.fetchDataSummary = async (req, res) => {
  const day = req.params.day;
  const month = req.params.month;

  const url = new URL('https://en.wikipedia.org/w/api.php');
  const params = {
    action: 'query',
    format: 'json',
    prop: 'extracts',
    titles: `${month} ${day}`,
    explaintext: 1,
    exsectionformat: 'wiki',
    formatversion: 2
  };
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    const pages = data.query.pages;
    const page = pages[0];
    const organizedContent = organizeData(page.extract);
    console.log(organizedContent);

    const [eventsSummary, birthsSummary, deathsSummary] = await Promise.all([
      getRandomSummary(organizedContent.events),
      getRandomSummary(organizedContent.births),
      getRandomSummary(organizedContent.deaths),
    ]);

    res.json({
      title: page.title,
      summaries: {
        events: eventsSummary,
        births: birthsSummary,
        deaths: deathsSummary,
      },
    });
  } catch (error) {
    console.error("Error fetching data server side:", error);
    res.status(500).json({ error: "Error fetching data server side" });
  }
};

