import { type NextRequest, NextResponse } from "next/server"
import { verifyAdminCredentials, generateAdminToken } from "@/lib/auth"

export async function POST(request: NextRequest) {
  try {
    const { username, password, mobile } = await request.json()

    if (!username || !password || !mobile) {
      return NextResponse.json({ success: false, message: "All fields are required" }, { status: 400 })
    }

    // Verify admin credentials
    if (!verifyAdminCredentials(username, password, mobile)) {
      return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 })
    }

    // Generate JWT token
    const token = generateAdminToken({
      username,
      mobile,
      isAdmin: true,
    })

    // Create response with token in cookie
    const response = NextResponse.json({
      success: true,
      message: "Login successful",
    })

    // Set HTTP-only cookie
    response.cookies.set("admin-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60, // 24 hours
      path: "/",
    })

    return response
  } catch (error) {
    console.error("Admin login error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}
