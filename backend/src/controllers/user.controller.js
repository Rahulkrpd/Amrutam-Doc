import { UserModel } from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_dev_secret";
const JWT_EXPIRES = process.env.JWT_EXPIRES || "7d";

const setAuthTokenCookie = (res, token) => {
    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
};

// REGISTER
const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if ([username, email, password].some((field) => field?.trim() === "")) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "Email is already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await UserModel.create({
            username,
            email,
            password: hashedPassword,
        });

        const token = jwt.sign({ id: newUser._id }, JWT_SECRET, {
            expiresIn: JWT_EXPIRES,
        });

        setAuthTokenCookie(res, token);

        return res.status(201).json({
            message: "User registered successfully",
            user: {
                id: newUser._id,
                username: newUser.username,
                email: newUser.email,
            },
        });
    } catch (error) {
        console.error("Error in register/login:", error);
        return res.status(500).json({ message: "Server Error" });
    }
};

// LOGIN
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if ([email, password].some((field) => field?.trim() === "")) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id }, JWT_SECRET, {
            expiresIn: JWT_EXPIRES,
        });

        setAuthTokenCookie(res, token);

        return res.status(200).json({
            message: "Login successful",
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
            },
        });
    } catch (error) {
        return res.status(500).json({ message: "Server Error" });
    }
};

// LOGOUT
const logoutUser = async (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        sameSite: "Strict",
        secure: process.env.NODE_ENV === "production",
    });

    return res.status(200).json({ message: "Logout successful" });
};

export { registerUser, loginUser, logoutUser };
