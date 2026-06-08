import { Router } from "express";
import { connectDatabase, isMongoConfigured } from "../config/database.js";
import ContactMessage from "../models/ContactMessage.js";

const router = Router();

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

router.post("/", async (request, response, next) => {
  try {
    const name = String(request.body.name || "").trim();
    const email = String(request.body.email || "").trim();
    const subject = String(request.body.subject || "").trim();
    const message = String(request.body.message || "").trim();

    if (!name || !email || !subject || !message) {
      response.status(400).json({ message: "Please complete all contact form fields." });
      return;
    }

    if (!isEmail(email)) {
      response.status(400).json({ message: "Please enter a valid email address." });
      return;
    }

    if (!isMongoConfigured()) {
      response.status(202).json({
        message: "Message received by the API. Add MONGODB_URI to store it in MongoDB.",
        saved: false
      });
      return;
    }

    await connectDatabase();
    await ContactMessage.create({ name, email, subject, message });

    response.status(201).json({
      message: "Message saved successfully. Shivakumara can review it from MongoDB.",
      saved: true
    });
  } catch (error) {
    next(error);
  }
});

export default router;
