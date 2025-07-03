// import { Server } from "socket.io";
// import type { NextApiRequest, NextApiResponse } from "next";
// import dbConnect from "@/lib/dbConnect";
// import Message from "@/models/Message";

// // Connect to MongoDB
// console.log("Socket API route loaded");

// await dbConnect();

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse & { socket: any }
// ) {
//   if (!res.socket.server.io) {
//     console.log("Starting WebSocket server...");
    
//     // Create HTTP server instance
//     const httpServer = res.socket.server;
    
//     // Initialize Socket.IO server
//     const io = new Server(httpServer, {
//       path: "/api/socket",
//       addTrailingSlash: false,
//     });

//     res.socket.server.io = io;

//     io.on("connection", (socket) => {
//       console.log(` Client connected: ${socket.id}`);

//       socket.on("sendMessage", async (msg) => {
//         try {
//           console.log("Received message:", msg);
          
//           // Save to database
//           const newMessage = await Message.create({
//             name: msg.name,
//             message: msg.message
//           });
          
//           console.log("Saved to DB:", newMessage);
          
//           // Broadcast to all clients
//           io.emit("newMessage", newMessage);
//         } catch (error) {
//           console.error("Error saving message:", error);
//         }
//       });

//       socket.on("disconnect", () => {
//         console.log(`Client disconnected: ${socket.id}`);
//       });
//     });
//   } else {
//     console.log("WebSocket server already running");
//   }
  
//   // End the response
//   res.end();
// }
