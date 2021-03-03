import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

import connectDB from './config/db.js'
import sampleRoutes from './routes/samples.js'
import valueRoutes from './routes/neuroValues.js'

dotenv.config()
const PORT = process.env.PORT

connectDB()

const app = express()
app.use (bodyParser.json ({limit: '10mb', extended: true}))
app.use (bodyParser.urlencoded ({limit: '10mb', extended: true}))
app.use(express.json())

app.use('/api/game', sampleRoutes)
app.use('/api/game', valueRoutes)


app.get('/', (req, res) => {
    res.send("server is running")
})

app.listen(PORT, () => {
    console.log(`Server listens for port ${PORT}`)
})