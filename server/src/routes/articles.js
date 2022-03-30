const { Router } = require('express');
const ArticleService = require('../services/ArticleService');

const articles = () => {
  const router = Router();
  const articleService = new ArticleService();

  router.get('/', (req, res) => {
    const articles = articleService.getAll();

    return res.status(200).json(articles);
  });

  router.get('/:id', (req, res) => {
    const { id } = req.params;

    if (!id) {
      return res.status(500).send('ID parameter was undefined');
    }

    const article = articleService.getOne(id);

    if (!article) {
      return res.status(404).send('Article not found');
    }

    return res.status(200).json(article);
  });

  router.post('/', (req, res) => {
    const { title, authors, source, pubyear, doi, claim, evidence } = req.body;

    if (
      !title ||
      !authors ||
      !source ||
      !pubyear ||
      !doi ||
      !claim ||
      !evidence
    ) {
      return res.status(422).send('Parameter missing from request body');
    }

    articleService.addArticle({
      title,
      authors,
      source,
      pubyear,
      doi,
      claim,
      evidence,
    });

    return res.status(201).send('Article added');
  });

  return router;
};

module.exports = articles;
