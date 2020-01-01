const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//Routes
router.get("/", async (req, res) => {
  try {
    const post = await Post.find();
    res.json(post);
  } catch {
    res.json({ message: error });
  }
});

router.get("/specific", (req, res) => {
  res.send("specific");
});

router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch {
    res.json({ message: error });
  }
});

module.exports = router;
