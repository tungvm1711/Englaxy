// server/routes/article.js
const multipart = require('connect-multiparty');
const multipartWare = multipart();

const express = require('express');
const router = express.Router();
const articlecontroller = require('../../controllers/articles');

router.get('/articles', articlecontroller.getAll);
router.post('/article', multipartWare, articlecontroller.addArticle);
router.post('/article/clap', articlecontroller.clapArticle);
router.post('/article/comment', articlecontroller.commentArticle);
router.get('/article/:id', articlecontroller.getArticle);

module.exports = router;