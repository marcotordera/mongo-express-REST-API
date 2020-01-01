//imports
const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
require("dotenv/config");

//import routes
const postsRoute = require("./routes/posts");

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//route middleware
app.use("/posts", postsRoute);

//index route
app.get("/", (req, res) => {
  res.send("home");
});


//connect to DB
mongoose
  .connect(process.env.DB_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log("DB Connected!"))
  .catch(err => {
    console.log(`DB Connection Error: ${err.message}`);
  });
//listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listen Sever port : ${PORT}`));
