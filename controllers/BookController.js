const { Op } = require('sequelize')
const Book = require('../models/Books')

const addBook = async (req, res) => {
  const {
    body: {
      title,
      author,
      category,
      year,
      language,
      ISBN,
      series,
      volume,
      publisher
    },
    user: { username }
  } = req

  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({
      msg: 'Please fill out all fields'
    })
  }

  const bodyObject = {
    title,
    author,
    category,
    year,
    language,
    ISBN,
    series,
    volume,
    publisher,
    createdBy: username
  }
  await Book.create(bodyObject)
  return res.status(201).json({
    msg: 'Book Added successfully'
  })
}

const getBook = async (req, res) => {
  const {
    title,
    author,
    category,
    year,
    language,
    ISBN,
    series,
    volume,
    publisher
  } = req.query
  // const queryParams = Object.keys(req.query);

  if (Object.keys(req.query).length === 0) {
    const book = await Book.findAll()
    return res.status(200).json({
      book
    })
  }

  const book = await Book.findAll({
    where: {
      [Op.or]: [
        {
          title: {
            [Op.substring]: title
          }
        },
        {
          author: {
            [Op.or]: {
              [Op.startsWith]: author,
              [Op.endsWith]: author
            }
          }
        },
        {
          category: {
            [Op.startsWith]: category
          }
        },
        {
          year: {
            [Op.startsWith]: year
          }
        },
        {
          language: {
            [Op.startsWith]: language
          }
        },
        {
          ISBN: {
            [Op.startsWith]: ISBN
          }
        },
        {
          series: {
            [Op.startsWith]: series
          }
        },
        {
          volume: {
            [Op.startsWith]: volume
          }
        },
        {
          publisher: {
            [Op.startsWith]: publisher
          }
        }
      ]
    }
  })

  if (book.length === 0) {
    return res.status(404).json({
      msg: 'No Book found with search parameters'
    })
  }

  return res.status(200).json({
    nbHits: book.length,
    book
  })
}

const updateBook = async (req, res) => {
  const {
    body: {
      title,
      author,
      category,
      year,
      language,
      ISBN,
      series,
      volume,
      publisher
    },
    params: { id }
  } = req
  const bodyParams = Object.keys(req.body)
  if (bodyParams.length === 0) {
    return res.status(400).json({
      msg: 'Fill out necessary fields'
    })
  }
  const bodyObject = {}

  if (title) {
    bodyObject.title = title
  }
  if (author) {
    bodyObject.author = author
  }
  if (category) {
    bodyObject.category = category
  }
  if (year) {
    bodyObject.year = year
  }
  if (language) {
    bodyObject.language = language
  }
  if (ISBN) {
    bodyObject.ISBN = ISBN
  }
  if (series) {
    bodyObject.series = series
  }
  if (volume) {
    bodyObject.volume = volume
  }
  if (publisher) {
    bodyObject.publisher = publisher
  }

  const foundBook = await Book.findOne({
    where: {
      id: parseInt(id, 10)
    }
  })

  if (!foundBook) {
    return res.status(404).json({
      msg: 'Book does not exist'
    })
  }

  await Book.update(bodyObject, {
    where: {
      id: parseInt(id, 10)
    }
  })
  return res.status(200).json({
    msg: 'Update successful'
  })
}

const deleteBook = async (req, res) => {
  const { id } = req.params

  const foundBook = await Book.findOne({
    where: {
      id: parseInt(id, 10)
    }
  })

  if (!foundBook) {
    return res.status(404).json({
      msg: `No book found with id ${id}`
    })
  }

  await Book.destroy({
    where: {
      id: parseInt(id, 10)
    }
  })
  return res.status(200).json({
    msg: 'Book Deleted'
  })
}

module.exports = {
  addBook,
  getBook,
  updateBook,
  deleteBook
}
