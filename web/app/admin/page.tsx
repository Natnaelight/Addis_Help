import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Calendar, DollarSign, Download, Users } from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142</div>
            <p className="text-xs text-muted-foreground">+22% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Providers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">38</div>
            <p className="text-xs text-muted-foreground">+5 new this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">ETB 24,565</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">Requires review</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="recent" className="space-y-4">
        <TabsList>
          <TabsTrigger value="recent">Recent Bookings</TabsTrigger>
          <TabsTrigger value="pending">Pending Approvals</TabsTrigger>
          <TabsTrigger value="payments">Recent Payments</TabsTrigger>
        </TabsList>
        <TabsContent value="recent" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Recent Bookings</h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <Download className="h-4 w-4" />
                Export
              </Button>
              <Link href="/admin/bookings">
                <Button variant="ghost" size="sm" className="h-8 gap-1">
                  View All
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Link>
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
                    <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle">#1234</td>
                    <td className="p-4 align-middle">Meron Abebe</td>
                    <td className="p-4 align-middle">Dawit Haile</td>
                    <td className="p-4 align-middle">Plumbing</td>
                    <td className="p-4 align-middle">Apr 21, 2025</td>
                    <td className="p-4 align-middle">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-green-500/10 text-green-500 hover:bg-green-500/20">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle">#1233</td>
                    <td className="p-4 align-middle">Yonas Kebede</td>
                    <td className="p-4 align-middle">Sara Mekonnen</td>
                    <td className="p-4 align-middle">Tutoring</td>
                    <td className="p-4 align-middle">Apr 20, 2025</td>
                    <td className="p-4 align-middle">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-500/10 text-blue-500 hover:bg-blue-500/20">
                        In Progress
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle">#1232</td>
                    <td className="p-4 align-middle">Tigist Alemu</td>
                    <td className="p-4 align-middle">Kidus Tadesse</td>
                    <td className="p-4 align-middle">Delivery</td>
                    <td className="p-4 align-middle">Apr 20, 2025</td>
                    <td className="p-4 align-middle">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20">
                        Pending
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle">#1231</td>
                    <td className="p-4 align-middle">Abebe Bekele</td>
                    <td className="p-4 align-middle">Henok Girma</td>
                    <td className="p-4 align-middle">Electronics</td>
                    <td className="p-4 align-middle">Apr 19, 2025</td>
                    <td className="p-4 align-middle">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-green-500/10 text-green-500 hover:bg-green-500/20">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle">#1230</td>
                    <td className="p-4 align-middle">Selam Hailu</td>
                    <td className="p-4 align-middle">Tigist Bekele</td>
                    <td className="p-4 align-middle">Cleaning</td>
                    <td className="p-4 align-middle">Apr 18, 2025</td>
                    <td className="p-4 align-middle">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-green-500/10 text-green-500 hover:bg-green-500/20">
                        Completed
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="pending" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Pending Provider Approvals</h2>
            <Link href="/admin/providers">
              <Button variant="ghost" size="sm" className="h-8 gap-1">
                View All
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="rounded-md border">
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead>
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <th className="h-12 px-4 text-left align-middle font-medium">Name</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Service</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Phone</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Applied</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle">Haile Gebrselassie</td>
                    <td className="p-4 align-middle">Delivery</td>
                    <td className="p-4 align-middle">+251 91 234 5678</td>
                    <td className="p-4 align-middle">Apr 20, 2025</td>
                    <td className="p-4 align-middle">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20">
                        Pending
                      </span>
                    </td>
                    <td className="p-4 align-middle">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Review
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle">Meseret Defar</td>
                    <td className="p-4 align-middle">Tutoring</td>
                    <td className="p-4 align-middle">+251 91 876 5432</td>
                    <td className="p-4 align-middle">Apr 19, 2025</td>
                    <td className="p-4 align-middle">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20">
                        Pending
                      </span>
                    </td>
                    <td className="p-4 align-middle">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Review
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle">Tedros Adhanom</td>
                    <td className="p-4 align-middle">Electronics</td>
                    <td className="p-4 align-middle">+251 91 345 6789</td>
                    <td className="p-4 align-middle">Apr 18, 2025</td>
                    <td className="p-4 align-middle">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20">
                        Pending
                      </span>
                    </td>
                    <td className="p-4 align-middle">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Review
                        </Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="payments" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Recent Payments</h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <Download className="h-4 w-4" />
                Export
              </Button>
              <Link href="/admin/payments">
                <Button variant="ghost" size="sm" className="h-8 gap-1">
                  View All
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="rounded-md border">
            <div className="relative w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <thead>
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <th className="h-12 px-4 text-left align-middle font-medium">ID</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Booking</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Amount</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Provider</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Date</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle">#P1234</td>
                    <td className="p-4 align-middle">#1234</td>
                    <td className="p-4 align-middle">ETB 850</td>
                    <td className="p-4 align-middle">Dawit Haile</td>
                    <td className="p-4 align-middle">Apr 21, 2025</td>
                    <td className="p-4 align-middle">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-green-500/10 text-green-500 hover:bg-green-500/20">
                        Paid
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle">#P1233</td>
                    <td className="p-4 align-middle">#1233</td>
                    <td className="p-4 align-middle">ETB 1200</td>
                    <td className="p-4 align-middle">Sara Mekonnen</td>
                    <td className="p-4 align-middle">Apr 20, 2025</td>
                    <td className="p-4 align-middle">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20">
                        Pending
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle">#P1232</td>
                    <td className="p-4 align-middle">#1232</td>
                    <td className="p-4 align-middle">ETB 300</td>
                    <td className="p-4 align-middle">Kidus Tadesse</td>
                    <td className="p-4 align-middle">Apr 20, 2025</td>
                    <td className="p-4 align-middle">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-green-500/10 text-green-500 hover:bg-green-500/20">
                        Paid
                      </span>
                    </td>
                  </tr>
                  <tr className="transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td className="p-4 align-middle">#P1231</td>
                    <td className="p-4 align-middle">#1231</td>
                    <td className="p-4 align-middle">ETB 1500</td>
                    <td className="p-4 align-middle">Henok Girma</td>
                    <td className="p-4 align-middle">Apr 19, 2025</td>
                    <td className="p-4 align-middle">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-green-500/10 text-green-500 hover:bg-green-500/20">
                        Paid
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
