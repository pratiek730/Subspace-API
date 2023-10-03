const express = require("express");
const BlogRouter = require("./blog-stat/blog-stat.router");
const BlogSearch = require("./blog-search/blog-search.router");
const { fetchData } = require("../models/blog-data/blog-data.model");

const api = express.Router();

const httpFetchDataFromURL = async (req, res, next) => {
  const response = await fetchData();
  if (response.error) {
    console.error(
      `Error code : ${response.error.code} \n\nMessage From Server : ${response.error.message}\n\nMessage From API : ${response.error.data}`
    );
    return res.status(response.error.code).json(response.error);
  }
  console.log(response);
  return next();
};

api.use("/", httpFetchDataFromURL);
api.use("/blog-stat", BlogRouter);
api.use("/blog-search", BlogSearch);

module.exports = api;
