const express = require("express");
const { httpSearchBlogs } = require("./blog-search.controller");

const BlogSearch = express.Router();

BlogSearch.get("/", httpSearchBlogs);

module.exports = BlogSearch;
