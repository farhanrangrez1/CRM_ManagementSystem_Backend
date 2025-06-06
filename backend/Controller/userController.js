const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../Model/userModel');
const cloudinary = require('../Config/cloudinary');
const nodemailer = require('nodemailer');
const {encodeToken} = require ("../middlewares/decodeToken")
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
            phone, role, state, country, permissions, accessLevel,assign
        } = req.body;

        const requiredFields = { firstName, lastName, email, password, passwordConfirm, phone, role, state, country,assign };
        for (const [key, value] of Object.entries(requiredFields)) {
            if (!value || value.toString().trim() === '') {
                return res.status(400).json({ status: 'fail', message: `${key} is required` });
            }
        }

        if (password !== passwordConfirm) {
            return res.status(400).json({ status: 'fail', message: 'Passwords do not match' });
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
        res.status(400).json({ status: 'fail', message: err.message });
    }
};

// Login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ status: 'fail', message: 'Email and password are required' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ status: 'fail', message: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ status: 'fail', message: 'Invalid email or password' });
        }

        const token = genretToken(user._id);
        const decodeTokens=encodeToken(token)
        console.log("decodeToken",decodeTokens  )
        user.password = undefined;

        res.status(200).json({
            status: 'success',
            message: 'Login successful',
            token,
            user
        });

    } catch (err) {
        res.status(500).json({ status: 'error', message: err.message });
    }
};

// Forgot password
const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ status: "false", message: "User not found." });
        }

        if (user.googleSignIn === true) {
            return res.status(400).json({
                status: "false",
                message: "Password reset is not allowed for Google Sign-In users. Please log in using Google."
            });
        }

        const resetToken = crypto.randomBytes(32).toString("hex");
        user.resetToken = resetToken;
        user.resetTokenExpiry = Date.now() + 15 * 60 * 1000;
        await user.save();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: 'packageitappofficially@gmail.com',
                pass: 'epvuqqesdioohjvi',
            },
            tls: {
                rejectUnauthorized: false,
            }
        });

        await transporter.sendMail({
            from: 'packageitappofficially@gmail.com',
            to: email,
            subject: "Your Password Reset Token",
            html: `<p>Your password reset token: <strong>${resetToken}</strong></p>
                   <p>This token is valid for <strong>15 minutes</strong>.</p>
                   <p>If you did not request this, please ignore this email.</p>`,
        });

        res.status(200).json({ status: "true", message: "Password reset email sent successfully." });

    } catch (error) {
        console.error("Forgot Password Error:", error);
        res.status(500).json({ status: "false", message: "Server error" });
    }
};

// Reset password
const resetPassword = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ status: false, message: "Email and password are required." });
    }l
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ status: false, message: "User not found." });
    }

    if (user.googleSignIn === true) {
      return res.status(400).json({ status: false, message: "Google sign-in user cannot reset password." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ status: true, message: "Password reset successfully." });
  } catch (error) {
    console.error("Reset Password Error:", error);
    res.status(500).json({ status: false, message: "Server error." });
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
        res.status(400).json({ status: 'fail', message: err.message });
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
  

    module.exports = {createUser ,loginUser,forgotPassword,resetPassword,getAllUsers,deleteUser,UpdateUser}