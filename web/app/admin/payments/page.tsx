import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Filter, Search } from "lucide-react"

export default function PaymentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Payments</h1>
        <Button variant="outline" size="sm" className="h-8 gap-1">
          <Download className="h-4 w-4" />
          Export
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">ETB 24,565</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">ETB 3,200</div>
            <p className="text-xs text-muted-foreground">5 transactions</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Platform Fee</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">ETB 2,456</div>
            <p className="text-xs text-muted-foreground">10% of total revenue</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Provider Payouts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">ETB 22,109</div>
            <p className="text-xs text-muted-foreground">90% of total revenue</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Payment Transactions</CardTitle>
          <CardDescription>View and manage all payment transactions in the system.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search transactions..." className="pl-8" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                  <SelectItem value="refunded">Refunded</SelectItem>
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
                    <th className="h-12 px-4 text-left align-middle font-medium">Booking</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Customer</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Provider</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Amount</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Date</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle">#P1234</td>
                    <td className="p-4 align-middle">#1234</td>
                    <td className="p-4 align-middle">Meron Abebe</td>
                    <td className="p-4 align-middle">Dawit Haile</td>
                    <td className="p-4 align-middle">ETB 850</td>
                    <td className="p-4 align-middle">Apr 21, 2025</td>
                    <td className="p-4 align-middle">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-green-500/10 text-green-500 hover:bg-green-500/20">
                        Paid
                      </span>
                    </td>
                    <td className="p-4 align-middle">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle">#P1233</td>
                    <td className="p-4 align-middle">#1233</td>
                    <td className="p-4 align-middle">Yonas Kebede</td>
                    <td className="p-4 align-middle">Sara Mekonnen</td>
                    <td className="p-4 align-middle">ETB 1200</td>
                    <td className="p-4 align-middle">Apr 20, 2025</td>
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
                    <td className="p-4 align-middle">#P1232</td>
                    <td className="p-4 align-middle">#1232</td>
                    <td className="p-4 align-middle">Tigist Alemu</td>
                    <td className="p-4 align-middle">Kidus Tadesse</td>
                    <td className="p-4 align-middle">ETB 300</td>
                    <td className="p-4 align-middle">Apr 20, 2025</td>
                    <td className="p-4 align-middle">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-green-500/10 text-green-500 hover:bg-green-500/20">
                        Paid
                      </span>
                    </td>
                    <td className="p-4 align-middle">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </td>
                  </tr>
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle">#P1231</td>
                    <td className="p-4 align-middle">#1231</td>
                    <td className="p-4 align-middle">Abebe Bekele</td>
                    <td className="p-4 align-middle">Henok Girma</td>
                    <td className="p-4 align-middle">ETB 1500</td>
                    <td className="p-4 align-middle">Apr 19, 2025</td>
                    <td className="p-4 align-middle">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-green-500/10 text-green-500 hover:bg-green-500/20">
                        Paid
                      </span>
                    </td>
                    <td className="p-4 align-middle">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle">#P1230</td>
                    <td className="p-4 align-middle">#1230</td>
                    <td className="p-4 align-middle">Selam Hailu</td>
                    <td className="p-4 align-middle">Tigist Bekele</td>
                    <td className="p-4 align-middle">ETB 1200</td>
                    <td className="p-4 align-middle">Apr 18, 2025</td>
                    <td className="p-4 align-middle">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-green-500/10 text-green-500 hover:bg-green-500/20">
                        Paid
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
              Showing <strong>1</strong> to <strong>5</strong> of <strong>28</strong> transactions
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
