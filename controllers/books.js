const { Op } = require("sequelize");
const Book = require("../models/Books");

const addBook = async (req, res) => {
  const {
    body: { title, author, category, genre },
    user: { username },
  } = req;

  if (!title || !author || !category || !genre) {
    return res.status(400).json({
      msg: "Please fill out all fields",
    });
  }

  const bodyObject = { title, author, category, genre, createdBy: username };
  const book = await Book.create(bodyObject);
  res.status(201).json(book);
};

const getBook = async (req, res) => {
  const { title, author, category, genre } = req.query;
  const queryParams = Object.keys(req.query);

  if (queryParams.length === 0) {
    const book = await Book.findAll();
    return res.status(200).json({
      book,
    });
  }

  const book = await Book.findAll({
    where: {
      [Op.or]: [
        {
          title: {
            [Op.substring]: title,
          },
        },
        {
          author: {
            [Op.or]: {
              [Op.startsWith]: author,
              [Op.endsWith]: author,
            },
          },
        },
        {
          category: {
            [Op.startsWith]: category,
          },
        },
        {
          genre: {
            [Op.startsWith]: genre,
          },
        },
      ],
    },
  });

  if (book.length === 0) {
    return res.status(404).json({
      msg: "No Book found with search parameters",
    });
  }

  res.status(200).json({
    nbHits: book.length,
    book,
  });
};

const updateBook = async (req, res) => {
  const {
    body: { title, author, category, genre },
    params: { id },
  } = req;
  const bodyObject = {};

  if (title) {
    bodyObject.title = title;
  }
  if (author) {
    bodyObject.author = author;
  }
  if (category) {
    bodyObject.category = category;
  }
  if (genre) {
    bodyObject.genre = genre;
  }

  const foundBook = await Book.findOne({
    where: {
      id: parseInt(id),
    },
  });

  if (!foundBook) {
    return res.status(404).json({
      msg: `No book found with id ${id}`,
    });
  }

  const book = await Book.update(bodyObject, {
    where: {
      id: parseInt(id),
    },
  });
  res.status(200).json({
    msg: "Update successful",
  });
};

const deleteBook = async (req, res) => {
  const { id } = req.params;

  const foundBook = await Book.findOne({
    where: {
      id: parseInt(id),
    },
  });

  if (!foundBook) {
    return res.status(404).json({
      msg: `No book found with id ${id}`,
    });
  }

  const book = await Book.destroy({
    where: {
      id: parseInt(id),
    },
  });
  res.status(200).json({
    msg: "Book Deleted",
  });
};

module.exports = { addBook, getBook, updateBook, deleteBook };
