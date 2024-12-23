const getDailyTips = async (req, res) => {
  try {
    res.send({ message: "Get daily Tips", data: {} });
  } catch (error) {}
};

module.exports = { getDailyTips };
