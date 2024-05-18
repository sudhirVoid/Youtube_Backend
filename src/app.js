import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"})) // to limit the incoming data size.
app.use(express.urlencoded({extended: true})) // used for url based parameters.
app.use(express.static("public")) // to serve static files
app.use(cookieParser())

export {app}