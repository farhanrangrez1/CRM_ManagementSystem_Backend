const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../Model/userModel');
const cloudinary = require('../Config/cloudinary');
const nodemailer = require('nodemailer');
const { encodeToken } = require("../middlewares/decodeToken")
// Cloudinary config
cloudinary.config({
  cloud_name: 'dkqcqrrbp',
  api_key: '418838712271323',
  api_secret: 'p12EKWICdyHWx8LcihuWYqIruWQ'
});

// JWT Token function
const genretToken = (id) => {
  return jwt.sign({ id }, 'your_jwt_secret_key', { expiresIn: '7d' });
};

// Register user
const createUser = async (req, res) => {
  try {
    const {
      firstName, lastName, email, password, passwordConfirm,
      phone, role, state, country, permissions, accessLevel, assign
    } = req.body;

    const requiredFields = { firstName, lastName, email, password, passwordConfirm, phone, role, state, country, assign };
    for (const [key, value] of Object.entries(requiredFields)) {
      if (!value || value.toString().trim() === '') {
        return res.status(400).json({ status: false, message: `${key} is required` });
      }
    }

    if (password !== passwordConfirm) {
      return res.status(400).json({ status: false, message: 'Passwords do not match' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists with same email" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    let profileImage = '';
    if (req.files && req.files.image) {
      const result = await cloudinary.uploader.upload(req.files.image.tempFilePath, {
        folder: 'user_profiles',
        resource_type: 'image',
      });
      profileImage = result.secure_url;
    }

    const parsedPermissions = typeof permissions === 'string' ? JSON.parse(permissions) : permissions;
    const parsedAccessLevel = typeof accessLevel === 'string' ? JSON.parse(accessLevel) : accessLevel;

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
      role,
      state,
      country,
      assign,
      profileImage,
      permissions: parsedPermissions,
      accessLevel: parsedAccessLevel,
    });

    const token = genretToken(newUser._id);

    res.status(201).json({
      status: 'success',
      data: { user: newUser, token }
    });
  } catch (err) {
    res.status(400).json({ status: false, message: err.message });
  }
};

// Login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ status: false, message: 'Email and password are required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ status: false, message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ status: false, message: 'Invalid email or password' });
    }

    const token = await genretToken(user._id);
    console.log(token)
    const encodeTokens = await encodeToken(token)
    user.password = undefined;

    res.status(200).json({
      status: 'success',
      message: 'Login successful',
      token: encodeTokens,
      user
    });

  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
};

// ✅ Email Function
const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'packageitappofficially@gmail.com',
      pass: 'epvuqqesdioohjvi'
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const mailOptions = {
    from: 'sagarkher1999@gmail.com',
    to: options.email,
    subject: options.subject,
    html: `
      <div style="font-family: Arial, sans-serif; font-size: 15px; color: #333;">
        <h2>Password Reset Request</h2>
        <p>Hi,</p>
        <p>We received a request to reset your password. Please click the button below to reset your password:</p>
        <a href="https://construction-mngmt.netlify.app/resetpassword?token=${options.resetToken}" 
           style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px;">
          Reset Password
        </a>
        <p>If you did not request this, you can safely ignore this email.</p>
        <p>This link will expire in 10 minutes for security reasons.</p>
        <br>
        <p>Regards,<br>PackageIt Team</p>
      </div>
    `
  };

  await transporter.sendMail(mailOptions);
};

// Forgot Password Controller
const forgotPassword = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({ status: 'fail', message: 'User not found with this email' });
    }

    const resetToken = user.createPasswordResetToken();
    await user.save({ validateBeforeSave: false });

    await sendEmail({
      email: user.email,
      subject: 'Reset Your Password',
      resetToken: resetToken
    });

    res.status(200).json({
      status: 'success',
      message: 'Reset token sent to email!',
      resetToken: resetToken
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 'error', message: 'There was an error sending email.' });
  }
};

// Reset Password Controller
const resetPassword = async (req, res) => {
  try {
    const { token, newPassword, confirmPassword } = req.body;

    if (!token || !newPassword || !confirmPassword) {
      return res.status(400).json({ status: 'fail', message: 'All fields are required.' });
    }

    if (newPassword !== confirmPassword) {
      return res.status(400).json({ status: 'fail', message: 'Passwords do not match.' });
    }

    // Hash the token to match with DB
    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

    // Find user with this token and check expiration
    const user = await User.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ status: 'fail', message: 'Token is invalid or has expired.' });
    }

    // Update password
    user.password = await bcrypt.hash(newPassword, 10);
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;

    await user.save();

    res.status(200).json({
      status: 'success',
      message: 'Password reset successfully.'
    });

  } catch (err) {
    console.error('Error resetting password:', err);
    res.status(500).json({ status: 'error', message: 'Internal server error.' });
  }
};

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: 'success',
      results: users.length,
      data: { users }
    });
  } catch (err) {
    res.status(400).json({ status: false, message: err.message });
  }
};


//GET SINGLE DeleteUser
//METHOD:DELETE
const deleteUser = async (req, res) => {
  let deleteUserID = req.params.id
  if (deleteUser) {
    const deleteUser = await User.findByIdAndDelete(deleteUserID, req.body);
    res.status(200).json("Delete Checklists Successfully")
  } else {
    res.status(400).json({ message: "Not Delete User" })
  }
}

//GET SINGLE UserUpdate
//METHOD:PUT
const UpdateUser = async (req, res) => {
  try {
    const allowedFields = [
      'firstName',
      'lastName',
      'email',
      'phone',
      'role',
      'state',
      'country',
      'profileImage',
      'permissions',
      'accessLevel'
    ];
    const updateData = {};
    allowedFields.forEach(field => {
      if (req.body[field] !== undefined) {
        updateData[field] = req.body[field];
      }
    });
    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ message: 'At least one field must be provided for update' });
    }
    const updatedDiary = await User.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );
    if (!updatedDiary) {
      return res.status(404).json({ message: 'Diary not found' });
    }
    res.status(200).json(updatedDiary);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
};

//METHOD:Single
//TYPE:PUBLIC
const SingleUser = async (req, res) => {
  try {
    const SingleUser = await User.findById(req.params.id);
    res.status(200).json(SingleUser)
  } catch (error) {
    res.status(404).json({ msg: "Can t Find Cost Estimate" })
  }
}

module.exports = { createUser, loginUser, forgotPassword, resetPassword, getAllUsers, deleteUser, UpdateUser, SingleUser }