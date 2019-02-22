'use strict';

const Router = require('koa-router');
const _router = new Router();

const { jsonFakeData, infiniteScroll } = require('./_template');

_router.get('/json-fake-data', jsonFakeData);
_router.get('/infinite-scroll', infiniteScroll);

module.exports = _router;
