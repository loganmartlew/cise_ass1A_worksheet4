const { Router } = require('express');
const articleRoutes = require('./articles');

const routes = () => {
  const router = Router();

  router.use('/articles', articleRoutes());

  return router;
};

module.exports = routes;
