const { searchWord } = require("../../models/blog-data/blog-data.model");

const httpSearchBlogs = (req, res) => {
  const response = searchWord(req.query.query);
  res.status(200).json(response);
};

module.exports = {
  httpSearchBlogs,
};
