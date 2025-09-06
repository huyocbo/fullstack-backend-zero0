const express = require('express')
const path = require('path')
require('dotenv').config()


const configviewengines = require('./config/viewengines')

const webRoutes = require('./routes/web') 

const app = express()
const port = process.env.PORT 
const host_name = process.env.HOST_NAME

configviewengines(app)
//khai bao route
app.use('/', webRoutes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
