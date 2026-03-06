import {Server} from "socket.io"
import http from "http"
import express from "express"
import dotenv from "dotenv";
import { socketAuthMiddleware } from "../middleware/socket.auth.middleware.js";

dotenv.config();
const app=express();
const server=http.createServer(app);

const io=new Server(server,{
    cors:{
        origin: process.env.CLIENT_URL,
        credentials: true
    }
})
// apply the authentication middleware to all incoming socket connections
io.use(socketAuthMiddleware);

// we will use this func to check if the user is online or not
export const getReceiverSocketId=(userId)=>{
    return userSocketMap[userId];
}

// this is for storing online users
const userSocketMap={}
io.on("connection",(socket)=>{
     console.log("Socket connected:",socket.id);
    console.log("A user connected: " + socket.user.username);
    const userId=socket.userId;
    userSocketMap[userId]=socket.id;

    // io.emit() is the list of online users to all clients
    io.emit("getOnlineUsers",Object.keys(userSocketMap));
    socket.on("disconnect",()=>{
        console.log("A user disconnected: " + socket.user.username);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers",Object.keys(userSocketMap));
    });
})
export {server, io, app}