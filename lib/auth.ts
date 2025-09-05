import type { NextRequest } from "next/server"
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.NEXTAUTH_SECRET!

export interface AdminUser {
  username: string
  mobile: string
  isAdmin: true
}

export function verifyAdminCredentials(username: string, password: string, mobile: string): boolean {
  const adminUsername = process.env.ADMIN_USERNAME
  const adminPassword = process.env.ADMIN_PASSWORD
  const adminMobile = process.env.ADMIN_MOBILE

  return username === adminUsername && password === adminPassword && mobile === adminMobile
}

export function generateAdminToken(user: AdminUser): string {
  return jwt.sign(user, JWT_SECRET, { expiresIn: "24h" })
}

export function verifyAdminToken(token: string): AdminUser | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as AdminUser
    return decoded
  } catch {
    return null
  }
}

export function getAdminFromRequest(request: NextRequest): AdminUser | null {
  const token = request.cookies.get("admin-token")?.value
  if (!token) return null

  return verifyAdminToken(token)
}
