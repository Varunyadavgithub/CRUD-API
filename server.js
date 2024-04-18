const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Product = require("./models/product.model");

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

const PORT = process.env.PORT;
const URI = process.env.DATABASE_URI;

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

app.get("/", (req, res) => {
  res.send("Hello, from server.");
});

// Create-API
/*----------------------API to create Product----------------------*/
app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/*----------------------API to get all Products----------------------*/
app.get("/api/products",async (req,res)=>{
    try{
        const products=await Product.find({});
        res.status(200).json(products);
    } catch(error){
        res.status(500).json({message:error.message});
    }
});

/*----------------------API to get specific Product by there id----------------------*/
// Ex: id = 66211d096bb445dc8e7d4f50

app.get("/api/product/:id",async (req,res)=>{
    try{
        const {id}=req.params;
        const product=await Product.findById(id);
        res.status(200).json(product);
    } catch(error){
        res.status(500).json({message:error.message});
    }
});

// Update-API
/*----------------------API to update a specific Product by there id----------------------*/
app.put("/api/product/:id",async (req,res)=>{
    try{
        const {id}=req.params;
        const product=await Product.findByIdAndUpdate(id,req.body);
        if(!product){
            return res.status(404).json({message:"Product not found"})
        }
        const updatedProduct=await Product.findById(id);
        res.status(200).json(updatedProduct);
    }catch(error){
        res.status(500).json({message:error.message});
    }
})

// Delete-API
/*----------------------API to delete a specific Product by there id----------------------*/
app.delete("/api/product/:id",async (req,res)=>{
  try{
    const {id}=req.params;
    const product=await Product.findByIdAndDelete(id)
    if(!product){
      return res.status(404).json({message:"Product not found."})
    }
    res.status(200).json({message:"Product deleted successfully"})
  } catch(error){
    res.status(500).json({message:error.message})
  }
})


