const express = require("express");
const router = express.Router();
const multer = require("multer");

const postsController = require("../controllers/posts")
const authenticateUserMiddleware = require("../middlewares/authenticateUser");


router.get("/", postsController.index);
router.get("/create", postsController.create);
router.get("/:slug", postsController.show);
router.get("/:slug/download", postsController.download);

router.post("/store", authenticateUserMiddleware, postsController.store);
router.delete("/:slug", postsController.destroy);




module.exports = router;