const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/ErrorResponse');
const User = require('../models/User');

// @desc      Register user
// @route     GET /api/v1/auth/register
// @access    Public
exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;

  // Create user
  const user = await User.create({
    name: name,
    email: email,
    password: password,
    role: role,
  });

  const token = user.getSignedJwtToken();

  res.status(200).json({
    success: true,
    token,
  });
});
