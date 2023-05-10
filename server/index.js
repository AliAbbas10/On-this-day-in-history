const express = require('express');
const cors = require('cors');
const wikipediaRouter = require('./routes/wikipediaRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/wikipedia', wikipediaRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});