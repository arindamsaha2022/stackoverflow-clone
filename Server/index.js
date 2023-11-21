import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/users"
import cors from 'cors';

const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = "mongodb+srv://admin:admin@stack-overflow-clone.pqtrnry.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
    .catch((error) => console.log(error.message));

app.get('/', (req, res) => {
    res.send("This is the stackoverflow clone");
});
app.use('/us')
app.use("/user",userRoutes )

