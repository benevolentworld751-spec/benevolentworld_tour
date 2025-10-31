import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/benevolent" || process.env.MONGO_UR);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("error to connect DB", error);
    process.exit(0);
  }
};