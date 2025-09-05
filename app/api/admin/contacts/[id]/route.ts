import { type NextRequest, NextResponse } from "next/server"
import connectDB from "@/lib/mongoose"
import Contact from "@/lib/models/Contact"
import { getAdminFromRequest } from "@/lib/auth"

export async function PATCH(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    // Verify admin authentication
    const admin = getAdminFromRequest(request)
    if (!admin) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 })
    }

    await connectDB()

    const { status } = await request.json()

    if (!["new", "read", "replied"].includes(status)) {
      return NextResponse.json({ success: false, message: "Invalid status" }, { status: 400 })
    }

    const {id} = await context.params

    const contact = await Contact.findByIdAndUpdate(id, { status }, { new: true })

    if (!contact) {
      return NextResponse.json({ success: false, message: "Contact not found" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      data: contact,
    })
  } catch (error) {
    console.error("Error updating contact:", error)
    return NextResponse.json({ success: false, message: "Failed to update contact" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    // Verify admin authentication
    const admin = getAdminFromRequest(request)
    if (!admin) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 })
    }

    await connectDB()

    const {id} = await context.params

    const contact = await Contact.findByIdAndDelete(id)

    if (!contact) {
      return NextResponse.json({ success: false, message: "Contact not found" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      message: "Contact deleted successfully",
    })
  } catch (error) {
    console.error("Error deleting contact:", error)
    return NextResponse.json({ success: false, message: "Failed to delete contact" }, { status: 500 })
  }
}
