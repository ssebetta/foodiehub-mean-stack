const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// middleware
app.use(bodyParser.json());
app.use(cors());

// Database connection
mongoose.connect('mongodb://localhost:27017/foodiehub', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));

// Routes
const foodRoutes = require('./routes/food');
app.use('/api/food', foodRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
