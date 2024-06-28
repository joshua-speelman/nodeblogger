const express = require("express");
const router = express.Router();

// routes
router.get("", (req, res) => {
  const locals = {
    title: "josh's test blog",
    description: "simple blog created with nodejs, express and mongoDB",
  };

  res.render("index", { locals });
});

router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;
