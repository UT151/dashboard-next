import mongoose from "mongoose";

const connectToDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://unnatin:YeJr1@cluster0.duoyqgt.mongodb.net/"
        );
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
};

export default connectToDB;