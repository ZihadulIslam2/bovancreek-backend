import express from 'express'
import { globalErrorHandler } from './middlewares/globalErrorHandler'
import { notFound } from './middlewares/notFound'
const app = express()
import router from './routes'


app.use(express.json())

app.use('/api/v1', router)

app.use(notFound as never)
app.use(globalErrorHandler)

export default app
