const Owner = require("../models/Owner");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
	try {
		const newOwner = await Owner.create({
			...req.body,
			password: await bcrypt.hash(req.body.password, 10)
		});

		return res.status(201).json({
			message: "Owner created successfully",
			data: newOwner
		});
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			data: null
		});
	}
};

exports.signin = async (req, res) => {
	try {
		const foundOwner = await Owner.findOne({ email: req.body.email });
		if (!foundOwner) {
			return res.status(404).json({
				message: "Owner not found!",
				data: null
			});
		}

		const isMatch = await bcrypt.compare(req.body.password, foundOwner.password);
		if (!isMatch) {
			return res.status(401).json({
				message: "Incorrect Password!",
				data: null
			});
		}

		return res.status(201).json({
			message: "Owner signed in successfully",
			data: foundOwner
		});
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			data: null
		});
	}
};

exports.signout = async (req, res) => {
	try {
		return res.json({
			message: "Logged out successfully",
			data: null
		});
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			data: null
		});
	}
};


//temporary function to get all owners
exports.getAllOwners = async (req, res) => {
   try {
      const owners = await Owner.find();
      return res.status(200).json({
         message: "All owners",
         data: owners
      });
   } catch (error) {
      return res.status(500).json({
         message: error.message,
         data: null
      });
   }
}