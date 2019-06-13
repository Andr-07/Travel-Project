import fs from 'fs';
import express from 'express';
import path from 'path';
import proxy from 'http-proxy-middleware';
import handlebars from 'handlebars';
import config from './config/default';
import router from './router';

const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const redis   = require("redis");
const RedisStore = require('connect-redis')(session);
const client  = redis.createClient();

const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/reactYelp', {useNewUrlParser: true});



const app = express();

// Обработка POST запросов.
// urlencoded.
app.use(express.urlencoded({ extended: true }));
// json.
app.use(express.json());

const { buildConfig: { assetsDir, targetDir }, server: { port }, proxyAssets } = config;

app.use(session({
  store: new RedisStore({ 
    client,
    host: 'localhost', 
    port: 6379, 
    ttl :  260
  }),
  key: 'user_sid',
  secret: 'anything here',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 600000
  }
}));

if (config.appModeDev) {
  app.use(
    `/${assetsDir}`,
    proxy({ target: `http://${proxyAssets.host}:${proxyAssets.port}`, changeOrigin: true }),
  );
} else {
  app.use(
    `/${assetsDir}`,
    express.static(path.join(process.cwd(), targetDir, 'client')),
  );
}

app.use('/api', router);

app.use('*', (req, res) => {
  const template = handlebars.compile(fs.readFileSync(
    path.join(__dirname, 'index.hbs'),
    'utf8',
  ));
  const context = {
    title: 'Express React Skeleton'
  };
  res.send(template(context));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
