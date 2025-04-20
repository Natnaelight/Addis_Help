import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Filter, Search } from "lucide-react"

export default function BookingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Bookings</h1>
        <Button variant="outline" size="sm" className="h-8 gap-1">
          <Download className="h-4 w-4" />
          Export
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Manage Bookings</CardTitle>
          <CardDescription>View and manage all service bookings in the system.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search bookings..." className="pl-8" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Service Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Services</SelectItem>
                  <SelectItem value="plumbing">Plumbing</SelectItem>
                  <SelectItem value="tutoring">Tutoring</SelectItem>
                  <SelectItem value="delivery">Delivery</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="cleaning">Cleaning</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon" className="h-10 w-10">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="rounded-md border">
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead>
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <th className="h-12 px-4 text-left align-middle font-medium">ID</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Customer</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Provider</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Service</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Date</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Amount</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle">#1234</td>
                    <td className="p-4 align-middle">Meron Abebe</td>
                    <td className="p-4 align-middle">Dawit Haile</td>
                    <td className="p-4 align-middle">Plumbing</td>
                    <td className="p-4 align-middle">Apr 21, 2025</td>
                    <td className="p-4 align-middle">ETB 850</td>
                    <td className="p-4 align-middle">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-green-500/10 text-green-500 hover:bg-green-500/20">
                        Completed
                      </span>
                    </td>
                    <td className="p-4 align-middle">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle">#1233</td>
                    <td className="p-4 align-middle">Yonas Kebede</td>
                    <td className="p-4 align-middle">Sara Mekonnen</td>
                    <td className="p-4 align-middle">Tutoring</td>
                    <td className="p-4 align-middle">Apr 20, 2025</td>
                    <td className="p-4 align-middle">ETB 1200</td>
                    <td className="p-4 align-middle">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-500/10 text-blue-500 hover:bg-blue-500/20">
                        In Progress
                      </span>
                    </td>
                    <td className="p-4 align-middle">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle">#1232</td>
                    <td className="p-4 align-middle">Tigist Alemu</td>
                    <td className="p-4 align-middle">Kidus Tadesse</td>
                    <td className="p-4 align-middle">Delivery</td>
                    <td className="p-4 align-middle">Apr 20, 2025</td>
                    <td className="p-4 align-middle">ETB 300</td>
                    <td className="p-4 align-middle">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20">
                        Pending
                      </span>
                    </td>
                    <td className="p-4 align-middle">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle">#1231</td>
                    <td className="p-4 align-middle">Abebe Bekele</td>
                    <td className="p-4 align-middle">Henok Girma</td>
                    <td className="p-4 align-middle">Electronics</td>
                    <td className="p-4 align-middle">Apr 19, 2025</td>
                    <td className="p-4 align-middle">ETB 1500</td>
                    <td className="p-4 align-middle">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-green-500/10 text-green-500 hover:bg-green-500/20">
                        Completed
                      </span>
                    </td>
                    <td className="p-4 align-middle">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle">#1230</td>
                    <td className="p-4 align-middle">Selam Hailu</td>
                    <td className="p-4 align-middle">Tigist Bekele</td>
                    <td className="p-4 align-middle">Cleaning</td>
                    <td className="p-4 align-middle">Apr 18, 2025</td>
                    <td className="p-4 align-middle">ETB 1200</td>
                    <td className="p-4 align-middle">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-green-500/10 text-green-500 hover:bg-green-500/20">
                        Completed
                      </span>
                    </td>
                    <td className="p-4 align-middle">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle">#1229</td>
                    <td className="p-4 align-middle">Bereket Tadesse</td>
                    <td className="p-4 align-middle">Abebe Kebede</td>
                    <td className="p-4 align-middle">Plumbing</td>
                    <td className="p-4 align-middle">Apr 17, 2025</td>
                    <td className="p-4 align-middle">ETB 750</td>
                    <td className="p-4 align-middle">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-red-500/10 text-red-500 hover:bg-red-500/20">
                        Cancelled
                      </span>
                    </td>
                    <td className="p-4 align-middle">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-muted-foreground">
              Showing <strong>1</strong> to <strong>6</strong> of <strong>42</strong> results
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
