const express = require("express");
const {
  addBook,
  getBook,
  updateBook,
  deleteBook,
} = require("../controllers/books");
const router = express.Router();

router.post("/", addBook);
router.get("/s", getBook);
router.patch("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
