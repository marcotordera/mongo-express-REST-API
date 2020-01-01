//imports
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
//import routes
const postsRoute = require("./routes/posts");
const cors = require("cors");

//middleware
//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//cors
app.use(cors());

//route middleware
app.use("/posts", postsRoute);

//index route
app.get("/", (req, res) => {
  res.send("home");
});

//connect to DB
mongoose
  .connect(
    "mongodb+srv://admin:Password123_+@cluster0-nfqot.mongodb.net/test?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true
    }
  )
  .then(() => console.log("DB Connected!"))
  .catch(err => {
    console.log(`DB Connection Error: ${err.message}`);
  });
//listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listen Sever port : ${PORT}`));
