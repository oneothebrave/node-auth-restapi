const express = require("express");
const app = express();
const mongoose = require("mongoose");
// 通过npm install dotenv安装的插件，可以将一些机密配置写在.env文件里面，这些配置不会被别人看到
const dotenv = require("dotenv");

// import routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts")

dotenv.config();

// connect to db
mongoose.connect(
    process.env.MONGO_URL,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log("Connected to db !"));

// middleware
app.use(express.json())


// route middlewares
app.use('/api/user', authRoute)
app.use('/api/posts', postRoute)


app.listen(3000, () => console.log("Server up and running."))