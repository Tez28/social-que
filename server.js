// Add dependencies
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.eventNames.PORT || 3001;

// Add middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


