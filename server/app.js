import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { isMongoConfigured } from "./config/database.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();
const allowedOrigins = process.env.CLIENT_ORIGIN?.split(",").map((origin) => origin.trim()).filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins?.length ? allowedOrigins : true
  })
);
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_request, response) => {
  response.json({
    status: "ok",
    service: "shivakumara-portfolio-api",
    mongoConfigured: isMongoConfigured()
  });
});

app.use("/api/contact", contactRoutes);

app.use((error, _request, response, _next) => {
  response.status(500).json({
    message: "Server error. Please try again later.",
    details: process.env.NODE_ENV === "production" ? undefined : error.message
  });
});

export default app;
