import mongoose from "mongoose";
require("dotenv").config();

async function mongoConnectionDB() {
  try {
    mongoose.connect(
      `mongodb+srv://banana:${process.env.PASSWORD}@cluster0.1cykru3.mongodb.net/?retryWrites=true&w=majority`
    );
  } catch (error) {
    console.error(error);
  }
}

export { mongoConnectionDB };
