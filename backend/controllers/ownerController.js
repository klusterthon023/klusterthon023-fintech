const Owner = require('../models/Owner');

//temporary function to get all owners
exports.getAllOwners = async (req, res) => {
  try {
    const owners = await Owner.find();
    return res.status(200).json({
      message: 'All owners',
      data: owners
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      data: null
    });
  }
};
