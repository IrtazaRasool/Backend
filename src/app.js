import express, { urlencoded } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app= express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
}));

// it is for express to accept json file
app.use(express.json({limit:"16kb"}))

// it is to tell express to accept date for encoded urls
app.use(express.urlencoded({extended:true, limit:"16kb"}))

//we want to store file in server this will store file in public folder
app.use(express.static("public"))

app.use(cookieParser())

export {app}