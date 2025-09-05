"use client"

import { useState, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import {
  Search,
  Filter,
  Mail,
  Clock,
  CheckCircle,
  MessageCircle,
  Trash2,
  LogOut,
  RefreshCw,
  Eye,
  User,
  Calendar,
  Globe,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface Contact {
  _id: string
  name: string
  email: string
  message: string
  status: "new" | "read" | "replied"
  createdAt: string
  updatedAt: string
  ipAddress?: string
  userAgent?: string
}

interface ContactsData {
  contacts: Contact[]
  pagination: {
    page: number
    limit: number
    total: number
    pages: number
  }
  stats: {
    total: number
    new: number
    read: number
    replied: number
  }
}

export default function AdminDashboard() {
  const [contactsData, setContactsData] = useState<ContactsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
  const [filters, setFilters] = useState({
    status: "all",
    search: "",
    page: 1,
  })
  const router = useRouter()

  const fetchContacts = useCallback(async () => {
    try {
      const params = new URLSearchParams({
        page: filters.page.toString(),
        limit: "10",
        ...(filters.status !== "all" && { status: filters.status }),
        ...(filters.search && { search: filters.search }),
      })

      const response = await fetch(`/api/admin/contacts?${params}`)

      if (response.status === 401) {
        router.push("/admin")
        return
      }

      if (response.ok) {
        const result = await response.json()
        setContactsData(result.data)
      }
    } catch (error) {
      console.error("Error fetching contacts:", error)
    } finally {
      setLoading(false)
    }
  }, [filters, router])

  useEffect(() => {
    fetchContacts()
  }, [filters, fetchContacts])

  const handleStatusUpdate = async (contactId: string, newStatus: string) => {
    try {
      const response = await fetch(`/api/admin/contacts/${contactId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      })
      if (response.ok) {
        fetchContacts()
        if (selectedContact && selectedContact._id === contactId) {
          setSelectedContact({ ...selectedContact, status: newStatus as any }) // eslint-disable-line @typescript-eslint/no-explicit-any
        }
      }
    } catch (error) {
      console.error("Error updating contact:", error)
    }
  }

  const handleDelete = async (contactId: string) => {
    if (!confirm("Are you sure you want to delete this contact?")) return

    try {
      const response = await fetch(`/api/admin/contacts/${contactId}`, {
        method: "DELETE",
      })

      if (response.ok) {
        fetchContacts()
        setSelectedContact(null)
      }
    } catch (error) {
      console.error("Error deleting contact:", error)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" })
      router.push("/admin")
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-500 hover:bg-blue-600 text-white"
      case "read":
        return "bg-amber-500 hover:bg-amber-600 text-white"
      case "replied":
        return "bg-green-500 hover:bg-green-600 text-white"
      default:
        return "bg-gray-500 hover:bg-gray-600 text-white"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "new":
        return <Mail className="w-3 h-3" />
      case "read":
        return <Eye className="w-3 h-3" />
      case "replied":
        return <CheckCircle className="w-3 h-3" />
      default:
        return <Clock className="w-3 h-3" />
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 text-blue-400 animate-spin mx-auto mb-4" />
          <p className="text-gray-300 text-lg">Loading admin dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Header */}
      <div className="border-b border-gray-700 bg-[#1a1a1a] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
              <p className="text-gray-300 mt-1">Manage contact form submissions</p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-3">
              <Button
                onClick={fetchContacts}
                variant="outline"
                size="sm"
                className="border-gray-600 text-gray-200 hover:bg-gray-700 hover:text-white bg-transparent hover:border-gray-500"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
              <Button
                onClick={handleLogout}
                variant="outline"
                size="sm"
                className="border-red-600 text-red-400 hover:bg-red-900/30 hover:text-red-300 bg-transparent hover:border-red-500"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        {contactsData && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-[#1a1a1a] border-gray-700 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-300 text-sm font-medium">Total Messages</p>
                    <p className="text-3xl font-bold text-white mt-1">{contactsData.stats.total}</p>
                  </div>
                  <div className="bg-blue-500/20 p-3 rounded-full">
                    <MessageCircle className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1a1a1a] border-gray-700 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-300 text-sm font-medium">New Messages</p>
                    <p className="text-3xl font-bold text-blue-400 mt-1">{contactsData.stats.new}</p>
                  </div>
                  <div className="bg-blue-500/20 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1a1a1a] border-gray-700 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-300 text-sm font-medium">Read Messages</p>
                    <p className="text-3xl font-bold text-amber-400 mt-1">{contactsData.stats.read}</p>
                  </div>
                  <div className="bg-amber-500/20 p-3 rounded-full">
                    <Eye className="w-6 h-6 text-amber-400" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1a1a1a] border-gray-700 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-300 text-sm font-medium">Replied</p>
                    <p className="text-3xl font-bold text-green-400 mt-1">{contactsData.stats.replied}</p>
                  </div>
                  <div className="bg-green-500/20 p-3 rounded-full">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Filters */}
        <Card className="bg-[#1a1a1a] border-gray-700 shadow-lg mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search by name, email, or message..."
                    value={filters.search}
                    onChange={(e) => setFilters((prev) => ({ ...prev, search: e.target.value, page: 1 }))}
                    className="pl-10 bg-[#0f0f0f] border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
              <Select
                value={filters.status}
                onValueChange={(value) => setFilters((prev) => ({ ...prev, status: value, page: 1 }))}
              >
                <SelectTrigger className="w-full sm:w-48 bg-[#0f0f0f] border-gray-600 text-white focus:border-blue-500">
                  <Filter className="w-4 h-4 mr-2 text-gray-400" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#1a1a1a] border-gray-600">
                  <SelectItem value="all" className="text-white hover:bg-gray-700">
                    All Status
                  </SelectItem>
                  <SelectItem value="new" className="text-white hover:bg-gray-700">
                    New
                  </SelectItem>
                  <SelectItem value="read" className="text-white hover:bg-gray-700">
                    Read
                  </SelectItem>
                  <SelectItem value="replied" className="text-white hover:bg-gray-700">
                    Replied
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Contacts List */}
        <Card className="bg-[#1a1a1a] border-gray-700 shadow-lg">
          <CardHeader className="border-b border-gray-700">
            <CardTitle className="text-xl text-white">Contact Messages</CardTitle>
            <CardDescription className="text-gray-300">
              {contactsData && `Showing ${contactsData.contacts.length} of ${contactsData.pagination.total} messages`}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            {contactsData?.contacts.length === 0 ? (
              <div className="text-center py-16">
                <MessageCircle className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">No messages found</p>
                <p className="text-gray-500 text-sm mt-2">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-700">
                {contactsData?.contacts.map((contact) => (
                  <div
                    key={contact._id}
                    className="p-6 hover:bg-[#0f0f0f] cursor-pointer transition-all duration-200 border-l-4 border-transparent hover:border-blue-500"
                    onClick={() => setSelectedContact(contact)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="font-semibold text-white text-lg truncate">{contact.name}</h3>
                          <Badge className={`${getStatusColor(contact.status)} text-xs font-medium px-2 py-1`}>
                            {getStatusIcon(contact.status)}
                            <span className="ml-1 capitalize">{contact.status}</span>
                          </Badge>
                        </div>
                        <p className="text-blue-400 text-sm mb-3 font-medium">{contact.email}</p>
                        <p className="text-gray-200 text-sm leading-relaxed line-clamp-2 mb-4">{contact.message}</p>
                        <div className="flex items-center gap-6 text-xs text-gray-400">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3 h-3" />
                            {new Date(contact.createdAt).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3 h-3" />
                            {new Date(contact.createdAt).toLocaleTimeString("en-US", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-700">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Pagination */}
        {contactsData && contactsData.pagination.pages > 1 && (
          <div className="flex justify-center items-center mt-8">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setFilters((prev) => ({ ...prev, page: prev.page - 1 }))}
                disabled={contactsData.pagination.page === 1}
                className="border-gray-600 text-gray-200 hover:bg-gray-700 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </Button>

              <div className="flex items-center gap-2 mx-4">
                {Array.from({ length: Math.min(5, contactsData.pagination.pages) }, (_, i) => {
                  const pageNum = i + 1
                  const isActive = pageNum === contactsData.pagination.page
                  return (
                    <Button
                      key={pageNum}
                      variant={isActive ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFilters((prev) => ({ ...prev, page: pageNum }))}
                      className={
                        isActive
                          ? "bg-blue-600 hover:bg-blue-700 text-white"
                          : "border-gray-600 text-gray-200 hover:bg-gray-700 hover:text-white"
                      }
                    >
                      {pageNum}
                    </Button>
                  )
                })}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setFilters((prev) => ({ ...prev, page: prev.page + 1 }))}
                disabled={contactsData.pagination.page === contactsData.pagination.pages}
                className="border-gray-600 text-gray-200 hover:bg-gray-700 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Contact Detail Modal */}
      <Dialog open={!!selectedContact} onOpenChange={() => setSelectedContact(null)}>
        <DialogContent className="bg-[#1a1a1a] border-gray-600 text-white max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader className="border-b border-gray-700 pb-4">
            <DialogTitle className="flex items-center gap-3 text-xl">
              <div className="bg-blue-500/20 p-2 rounded-full">
                <User className="w-5 h-5 text-blue-400" />
              </div>
              {selectedContact?.name}
              <Badge className={`${getStatusColor(selectedContact?.status || "")} text-xs font-medium px-2 py-1`}>
                {selectedContact && getStatusIcon(selectedContact.status)}
                <span className="ml-1 capitalize">{selectedContact?.status}</span>
              </Badge>
            </DialogTitle>
            <DialogDescription className="text-blue-400 font-medium text-base">
              {selectedContact?.email}
            </DialogDescription>
          </DialogHeader>

          {selectedContact && (
            <div className="space-y-6 pt-4">
              {/* Message */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-200 flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Message
                </h4>
                <div className="bg-[#0f0f0f] border border-gray-700 rounded-lg p-4">
                  <p className="text-gray-100 whitespace-pre-wrap leading-relaxed">{selectedContact.message}</p>
                </div>
              </div>

              {/* Metadata */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="bg-[#0f0f0f] border border-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-gray-200 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Received
                  </h4>
                  <p className="text-gray-100">{new Date(selectedContact.createdAt).toLocaleString()}</p>
                </div>
                <div className="bg-[#0f0f0f] border border-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-gray-200 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Last Updated
                  </h4>
                  <p className="text-gray-100">{new Date(selectedContact.updatedAt).toLocaleString()}</p>
                </div>
                {selectedContact.ipAddress && (
                  <div className="bg-[#0f0f0f] border border-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-gray-200 flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      IP Address
                    </h4>
                    <p className="text-gray-100 font-mono">{selectedContact.ipAddress}</p>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3 pt-6 border-t border-gray-700">
                <Select
                  value={selectedContact.status}
                  onValueChange={(value) => handleStatusUpdate(selectedContact._id, value)}
                >
                  <SelectTrigger className="w-48 bg-[#0f0f0f] border-gray-600 text-white focus:border-blue-500">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a1a1a] border-gray-600">
                    <SelectItem value="new" className="text-white hover:bg-gray-700">
                      Mark as New
                    </SelectItem>
                    <SelectItem value="read" className="text-white hover:bg-gray-700">
                      Mark as Read
                    </SelectItem>
                    <SelectItem value="replied" className="text-white hover:bg-gray-700">
                      Mark as Replied
                    </SelectItem>
                  </SelectContent>
                </Select>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(`mailto:${selectedContact.email}`)}
                  className="border-green-600 text-green-400 hover:bg-green-900/30 hover:text-green-300 bg-transparent hover:border-green-500"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Reply via Email
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDelete(selectedContact._id)}
                  className="border-red-600 text-red-400 hover:bg-red-900/30 hover:text-red-300 bg-transparent hover:border-red-500"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete Message
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
