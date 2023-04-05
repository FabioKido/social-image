const express = require('express')
const cors = require('cors')
const path = require('path')

require("dotenv").config({
  path: path.join(__dirname, "../.env")
});

const routes = require('./routes')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(
  "/images",
  express.static(path.resolve(__dirname, "..", "public", "images"))
)
app.use(routes)

app.listen(port, () => {
  console.log(`Api listening on port ${port}`)
})