const express = require('express')
const router = express.Router()
router.get('/', (req, res) => {
  res.send('Hello World! asssssss')
})
router.get('/aa', (req, res) => {
  //res.send('Huy!')
  res.render('sample.ejs')
})
module.exports = router