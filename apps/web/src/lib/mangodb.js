import mongoose from "mongoose";

const connectMangoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected");
  } catch (err) {
    console.log(err.message);
  }
};
export default connectMangoDB;
