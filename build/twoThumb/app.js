'use strict';

var _initController = require('./controller/initController');

var _initController2 = _interopRequireDefault(_initController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Koa = require('koa');
var co = require('co');
var path = require('path');
var render = require('koa-swig');
var temp = require('koa-static');
var router = require('koa-simple-router');
var app = new Koa();

_initController2.default.index(app, router);

app.use(temp(__dirname + '/public'));

app.context.render = co.wrap(render({
    root: path.join(__dirname, '/views'),
    autoescape: true,
    cache: 'memory',
    ext: 'html'
}));

app.listen(3100);
