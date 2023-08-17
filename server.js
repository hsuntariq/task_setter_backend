const { json } = require('express');
const express = require('express');
const connectDB = require('./config/connect');
const errorHandler = require('./middlewares/errorMiddleware');
const port = 3001;
require('colors')
require('dotenv').config();
// requrie cors
const cors = require('cors');
// initialize express to a variable

const app = express();

app.use(cors());


// connect to database



connectDB();


// get data from the body
// using middlewares

app.use(express.json());
app.use(express.urlencoded({extended:false}));


// routes
// goal routes
app.use('/api/goals/',require('./routes/goalRoutes'))

// user routes
app.use('/api/users/',require('./routes/userRoutes'))
// handle the errors
app.use(errorHandler)
// build your server
app.listen(port,()=>console.log(`server started running on port:${port}`))