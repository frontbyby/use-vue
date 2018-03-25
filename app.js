const Koa = require("koa"),
      Router = require("koa-router"),
      json = require("koa-json"),
      logger = require("koa-logger"),
      bodyParser = require("koa-bodyparser");
const app = new Koa();
app.use(bodyParser());
app.use(json());
app.use(logger());

app.use(async (ctx, next) => {
    let start = new Date();
    await next();
    let ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}`);
})
app.on('error', err => {
    console.log('server error', err);
})
app.listen(8090, () => {
    console.log('koa is listening in 8090');
})

module.exports = app;