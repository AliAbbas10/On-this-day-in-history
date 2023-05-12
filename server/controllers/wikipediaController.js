let fetch;

(async () => {
  fetch = (await import('node-fetch')).default;
})();

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

    res.json({
      title: page.title,
      content: page.extract
    });
  } catch (error) {
    console.error('Error fetching Wikipedia data:', error);
    res.status(500).json({ error: 'Error fetching Wikipedia data' });
  }
};