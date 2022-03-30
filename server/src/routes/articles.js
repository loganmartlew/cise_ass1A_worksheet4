const { Router } = require('express');
const ArticleService = require('../services/ArticleService');

const articles = () => {
  const router = Router();
  const articleService = new ArticleService();

  router.get('/', (req, res) => {
    const articles = articleService.getAll();

    return res.status(200).json(articles);
  });

  return router;
};

module.exports = articles;
