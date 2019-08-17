const express = require('express');
const router = express.Router();
const wordController = require('../../controllers/words');

/*
router.post('/', userController.createUser);
*/
/*
router.get('/samplewords', wordController.getSampleWords);
*/
router.post('/keywords', wordController.getKeyWords);

module.exports = router;


