const express = require('express');
const dotenv = require('dotenv');

const homeController = require("./controllers/home");
const posts = require("./routers/posts");
const errorsFormatterMiddleware = require('./middlewares/errorsFormatter');
const routeNotFoundMiddleware = require('./middlewares/routeNotFound');


dotenv.config();
const app = express();
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get("/", homeController.index);
app.use("/posts", posts);


// gestiamo con il middlewars gli errori (come ultimo elemento prima del listen)
app.use(errorsFormatterMiddleware);
// 404
app.use(routeNotFoundMiddleware)

app.listen( process.env.PORT || 3000, ()=>{
    console.log("server acceso a http://localhost:" + process.env.PORT)
})
