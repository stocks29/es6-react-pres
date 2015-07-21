require('babel/register');

const koa = require('koa');
const route = require('koa-route');
const serve = require('koa-static');
const mount = require('koa-mount');
const React = require('react');
const _ = require('lodash');
const fs = require('fs');

const baseTemplate = fs.readFileSync('./baseTemplate.html');
const ClientApp = require('./jsx/index.jsx');

var app = koa();

app.use(mount('/fa', serve('../node_modules/font-awesome')));
app.use(mount('/public', serve('./public')));

app.use(route.get('/', function *() {
  var rendered = React.renderToString(React.createElement(ClientApp));
  this.body = _.template(baseTemplate)({body:rendered});
}));

app.listen(3000);
