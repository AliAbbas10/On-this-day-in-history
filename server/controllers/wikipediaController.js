const axios = require('axios');

exports.fetchWikipediaData = async (req, res) => {
  const day = req.params.day;
  const month = req.params.month;

  try {
    const response = await axios.get('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        format: 'json',
        prop: 'extracts',
        titles: `${month} ${day}`,
        explaintext: 1,
        exsectionformat: 'wiki',
        formatversion: 2
      }
    });

    const pages = response.data.query.pages;
    const page = pages[0];

    res.json({
      title: page.title,
      content: page.extract
    });
  } catch (error) {
    console.error('Error fetching Wikipedia data:', error);
    res.status(500).json({ error: 'Error fetching Wikipedia data' });
  }
};