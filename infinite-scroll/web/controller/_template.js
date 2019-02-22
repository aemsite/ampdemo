'use strict';
/* global __dirname */
const fs = require('fs');
const path = require('path');

async function infiniteScroll(ctx, next) {    // eslint-disable-line
    const data = fs.readFileSync(path.join(__dirname, '../template/infinite-scroll.html')).toString();
    ctx.body = data;
}

async function jsonFakeData(ctx, next) {    // eslint-disable-line
    const data = fs.readFileSync(path.join(__dirname, '../data/_data.json')).toString();
    ctx.body = {
        json: JSON.parse(data.replace('nextUrlFullLink', '//127.0.0.1/json-fake-data'))
    }
}

module.exports = { infiniteScroll, jsonFakeData };
