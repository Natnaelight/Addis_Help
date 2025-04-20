import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ExternalLink, MessageCircle, Shield, Star, ThumbsUp, Wrench } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceCard } from "@/components/service-card"
import { TestimonialCard } from "@/components/testimonial-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Trusted Middleman for Reliable Services in Addis Ababa
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Connect with pre-vetted service providers for all your needs - from plumbing to tutoring, delivery
                    to repairs.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="https://t.me/addishelperbot" target="_blank" rel="noopener noreferrer">
                    <Button className="gap-1">
                      <MessageCircle className="h-5 w-5" />
                      Open in Telegram
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button variant="outline" className="gap-1">
                      Browse Services
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[500px] h-[400px]">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Addis Helper Service Providers"
                    width={500}
                    height={400}
                    className="rounded-lg object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Why Choose Addis Helper?
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We connect you with the best service providers in Addis Ababa, ensuring quality, reliability, and
                  safety.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="border-2 border-primary/20">
                <CardHeader className="pb-2">
                  <Shield className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>Safety First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    All service providers are thoroughly vetted and verified for your safety and peace of mind.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20">
                <CardHeader className="pb-2">
                  <Star className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>Vetted Professionals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Only the best professionals with proven track records and positive reviews make it to our platform.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20">
                <CardHeader className="pb-2">
                  <ThumbsUp className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>Easy Booking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Book services with a few taps on Telegram, track your booking, and pay securely through our
                    platform.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Browse through our wide range of services and find the right professional for your needs.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <ServiceCard
                icon={<Wrench className="h-8 w-8" />}
                title="Plumbing"
                description="Fix leaks, install fixtures, and solve all your plumbing issues with our expert plumbers."
                href="/services/plumbing"
              />
              <ServiceCard
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-graduation-cap"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                  </svg>
                }
                title="Tutoring"
                description="Get help with your studies from qualified tutors in various subjects and levels."
                href="/services/tutoring"
              />
              <ServiceCard
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-package"
                  >
                    <path d="M16.5 9.4 7.55 4.24" />
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.29 7 12 12 20.71 7" />
                    <line x1="12" x2="12" y1="22" y2="12" />
                  </svg>
                }
                title="Delivery"
                description="Fast and reliable delivery services for packages, food, and more across Addis Ababa."
                href="/services/delivery"
              />
              <ServiceCard
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-lightbulb"
                  >
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                  </svg>
                }
                title="Electronics Repair"
                description="Professional repair services for phones, computers, TVs, and other electronic devices."
                href="/services/electronics"
              />
              <ServiceCard
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-spray-can"
                  >
                    <path d="M3 3h.01" />
                    <path d="M7 5h.01" />
                    <path d="M11 7h.01" />
                    <path d="M3 7h.01" />
                    <path d="M7 9h.01" />
                    <path d="M3 11h.01" />
                    <rect width="4" height="4" x="15" y="5" rx="2" />
                    <path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2" />
                    <path d="m13 14 8-2" />
                    <path d="m13 19 8-2" />
                  </svg>
                }
                title="Cleaning"
                description="Keep your home or office spotless with our professional cleaning services."
                href="/services/cleaning"
              />
              <ServiceCard
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-more-horizontal"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="19" cy="12" r="1" />
                    <circle cx="5" cy="12" r="1" />
                  </svg>
                }
                title="More Services"
                description="Explore our full range of services including carpentry, painting, gardening, and more."
                href="/services"
              />
            </div>
            <div className="flex justify-center mt-8">
              <Link href="/services">
                <Button variant="outline" size="lg" className="gap-2">
                  View All Services
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Getting help is easy with Addis Helper. Follow these simple steps:
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold">Open Telegram Bot</h3>
                <p className="text-sm text-muted-foreground">
                  Start a chat with our Telegram bot to browse services or request help.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold">Select Service & Provider</h3>
                <p className="text-sm text-muted-foreground">
                  Choose the service you need and select from our list of vetted providers.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold">Book & Pay Securely</h3>
                <p className="text-sm text-muted-foreground">
                  Schedule the service and pay securely through our integrated payment system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Don't just take our word for it. Here's what people in Addis Ababa are saying about our service.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <TestimonialCard
                quote="I needed an emergency plumber and Addis Helper connected me with a professional within an hour. Great service!"
                author="Abebe T."
                role="Homeowner"
                rating={5}
              />
              <TestimonialCard
                quote="The math tutor I found through Addis Helper helped my daughter improve her grades significantly. Very reliable service."
                author="Sara M."
                role="Parent"
                rating={5}
              />
              <TestimonialCard
                quote="As a service provider, Addis Helper has helped me find new clients and grow my business. The platform is easy to use."
                author="Dawit H."
                role="Electrician"
                rating={4}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of satisfied users in Addis Ababa who trust Addis Helper for their service needs.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="https://t.me/addishelperbot" target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" size="lg" className="gap-1">
                    <MessageCircle className="h-5 w-5" />
                    Open in Telegram
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
                <Link href="/provider-registration">
                  <Button variant="outline" size="lg" className="bg-transparent border-white hover:bg-white/10 gap-1">
                    Register as Provider
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
