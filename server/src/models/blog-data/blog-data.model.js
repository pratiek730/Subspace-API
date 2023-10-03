const _ = require("lodash");
const axios = require("axios");

var blogData = [];
var blogTitles = [];
const URL = "https://intent-kit-16.hasura.app/api/rest/blogs";
const RequestHeader = {
  headers: {
    "x-hasura-admin-secret":
      "32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6",
  },
};

const fetchData = async () => {
  if(blogData.length === 0)
  {
    const response = await axios.get(URL, RequestHeader).catch((error) => {
    return { error: { code: 500, message: "URL Returned Error", data: error } };
  });
  if (response.error) {
    return { error: response.error };
  }
  blogData = response.data.blogs;
  blogTitles = _.map(blogData, "title");
  console.log(blogData);
  return { status: 200, message: "Successfully Loaded Data" };
}
return { status: 200, message: "Data Already Loaded" };
  
  
};

const countBlogs = () => _.size(blogTitles);

const longestTitle = () => _.maxBy(blogTitles, (blog) => blog.length);

const countWords = (search) =>
  _.filter(blogTitles, (blog) => _.includes(blog.toLowerCase(), search)).length;

const searchWord = (search) =>
  _.filter(blogTitles, (blog) => _.includes(blog.toLowerCase(), search));

const uniqueTitles = () => _.uniqBy(blogTitles);


const memoizedCountWords = _.memoize(countWords)
const memoizedSearchWord = _.memoize(searchWord)

module.exports = {
  fetchData,
  countBlogs,
  countWords: memoizedCountWords,
  longestTitle,
  uniqueTitles,
  searchWord: memoizedSearchWord,
};
