import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/connectdb.js";
import cookiParser from "cookie-parser"
import userRouter  from "./routes/user.route.js";


dotenv.config({
    path: './.env'
});

const app = express();


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
app.use(cookiParser())

connectDB()




app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.use('/api/v1/user', userRouter)


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} → http://localhost:${PORT}`);
});
