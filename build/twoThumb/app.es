const Koa = require('koa');
const co = require('co');
const path = require('path');
const render = require('koa-swig');
const temp = require('koa-static');
const router = require('koa-simple-router');
const app = new Koa();

import initController from './controller/initController';
initController.index(app, router);

app.use(render(__dirname + '/public'));
 
app.context.render = co.wrap(render({
    root: path.join(__dirname, '/views'),
    autoescape: true,
    cache: 'memory',
    ext: 'html'
}));

app.listen(3100);
