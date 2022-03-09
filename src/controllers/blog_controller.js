const getAllPosts = async (req, res) => {
  res.render('blog_index');
};

module.exports = {
  getAllPosts,
};
