const express = require("express");
const router = express.Router();
const multer = require("multer");

const postsController = require("../controllers/posts")


router.get("/", postsController.index);
router.get("/:slug", postsController.show);
router.post("/", multer().none(), postsController.store);



module.exports = router;