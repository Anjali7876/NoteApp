const express = require('express')
const { getAllBlogsController, createBlogsController, updateBlogsController, getBlogByIdController, deleteBlogController, userBlogController } = require('../controllers/blogController')
//router object
const router = express.Router()

//router
//GET || all Notes
router.get('/all-blog', getAllBlogsController);

//POST || create Notes
router.post('/create-note', createBlogsController);

//PUT || update Notes
router.put('/update-blog/:id', updateBlogsController);

//GET || read Single Notes Details
router.get('/get-blog/:id', getBlogByIdController);

//DELETE || delete Notes
router.delete('/delete-blog/:id', deleteBlogController);

//GET || user Notes
router.get('/user-blog/:id', userBlogController);
module.exports = router;












































































































