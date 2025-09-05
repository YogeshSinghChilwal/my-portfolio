import mongoose, { type Document, Schema } from "mongoose"

export interface IContact extends Document {
  name: string
  email: string
  message: string
  status: "new" | "read" | "replied"
  ipAddress?: string
  userAgent?: string
  createdAt: Date
  updatedAt: Date
}

const ContactSchema = new Schema<IContact>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      minlength: [10, "Message must be at least 10 characters long"],
      maxlength: [1000, "Message cannot exceed 1000 characters"],
    },
    status: {
      type: String,
      enum: ["new", "read", "replied"],
      default: "new",
    },
    ipAddress: {
      type: String,
      default: "unknown",
    },
    userAgent: {
      type: String,
      default: "unknown",
    },
  },
  {
    timestamps: true,
  },
)

// Create indexes for better performance
ContactSchema.index({ createdAt: -1 })
ContactSchema.index({ status: 1 })
ContactSchema.index({ email: 1 })

export default mongoose.models.Contact || mongoose.model<IContact>("Contact", ContactSchema)
