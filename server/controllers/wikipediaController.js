let fetch;
const { Configuration, OpenAIApi } = require("openai") ;

const configuration = new Configuration({
    apiKey: env.apiKey
})

const openai = new OpenAIApi(configuration);

async function generateSummary(prompt) {
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: `Write a 300 word summary of the following event: ${prompt}`},]
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

(async () => {
  fetch = (await import('node-fetch')).default;
})();

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
    } else if (line.startsWith('=== ')) {
      if (organizedData[currentCategory]) {
        const item = line.slice(4, -4);
        organizedData[currentCategory].push(item);
      }
    } else if (currentCategory && line.trim() && organizedData[currentCategory]) {
      organizedData[currentCategory].push(line);
    }
  });

  return organizedData;
};

exports.fetchWikipediaData = async (req, res) => {
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

    const summaries = {
      events: await getRandomSummary(organizedContent.events),
      births: await getRandomSummary(organizedContent.births),
      deaths: await getRandomSummary(organizedContent.deaths),
    };

    res.json({
      title: page.title,
      summaries: summaries,
    });
  } catch (error) {
    console.error('Error fetching Wikipedia data:', error);
    res.status(500).json({ error: 'Error fetching Wikipedia data' });
  }
};


