const express = require("express");
const cors = require("cors");

const connectDB = require("./configs/dbConfig");
const ownerRoutes = require("./routes/ownerRoutes");
const customerRoutes = require("./routes/customerRoutes");
const invoiceRoutes = require("./routes/invoiceRoutes");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
	res.json({ message: "welcome to klusterthon023 Fintech Backend App" });
});
app.use("/v1/auth", ownerRoutes);
app.use("/v1/customers", customerRoutes);
// app.use("/v1/invoices", invoiceRoutes);
app.use("*", (req, res) => {
   res.status(404).json({ 
      message: "Invalid route",
      data: null
   });
})

connectDB();

const POST = process.env.PORT || 5000;
app.listen(POST, () => {
	console.log(`Server is running on port ${POST}.`);
});
