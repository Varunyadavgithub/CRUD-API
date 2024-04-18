const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// const Product = require("./models/product.model");
const productRoute=require("./routes/product.route");

const app = express();
dotenv.config();

const PORT = process.env.PORT;
const URI = process.env.DATABASE_URI;

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// routes
app.use('/api/products',productRoute);




app.get("/", (req, res) => {
  res.send("Hello, from server.");
});





// Conect to the Database.
mongoose
  .connect(URI)
  .then(() => {
    console.log("Successfully connected to Database.");
    app.listen(PORT || 5000, () => {
      console.log("Server is runing on port:", PORT);
    });
  })
  .catch(() => {
    console.log("Connection faild.");
  });


