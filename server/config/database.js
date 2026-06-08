import mongoose from "mongoose";

let connectionPromise;

export function isMongoConfigured() {
  return Boolean(process.env.MONGODB_URI);
}

export async function connectDatabase() {
  if (!isMongoConfigured()) return null;

  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  if (!connectionPromise) {
    connectionPromise = mongoose.connect(process.env.MONGODB_URI, {
      dbName: process.env.MONGODB_DB || undefined
    });
  }

  await connectionPromise;
  return mongoose.connection;
}
