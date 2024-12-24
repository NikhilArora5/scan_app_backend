const getDailyTips = async (req, res) => {
  try {
    res.send({ message: "Get daily Tips", data: {} ,status:200});
  } catch (error) {}
};

module.exports = { getDailyTips };
