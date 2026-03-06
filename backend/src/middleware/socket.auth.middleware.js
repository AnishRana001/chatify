import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import dotenv from "dotenv";

dotenv.config();

export const socketAuthMiddleware = async (socket, next) => {
  try {

    const cookies = socket.handshake.headers.cookie;
    if (!cookies) {
      return next(new Error("Authentication error: No cookies found"));
    }

    const token = cookies
      .split("; ")
      .find((row) => row.startsWith("jwt="))
      ?.split("=")[1];

    if (!token) {
      return next(new Error("Authentication error: No token"));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return next(new Error("Authentication error: User not found"));
    }

    socket.user = user;
    socket.userId = user._id.toString();

    console.log(`Socket authenticated for user: ${user.username}`);

    next();

  } catch (error) {
    console.error("Authentication error:", error);
    next(new Error("Authentication error"));
  }
};