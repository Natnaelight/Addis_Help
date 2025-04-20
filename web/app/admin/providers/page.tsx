import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Filter, Search, Star } from "lucide-react"
import Image from "next/image"

export default function ProvidersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Service Providers</h1>
        <Button variant="outline" size="sm" className="h-8 gap-1">
          <Download className="h-4 w-4" />
          Export
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Manage Providers</CardTitle>
          <CardDescription>View and manage all service providers in the system.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="active" className="space-y-4">
            <TabsList>
              <TabsTrigger value="active">Active Providers</TabsTrigger>
              <TabsTrigger value="pending">Pending Approval</TabsTrigger>
              <TabsTrigger value="inactive">Inactive</TabsTrigger>
            </TabsList>

            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search providers..." className="pl-8" />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
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

            <TabsContent value="active">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Provider Card 1 */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Image
                        src="/placeholder.svg?height=80&width=80"
                        alt="Dawit Haile"
                        width={80}
                        height={80}
                        className="rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-lg">Dawit Haile</h3>
                        <p className="text-sm text-muted-foreground">Plumbing</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                          <span className="text-sm font-medium">4.8</span>
                          <span className="text-xs text-muted-foreground">(56 reviews)</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-muted-foreground">+251 91 234 5678</p>
                      </div>
                      <div>
                        <p className="font-medium">Joined</p>
                        <p className="text-muted-foreground">Jan 15, 2025</p>
                      </div>
                      <div>
                        <p className="font-medium">Bookings</p>
                        <p className="text-muted-foreground">42</p>
                      </div>
                      <div>
                        <p className="font-medium">Status</p>
                        <p className="text-green-500">Active</p>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between">
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                        Suspend
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Provider Card 2 */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Image
                        src="/placeholder.svg?height=80&width=80"
                        alt="Sara Mekonnen"
                        width={80}
                        height={80}
                        className="rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-lg">Sara Mekonnen</h3>
                        <p className="text-sm text-muted-foreground">Tutoring</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                          <span className="text-sm font-medium">4.9</span>
                          <span className="text-xs text-muted-foreground">(64 reviews)</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-muted-foreground">+251 91 876 5432</p>
                      </div>
                      <div>
                        <p className="font-medium">Joined</p>
                        <p className="text-muted-foreground">Feb 3, 2025</p>
                      </div>
                      <div>
                        <p className="font-medium">Bookings</p>
                        <p className="text-muted-foreground">38</p>
                      </div>
                      <div>
                        <p className="font-medium">Status</p>
                        <p className="text-green-500">Active</p>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between">
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                        Suspend
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Provider Card 3 */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Image
                        src="/placeholder.svg?height=80&width=80"
                        alt="Kidus Tadesse"
                        width={80}
                        height={80}
                        className="rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-lg">Kidus Tadesse</h3>
                        <p className="text-sm text-muted-foreground">Delivery</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                          <span className="text-sm font-medium">4.8</span>
                          <span className="text-xs text-muted-foreground">(92 reviews)</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-muted-foreground">+251 91 345 6789</p>
                      </div>
                      <div>
                        <p className="font-medium">Joined</p>
                        <p className="text-muted-foreground">Dec 10, 2024</p>
                      </div>
                      <div>
                        <p className="font-medium">Bookings</p>
                        <p className="text-muted-foreground">92</p>
                      </div>
                      <div>
                        <p className="font-medium">Status</p>
                        <p className="text-green-500">Active</p>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between">
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                        Suspend
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex items-center justify-between mt-6">
                <div className="text-sm text-muted-foreground">
                  Showing <strong>1</strong> to <strong>3</strong> of <strong>38</strong> providers
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
            </TabsContent>

            <TabsContent value="pending">
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

            <TabsContent value="inactive">
              <div className="rounded-md border">
                <div className="relative w-full overflow-auto">
                  <table className="w-full caption-bottom text-sm">
                    <thead>
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <th className="h-12 px-4 text-left align-middle font-medium">Name</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Service</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Phone</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Joined</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <td className="p-4 align-middle">Abebe Bikila</td>
                        <td className="p-4 align-middle">Plumbing</td>
                        <td className="p-4 align-middle">+251 91 123 4567</td>
                        <td className="p-4 align-middle">Nov 10, 2024</td>
                        <td className="p-4 align-middle">
                          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-red-500/10 text-red-500 hover:bg-red-500/20">
                            Suspended
                          </span>
                        </td>
                        <td className="p-4 align-middle">
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              Reactivate
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr className="transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <td className="p-4 align-middle">Tirunesh Dibaba</td>
                        <td className="p-4 align-middle">Cleaning</td>
                        <td className="p-4 align-middle">+251 91 987 6543</td>
                        <td className="p-4 align-middle">Dec 5, 2024</td>
                        <td className="p-4 align-middle">
                          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-red-500/10 text-red-500 hover:bg-red-500/20">
                            Suspended
                          </span>
                        </td>
                        <td className="p-4 align-middle">
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              Reactivate
                            </Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
