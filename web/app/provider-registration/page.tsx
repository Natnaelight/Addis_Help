"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

export default function ProviderRegistrationPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    serviceType: "",
    areasServed: "",
    experience: "",
    availability: "",
    chapaHandle: "",
    telegramUsername: "",
    agreeToTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeToTerms: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (!formData.fullName || !formData.phoneNumber || !formData.serviceType || !formData.agreeToTerms) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and agree to the terms.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Registration Submitted",
        description:
          "Your provider registration has been submitted successfully. We'll review your application and contact you soon.",
      })
      setIsSubmitting(false)

      // Reset form
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        serviceType: "",
        areasServed: "",
        experience: "",
        availability: "",
        chapaHandle: "",
        telegramUsername: "",
        agreeToTerms: false,
      })
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Become a Service Provider</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join our network of trusted service providers in Addis Ababa and grow your business.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <Card>
                <CardHeader>
                  <CardTitle>Provider Registration Form</CardTitle>
                  <CardDescription>
                    Fill out the form below to apply as a service provider. We'll review your application and get back
                    to you within 48 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">
                          Full Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phoneNumber">
                          Phone Number <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="phoneNumber"
                          name="phoneNumber"
                          placeholder="e.g., +251 91 234 5678"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telegramUsername">Telegram Username</Label>
                        <Input
                          id="telegramUsername"
                          name="telegramUsername"
                          placeholder="@yourusername"
                          value={formData.telegramUsername}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="serviceType">
                          Service Type <span className="text-red-500">*</span>
                        </Label>
                        <Select
                          value={formData.serviceType}
                          onValueChange={(value) => handleSelectChange("serviceType", value)}
                          required
                        >
                          <SelectTrigger id="serviceType">
                            <SelectValue placeholder="Select service type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="plumbing">Plumbing</SelectItem>
                            <SelectItem value="tutoring">Tutoring</SelectItem>
                            <SelectItem value="delivery">Delivery</SelectItem>
                            <SelectItem value="electronics">Electronics Repair</SelectItem>
                            <SelectItem value="cleaning">Cleaning</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="areasServed">Areas Served in Addis Ababa</Label>
                        <Input
                          id="areasServed"
                          name="areasServed"
                          placeholder="e.g., Bole, Kazanchis, Piassa"
                          value={formData.areasServed}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="experience">Years of Experience</Label>
                        <Select
                          value={formData.experience}
                          onValueChange={(value) => handleSelectChange("experience", value)}
                        >
                          <SelectTrigger id="experience">
                            <SelectValue placeholder="Select experience" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="less-than-1">Less than 1 year</SelectItem>
                            <SelectItem value="1-3">1-3 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="5-10">5-10 years</SelectItem>
                            <SelectItem value="more-than-10">More than 10 years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="availability">Availability</Label>
                        <Select
                          value={formData.availability}
                          onValueChange={(value) => handleSelectChange("availability", value)}
                        >
                          <SelectTrigger id="availability">
                            <SelectValue placeholder="Select availability" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="weekdays">Weekdays only</SelectItem>
                            <SelectItem value="weekends">Weekends only</SelectItem>
                            <SelectItem value="all-days">All days</SelectItem>
                            <SelectItem value="evenings">Evenings only</SelectItem>
                            <SelectItem value="mornings">Mornings only</SelectItem>
                            <SelectItem value="custom">Custom schedule</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="chapaHandle">Chapa Payment Handle</Label>
                        <Input
                          id="chapaHandle"
                          name="chapaHandle"
                          placeholder="Your Chapa payment handle"
                          value={formData.chapaHandle}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="idUpload">Upload ID Document</Label>
                      <Input id="idUpload" type="file" />
                      <p className="text-xs text-muted-foreground mt-1">
                        Please upload a clear photo of your ID card or passport. This will be used for verification
                        purposes only.
                      </p>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={handleCheckboxChange}
                        required
                      />
                      <Label
                        htmlFor="agreeToTerms"
                        className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the{" "}
                        <a href="/terms" className="text-primary hover:underline">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </a>
                      </Label>
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </Button>
                  </form>
                </CardContent>
                <CardFooter className="flex flex-col items-start text-sm text-muted-foreground">
                  <p>
                    After submitting your application, our team will review your details and may contact you for
                    additional information or verification.
                  </p>
                  <p className="mt-2">
                    Approved providers will be added to our platform and can start receiving service requests through
                    our Telegram bot.
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
