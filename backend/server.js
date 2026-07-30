const bcrypt = require("bcrypt");
const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');
dns.setServers(['8.8.8.8', '1.1.1.1']); // force Google/Cloudflare DNS for Node's resolver

require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const User = require("./models/User");

const app = express();

// Connect MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// ================= SIGNUP =================
app.post("/signup", async (req, res) => {

    try {

        const { name, email, password } = req.body;

        console.log("\n========== SIGNUP REQUEST ==========");
        console.log("Name     :", name);
        console.log("Email    :", email);
        console.log("Password :", password);
        console.log("====================================");

        // Check empty fields
        if (!name || !email || !password) {

            console.log("❌ Signup Failed : Missing Fields");

            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });

        }

        // Check if email already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {

            console.log("❌ Email Already Exists :", email);

            return res.status(400).json({
                success: false,
                message: "Email already exists"
            });

        }

        console.log("Creating user...");

        // Create user
      const hashedPassword = await bcrypt.hash(password, 10);

const newUser = new User({
    name,
    email,
    password: hashedPassword
});


        console.log("Saving user into MongoDB...");

        // Save to MongoDB
        const savedUser = await newUser.save();

        console.log("✅ User Saved Successfully");
        console.log(savedUser);

        res.status(201).json({
            success: true,
            message: "Signup Successful",
            user: savedUser
        });

    } catch (error) {

        console.log("❌ Signup Error");
        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

});




// ================= LOGIN =================
app.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        console.log("\n========== LOGIN REQUEST ==========");
        console.log("Email    :", email);
        console.log("Password :", password);
        console.log("===================================");

        if (!email || !password) {

            return res.status(400).json({
                success: false,
                message: "Email and Password are required"
            });

        }

        // Find user by email
        const user = await User.findOne({ email });

        if (!user) {

            return res.status(404).json({
                success: false,
                message: "User not found"
            });

        }

        // Compare password
        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {

            return res.status(401).json({
                success: false,
                message: "Invalid Password"
            });

        }

        res.status(200).json({
            success: true,
            message: "Login Successful",
            user: user
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });

    }

});

app.listen(3000, () => {
    console.log("🚀 Server Running on Port 3000");
});