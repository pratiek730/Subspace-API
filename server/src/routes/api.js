const express = require('express')
const BlogRouter = require('./blog-search/blog-search.router')

const api = express.Router()

api.use('/blog-search', BlogRouter)

module.exports = api;