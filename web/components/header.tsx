"use client"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { MessageCircle, Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              <path d="m14.5 9-5 5" />
              <path d="m9.5 9 5 5" />
            </svg>
            <span className="font-bold text-xl">Addis Helper</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/services" className="text-sm font-medium hover:underline underline-offset-4">
            Services
          </Link>
          <Link href="/provider-registration" className="text-sm font-medium hover:underline underline-offset-4">
            Become a Provider
          </Link>
          <Link href="/admin" className="text-sm font-medium hover:underline underline-offset-4">
            Admin Dashboard
          </Link>
          <Link href="https://t.me/addishelperbot" target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="gap-1">
              <MessageCircle className="h-4 w-4" />
              Open in Telegram
            </Button>
          </Link>
          <ModeToggle />
        </nav>
        <div className="flex md:hidden items-center gap-4">
          <ModeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="/services"
                  className="text-sm font-medium hover:underline underline-offset-4"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/provider-registration"
                  className="text-sm font-medium hover:underline underline-offset-4"
                  onClick={() => setIsOpen(false)}
                >
                  Become a Provider
                </Link>
                <Link
                  href="/admin"
                  className="text-sm font-medium hover:underline underline-offset-4"
                  onClick={() => setIsOpen(false)}
                >
                  Admin Dashboard
                </Link>
                <Link
                  href="https://t.me/addishelperbot"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  <Button size="sm" className="gap-1 w-full">
                    <MessageCircle className="h-4 w-4" />
                    Open in Telegram
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
