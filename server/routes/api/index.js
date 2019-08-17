const router = require('express').Router();

router.use('/words', require('./words'));
router.use('/users', require('./users'));
router.use('/articles', require('./articles'));
router.use('/vocabularies', require('./vocabularies'));

module.exports = router;
