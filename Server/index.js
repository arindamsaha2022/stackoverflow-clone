import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import useRoutes from './routes/users.js'
import questionRoutes  from "./routes/Questions.js";
import answerRoutes from './routes/Answer.js'

const app =express()
dotenv.config()
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());
const PORT =process.env.PORT || 5000

app.get('/',(req, res) => {
    res.send("This is a stack overflow clone API")
})

app.use('/user',useRoutes)
app.use('/questions',questionRoutes )
app.use('/answer', answerRoutes)

 const CONECTION_URL = process.env.CONNECTION_URL
mongoose.connect(CONECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err.message));





