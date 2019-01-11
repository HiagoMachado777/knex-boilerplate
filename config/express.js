import express from 'express';
import bodyParser from 'body-parser';

import routes from '../app/routes'

export default () => {
  const app = new express();
  
  app.use(bodyParser.json({limit: '5mb'}));
  app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));
  
  app.use('/', routes);
  return app;
};