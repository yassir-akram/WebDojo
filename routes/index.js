const express = require('express');
const app = express.Router();
const config = require('config');
const request = require('request');

// Get the config const
const PAGE_ACCESS_TOKEN = config.get('pageAccessToken');
const VERIFY_TOKEN = config.get('verifyToken');

app.get('/', function(req, res, next) {
    res.render('index');
});

app.get('/webhook', function(req, res) {
    console.log('Webhook is working');
    res.sendStatus(200);
});

app.post('/webhook', function(req, res) {
    console.log('message recieved');
    res.sendStatus(201);
});

module.exports = app;
