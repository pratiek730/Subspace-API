const axios = require('axios');
const express = require('express')
const blogData = {}
const BlogRouter = express.Router()
const _ = require('lodash')

// use a middleware for getting data from URL
BlogRouter.use( '/', async (req,res,next) => {
    const response = await axios.get('https://intent-kit-16.hasura.app/api/rest/blogs',{
        headers: {
        'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6'
        }
      })
    blogData.blogs = response.data.blogs;

    console.log(blogData)
    return next();
})

// Get the response for '/' Get request
BlogRouter.get('/', (req, res) => {
    const blogs = _.map(blogData.blogs, 'title')
    // 1. Calculate the total number of blogs fetched
    const totalBlogs = _.size(blogs);

    // 2. Find the blog with the longest title
    const longestTitleBlog = _.maxBy(blogs, blog => blog.length);

    // 3. Determine the number of blogs with titles containing the word 'privacy'
    const privacyCount = _.filter(blogs, blog => _.includes(blog.toLowerCase(), 'privacy')).length;

    // 4. Create an array of all unique blogs
    const uniqueBlogs = _.uniqBy(blogs);

    const responseJson = {
        'total-blogs': totalBlogs,
        'longest-title': longestTitleBlog,
        'privacy-count': privacyCount,
        'unique-titles': uniqueBlogs
    }
    return res.status(200).json(responseJson);
})

module.exports = BlogRouter;