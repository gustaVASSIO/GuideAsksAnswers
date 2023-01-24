const db = require("../config/db");
class AnswerModel {
  async create(answer) {
    try {
      await db.insert(answer).into("answers");
    } catch (error) {
      console.log(error);
    }
  }
  async list(id_ask) {
    try {
        return await db.select().from("answers").where({ id_ask: id_ask });
    } catch (error) {
        console.log(error)
    }
  }
}
module.exports = new AnswerModel();
