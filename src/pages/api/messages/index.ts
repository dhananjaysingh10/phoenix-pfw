import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/dbConnect";
import Message, { IMessage } from "@/models/Message";

type Data =
  | { success: true; data: IMessage[] }
  | { success: true; data: IMessage }
  | { success: false; message?: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await dbConnect();

  if (req.method === "GET") {
    try {
      const messages = await Message.find().sort({ createdAt: -1 }).limit(50);
      res.status(200).json({ success: true, data: messages });
    } catch  {
      res.status(400).json({ success: false, message: "Failed to fetch messages" });
    }
  } else if (req.method === "POST") {
    try {
      const { name, message } = req.body;
      const newMessage = await Message.create({ name, message });
      res.status(201).json({ success: true, data: newMessage });
    } catch {
      res.status(400).json({ success: false, message: "Failed to send message" });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
