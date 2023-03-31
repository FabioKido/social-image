import express from 'express'
import renderSocialImage from 'puppeteer-social-image'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('New api!')
})

app.listen(port, () => {
  console.log(`Api listening on port ${port}`)
})
