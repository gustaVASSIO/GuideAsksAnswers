const Answer = require("../models/AnswerModel");
class AnswerController {
  async create(req, res) {
    try {
      const { id_ask, body_answer } = req.body;
      const answer = {
        id_ask,
        answer: body_answer,
      };
      await Answer.create(answer);
      res.redirect("ask/" + id_ask);
    } catch (error) {
      console.log(error);
    }
  }
  async list(id_ask){
    try {
      return await Answer.list(id_ask);
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new AnswerController();
