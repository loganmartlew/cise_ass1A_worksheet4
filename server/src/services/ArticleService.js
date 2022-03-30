const db = require('../db');

export default class ArticleService {
  constructor() {
    this.db = db;
  }

  getAll() {
    return db.getData('/articles');
  }

  getOne(id) {
    const articles = this.getAll();

    return articles.find(article => article._id === id);
  }

  add(data) {
    const articles = this.getAll();

    const newArticles = [
      ...articles,
      {
        ...data,
        _id: articles.length,
      },
    ];

    db.push('/articles', newArticles);
  }
}
