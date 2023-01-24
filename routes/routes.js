const express = require('express');
const router = express.Router();
const AskController = require('../controllers/AskController');
const HomeController = require('../controllers/HomeController');
const AnswerController = require('../controllers/AnswerController');
router.get('/',HomeController.renderHome)
router.get('/ask',AskController.renderAsk);
router.post('/ask',AskController.create);
router.get('/ask/:id',AskController.renderAskById)
router.get('/list',AskController.list);
router.post('/answer',AnswerController.create)
module.exports = router;