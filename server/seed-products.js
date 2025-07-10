require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/Product");

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

const products = [
  {
    name: "Men's T-Shirt",
    description: "Comfortable cotton T-shirt",
    price: 19.99,
    brand: "nike",
    category: "men",
    image: "https://via.placeholder.com/300x300.png?text=Men's+T-Shirt",
    countInStock: 50,
  },
  {
    name: "Women's Jacket",
    description: "Stylish winter jacket",
    price: 49.99,
    brand: "adidas",
    category: "women",
    image: "https://via.placeholder.com/300x300.png?text=Women's+Jacket",
    countInStock: 30,
  },
  {
    name: "Kids' Sneakers",
    description: "Comfortable sneakers for kids",
    price: 29.99,
    brand: "puma",
    category: "kids",
    image: "https://via.placeholder.com/300x300.png?text=Kids+Sneakers",
    countInStock: 40,
  },
  {
    name: "Leather Wallet",
    description: "Premium leather wallet",
    price: 39.99,
    brand: "levi",
    category: "accessories",
    image: "https://via.placeholder.com/300x300.png?text=Wallet",
    countInStock: 20,
  },
  {
    name: "Running Shoes",
    description: "High-performance running shoes",
    price: 79.99,
    brand: "zara",
    category: "footwear",
    image: "https://via.placeholder.com/300x300.png?text=Running+Shoes",
    countInStock: 25,
  },
];

const seedProducts = async () => {
  try {
    await Product.deleteMany(); // Clear existing products
    await Product.insertMany(products);
    console.log("Sample products inserted successfully!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedProducts();
