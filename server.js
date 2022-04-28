// Add dependencies
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.eventNames.PORT || 3001;

// Add middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// mongoose connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-que', {
    // useNewUrlParser: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true
});

// logs mongo queries
mongoose.set('debug', true);

//port listen and confirmation
app.listen(PORT, () => console.log(`🌍 Connected on localhost: ${PORT}`));
