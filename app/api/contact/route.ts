import { type NextRequest, NextResponse } from "next/server"
import connectDB from "@/lib/mongoose"
import Contact from "@/lib/models/Contact"
import type { ApiResponse } from "@/lib/types"
import mongoose from "mongoose"

export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    await connectDB()

    const body = await request.json()
    const { name, email, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: "All fields are required" }, { status: 400 })
    }

    // Create new contact document
    const contact = new Contact({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      ipAddress: request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown",
      userAgent: request.headers.get("user-agent") || "unknown",
    })

    // Save to database (Mongoose will handle validation)
    await contact.save()

    return NextResponse.json({
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    })
  } catch (error) {
    console.error("Contact form submission error:", error)

    // Handle Mongoose validation errors
    if (error instanceof mongoose.Error.ValidationError) {
      const firstError = Object.values(error.errors)[0]
      return NextResponse.json({ success: false, message: firstError.message }, { status: 400 })
    }

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
        error: process.env.NODE_ENV === "development" ? String(error) : undefined,
      },
      { status: 500 },
    )
  }
}
