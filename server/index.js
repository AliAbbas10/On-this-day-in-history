const express = require('express');
const cors = require('cors');
const app = express();
const welcomeRoutes = require('./routes/welcomeRoutes');

// Enable CORS for all routes
app.use(cors());

app.use(express.json());
// app.use('/api/welcome', welcomeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));