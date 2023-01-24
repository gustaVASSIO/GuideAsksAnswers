const Ask = require("../models/AskModel");
const AskController = require("../controllers/AskController");
class HomeController {
  async renderHome(req, res) {
    try {
      const asks = await AskController.list();
      res.render("index", { asks });
    } catch (error) {
      console.log(error);
    }
  }
  async pageAsks(offset) {}
}
module.exports = new HomeController();
