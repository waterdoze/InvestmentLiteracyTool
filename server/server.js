const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 3001
const uri = process.env.ATLAS_URI

app.use(cors())
app.use(express.json())

mongoose.set('strictQuery', false)
mongoose.connect(uri)

app.get('/perDay', async (req, res) => {
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})