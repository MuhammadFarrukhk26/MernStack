import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app = express()


// db and authenticateUser
import connectDB from './db/connect.js'

// routers
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobRoutes.js'


// middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

app.use(express.json())

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)

app.get('/', (req, res) => {
    // throw new Error('error');
    res.send('Welcome!')
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)
const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, (req, res) => {
            console.log(`Server is listening on port ${port}...`)
        })
    } catch (error) {
        console.log(error)

    }
}

start()