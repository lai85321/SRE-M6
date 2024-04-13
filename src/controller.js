const getAddOne = async (req, res) => {
  const { number } = req.query;
  let input = parseInt(number);
  try {
    if (input === null || isNaN(input)) {
      return res.status(400).json({ error: "Please enter a number" });
    }
    let result = input + 1;
    res.status(200).json({ result: result });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAddOne,
};
