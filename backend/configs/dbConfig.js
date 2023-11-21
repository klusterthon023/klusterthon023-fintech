const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
	try {
		mongoose.connect(process.env.MONGO_URI);
		mongoose.connection.on("connected", () => {
			console.log("Database is connected!");
		});
		mongoose.connection.on("error", (error) => {
			console.log("Database is not connected!");
			return error;
		});
	} catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;
