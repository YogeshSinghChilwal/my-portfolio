import { type NextRequest, NextResponse } from "next/server"
import connectDB from "@/lib/mongoose"
import Contact from "@/lib/models/Contact"
import { getAdminFromRequest } from "@/lib/auth"

export async function GET(request: NextRequest) {
  try {
    // Verify admin authentication
    const admin = getAdminFromRequest(request)
    if (!admin) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 })
    }

    await connectDB()

    // Get query parameters
    const { searchParams } = new URL(request.url)
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const status = searchParams.get("status")
    const search = searchParams.get("search")

    // Build query
   
    const query: any = {}  // eslint-disable-line @typescript-eslint/no-explicit-any
    if (status && status !== "all") {
      query.status = status
    }
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { message: { $regex: search, $options: "i" } },
      ]
    }

    // Get total count for pagination
    const total = await Contact.countDocuments(query)

    // Get contacts with pagination
    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean()

    // Get status counts
    const statusCounts = await Contact.aggregate([
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 },
        },
      },
    ])

    const stats = {
      total,
      new: statusCounts.find((s) => s._id === "new")?.count || 0,
      read: statusCounts.find((s) => s._id === "read")?.count || 0,
      replied: statusCounts.find((s) => s._id === "replied")?.count || 0,
    }

    return NextResponse.json({
      success: true,
      data: {
        contacts,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit),
        },
        stats,
      },
    })
  } catch (error) {
    console.error("Error fetching contacts:", error)
    return NextResponse.json({ success: false, message: "Failed to fetch contacts" }, { status: 500 })
  }
}
