const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

//express app
const app = express();

//Express configurations
app.use(express.urlencoded({extended: true }));
app.use(express.json());

// Allow express app to serve static content from public
app.use(express.static("public"));

// connect to mongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

// routes
app.use(require("./routes"));

// Listen
app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});