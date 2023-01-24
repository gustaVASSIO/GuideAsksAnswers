const db = require("../config/db");
class AskModel {
  async create(ask) {
    try {
      await db.insert(ask).into("asks");
    } catch (error) {
      console.log(error);
    }
  }
  async list() {
    try {
      let data = [];
      data = await db.select().from("asks").orderBy("id", "desc");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async findAskById(id) {
    try {
      return await db.select().from("asks").where({ id: id });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new AskModel();
