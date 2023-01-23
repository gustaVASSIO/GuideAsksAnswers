const express = require('express');
const router = express.Router();
const AskController = require('../controllers/AskController');
router.get('/ask',AskController.create)


module.exports = router