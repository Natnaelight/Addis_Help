import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Mock data for service providers
const providers = {
  plumbing: [
    {
      id: 1,
      name: "Abebe Kebede",
      rating: 4.8,
      reviews: 56,
      image: "/placeholder.svg?height=100&width=100",
      availability: "Available today",
      price: "Starting from 500 ETB",
      description: "Experienced plumber with 10+ years of experience in residential and commercial plumbing.",
    },
    {
      id: 2,
      name: "Dawit Haile",
      rating: 4.6,
      reviews: 42,
      image: "/placeholder.svg?height=100&width=100",
      availability: "Available tomorrow",
      price: "Starting from 450 ETB",
      description: "Specialized in fixing leaks, installing fixtures, and emergency plumbing services.",
    },
    {
      id: 3,
      name: "Solomon Tesfaye",
      rating: 4.9,
      reviews: 78,
      image: "/placeholder.svg?height=100&width=100",
      availability: "Available today",
      price: "Starting from 550 ETB",
      description: "Master plumber with expertise in all types of plumbing issues and installations.",
    },
  ],
  tutoring: [
    {
      id: 1,
      name: "Sara Mekonnen",
      rating: 4.9,
      reviews: 64,
      image: "/placeholder.svg?height=100&width=100",
      availability: "Available weekdays",
      price: "Starting from 300 ETB/hour",
      description:
        "Mathematics and Physics tutor with 5 years of experience teaching high school and university students.",
    },
    {
      id: 2,
      name: "Yonas Alemu",
      rating: 4.7,
      reviews: 38,
      image: "/placeholder.svg?height=100&width=100",
      availability: "Available weekends",
      price: "Starting from 350 ETB/hour",
      description: "English language tutor specializing in conversation, grammar, and exam preparation.",
    },
  ],
  delivery: [
    {
      id: 1,
      name: "Kidus Tadesse",
      rating: 4.8,
      reviews: 92,
      image: "/placeholder.svg?height=100&width=100",
      availability: "Available 7 days a week",
      price: "Starting from 100 ETB",
      description: "Fast and reliable delivery service across Addis Ababa. Same-day delivery available.",
    },
  ],
  electronics: [
    {
      id: 1,
      name: "Henok Girma",
      rating: 4.9,
      reviews: 47,
      image: "/placeholder.svg?height=100&width=100",
      availability: "Available today",
      price: "Starting from 400 ETB",
      description: "Expert in repairing smartphones, laptops, TVs, and other electronic devices.",
    },
  ],
  cleaning: [
    {
      id: 1,
      name: "Tigist Bekele",
      rating: 4.7,
      reviews: 53,
      image: "/placeholder.svg?height=100&width=100",
      availability: "Available weekdays",
      price: "Starting from 800 ETB",
      description: "Professional home and office cleaning services with attention to detail.",
    },
  ],
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Browse through our wide range of services and find the right professional for your needs in Addis
                  Ababa.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="plumbing" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto">
                <TabsTrigger value="plumbing" className="py-3">
                  Plumbing
                </TabsTrigger>
                <TabsTrigger value="tutoring" className="py-3">
                  Tutoring
                </TabsTrigger>
                <TabsTrigger value="delivery" className="py-3">
                  Delivery
                </TabsTrigger>
                <TabsTrigger value="electronics" className="py-3">
                  Electronics
                </TabsTrigger>
                <TabsTrigger value="cleaning" className="py-3">
                  Cleaning
                </TabsTrigger>
              </TabsList>

              {Object.entries(providers).map(([category, categoryProviders]) => (
                <TabsContent key={category} value={category} className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryProviders.map((provider) => (
                      <Card key={provider.id} className="overflow-hidden">
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-4">
                            <Image
                              src={provider.image || "/placeholder.svg"}
                              alt={provider.name}
                              width={60}
                              height={60}
                              className="rounded-full object-cover"
                            />
                            <div>
                              <CardTitle className="text-lg">{provider.name}</CardTitle>
                              <div className="flex items-center gap-1 mt-1">
                                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                                <span className="text-sm font-medium">{provider.rating}</span>
                                <span className="text-xs text-muted-foreground">({provider.reviews} reviews)</span>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">{provider.description}</p>
                          <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                            <div>
                              <p className="font-medium">Availability</p>
                              <p className="text-muted-foreground">{provider.availability}</p>
                            </div>
                            <div>
                              <p className="font-medium">Price</p>
                              <p className="text-muted-foreground">{provider.price}</p>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Link
                            href={`https://t.me/addishelperbot?start=${category}_${provider.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button size="sm" className="gap-1">
                              <MessageCircle className="h-4 w-4" />
                              Book via Telegram
                            </Button>
                          </Link>
                          <Link href={`/services/${category}/${provider.id}`}>
                            <Button variant="ghost" size="sm" className="gap-1">
                              View Profile
                              <ArrowRight className="h-4 w-4" />
                            </Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
