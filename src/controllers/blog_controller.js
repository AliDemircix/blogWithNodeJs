const axios = require('axios');
const getAllPosts = async (req, res) => {
  try {
    const blogAPI = await axios.get(
      'https://www.fotodunyam.com/wp-json/wp/v2/posts',
    );
    console.log(blogAPI.data);
    res.render('./posts/index');
  } catch (error) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.header);
    res.json(`Error occur: ${error.response.data}`);
  }
};
const getPost = async (req, res) => {
  try {
    const post = await axios.get(
      `https://www.fotodunyam.com/wp-json/wp/v2/posts/${req.params.id}`,
    );
    console.log(post.data);
    res.render('./posts/post');
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
};
