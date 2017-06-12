'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var initController = {
	index: function index(app, router) {
		app.use(router(function (_) {
			_.get('/', function (ctx, next) {
				ctx.body = 'hello';
			});
			_.get('/index/index', async function (ctx, next) {
				ctx.body = await ctx.render('index');
			});
		}));
	}
};

exports.default = initController;
