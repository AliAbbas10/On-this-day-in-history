const express = require('express');
const cors = require('cors');
const DataRouter = require('./routes/fetchDataRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/data', DataRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});