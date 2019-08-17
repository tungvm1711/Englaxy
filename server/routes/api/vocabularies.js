const express = require('express');
const router = express.Router();
const vocabularyController = require('../../controllers/vocabularies');

router.get('/', vocabularyController.getAll);
router.post('/', vocabularyController.create);
router.post('/:id', vocabularyController.findById, vocabularyController.update, vocabularyController.remove);
router.use('/random', vocabularyController.getRandom);
router.get('/daily', vocabularyController.getDaily);
router.post('/search', vocabularyController.search);
router.post('/search/autocomplete', vocabularyController.searchFuzzy);
router.post('/:id/mark', vocabularyController.mark);
router.get('/marked', vocabularyController.getMarked);
router.get('/pos', vocabularyController.getPOS);

module.exports = router;