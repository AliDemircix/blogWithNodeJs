const router = require('express').Router();
const blogController = require('../controllers/blog_controller');
router.get('/', blogController.getAllPosts);
router.get('/:id', blogController.getPost);
module.exports = router;
