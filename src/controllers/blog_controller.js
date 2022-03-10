const axios = require('axios');

//GET ALL POSTS FROM API
const getAllPosts = async (req, res) => {
  try {
    const blogAPI = await axios.get(
      'https://www.twowanderingsoles.com/wp-json/wp/v2/posts',
    );
    // console.log(blogAPI.data);
    res.render('./posts/index', { posts: blogAPI.data });
  } catch (error) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.header);
    res.json(`Error occur: ${error.response.data}`);
  }
};

//GET ONE POST FROM API
const getPost = async (req, res) => {
  try {
    const post = await axios.get(
      `https://www.twowanderingsoles.com/wp-json/wp/v2/posts/${req.params.id}`,
    );
    console.log(post.data);
    res.render('./posts/post', { post: post.data });
  } catch (error) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.header);
    res.json(`Error occur: ${error.response.data}`);
  }
};

//GET ALL SEARCH POSTS FROM API
const searchPost = async (req, res) => {
  const searchParam = req.body.search;
  try {
    const blogAPI = await axios.get(
      `https://www.twowanderingsoles.com/wp-json/wp/v2/posts?search=${searchParam}`,
    );
    // console.log(blogAPI.data);
    res.render('./posts/index', { posts: blogAPI.data });
  } catch (error) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.header);
    res.json(`Error occur: ${error.response.data}`);
  }
};

module.exports = {
  getAllPosts,
  getPost,
  searchPost,
};
