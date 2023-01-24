const Ask = require("../models/AskModel");
const AnswersController = require('./AnswerController')
class AskController {
  async renderAsk(req, res) {
    return res.render("ask");
  }
  async renderAskById(req, res) {
    try {
      const { id } = req.params;
      const ask = await Ask.findAskById(id);
      const { title, description } = ask[0];
      const id_ask = ask[0].id;
      const answers = await AnswersController.list(id_ask)
      res.render("askPage", {id_ask, title, description, answers});
    } catch (error) {
      console.log(error);
    }
  }
  async create(req, res) {
    try {
      const { title, description } = req.body;
      const ask = {
        title,
        description,
      };
      await Ask.create(ask);
      res.redirect("/ask");
    } catch (error) {
      console.log(error);
    }
  }
  async list() {
    try {
      return await Ask.list();
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new AskController();
