import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

// Extend globalThis with a custom interface
interface MongooseGlobal {
  mongoose: {
    conn: typeof mongoose | null
    promise: Promise<typeof mongoose> | null
  }
}
/* eslint-disable no-var */
declare global {
  var mongoose: MongooseGlobal["mongoose"]
}

// Initialize if not already present
if (!global.mongoose) {
  global.mongoose = { conn: null, promise: null }
}

async function connectDB() {
  if (global.mongoose.conn) {
    return global.mongoose.conn
  }

  if (!global.mongoose.promise) {
    const opts = {
      bufferCommands: false,
    }

    global.mongoose.promise = mongoose.connect(MONGODB_URI!, opts).then((mongoose) => mongoose)
  }

  try {
    global.mongoose.conn = await global.mongoose.promise
  } catch (e) {
    global.mongoose.promise = null
    throw e
  }

  return global.mongoose.conn
}

export default connectDB
