const path = require("path");
const router = require("express").Router();

router.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/index.html'));
  });

router.get("/stats", (_req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get("/exercise", (_req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

module.exports = router;