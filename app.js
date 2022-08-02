require('express-async-errors')
const express = require('express')
const dotenv = require('dotenv')
const synch = require('./models/index')
const authorize = require('./middlewares/authz')
const authnRoutes = require('./routes/authn')
const bookRoutes = require('./routes/books')
const notFound = require('./middlewares/not-found')
const errorHandler = require('./middlewares/error-handler')

dotenv.config()
const app = express()
const port = 3210 || process.env.PORT

app.use(express.json())
app.use('/api/auth', authnRoutes)
app.use('/api/books', authorize, bookRoutes)
app.use(notFound)
app.use(errorHandler)

const start = async () => {
  try {
    // await sequelize.authenticate();
    // console.log("DB Conn Success");
    synch()
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`)
    })
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

start()
