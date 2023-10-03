const {
  countBlogs,
  longestTitle,
  countWords,
  uniqueTitles,
} = require("../../models/blog-data/blog-data.model");



const httpGetData = (req, res) => {
  // 1. Calculate the total number of blogs fetched
  const totalBlogs = countBlogs();

  // 2. Find the blog with the longest title
  const longestTitleBlog = longestTitle();

  // 3. Determine the number of blogs with titles containing the word 'privacy'
  const privacyCount = countWords("privacy");

  // 4. Create an array of all unique blogs
  const uniqueBlogs = uniqueTitles();

  const responseJson = {
    "total-blogs": totalBlogs,
    "longest-title": longestTitleBlog,
    "privacy-count": privacyCount,
    "unique-titles": uniqueBlogs,
  };
  return res.status(200).json(responseJson);
};

module.exports = {
  httpGetData,
};
