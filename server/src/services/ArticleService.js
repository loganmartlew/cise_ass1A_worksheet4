const db = require('../db');

class ArticleService {
  constructor() {
    this.db = db;
  }

  getAll() {
    return db.getData('/articles');
  }

  getOne(id) {
    const articles = this.getAll();

    return articles.find(article => article._id == id);
  }

  addArticle(data) {
    const articles = this.getAll();

    const newArticles = [
      ...articles,
      {
        ...data,
        _id: articles.length + 1,
      },
    ];

    db.push('/articles', newArticles);
  }
}

module.exports = ArticleService;
