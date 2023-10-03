const express = require("express");
const BlogRouter = express.Router();

const { httpGetData } = require("./blog-stat.controller");

// Get the response for '/' Get request
BlogRouter.get("/", httpGetData);

module.exports = BlogRouter;
