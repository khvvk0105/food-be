const mongoose = require("mongoose");
const url = "mongodb+srv://bronze:dbPassword@cluster0.0uccaoe.mongodb.net/";

export const connect = async () => {
  try {
    await mongoose.connect(url);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
  }
};
