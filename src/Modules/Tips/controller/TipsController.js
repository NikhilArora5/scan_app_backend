const db = require("../../../db/models");



const getDailyTips = async (req, res) => {
  try {

    const data = await db.Devs.findAll()

    res.send({ message: "Get daily Tips", data: data ,status:200});
  } catch (error) {}
};

module.exports = { getDailyTips };
