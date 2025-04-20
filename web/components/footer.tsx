import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
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
            <span className="font-bold">Addis Helper</span>
          </Link>
          <nav className="flex flex-wrap gap-4 md:gap-6">
            <Link href="/services" className="text-sm hover:underline underline-offset-4">
              Services
            </Link>
            <Link href="/provider-registration" className="text-sm hover:underline underline-offset-4">
              Become a Provider
            </Link>
            <Link href="/privacy" className="text-sm hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm hover:underline underline-offset-4">
              Terms of Service
            </Link>
          </nav>
        </div>
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Addis Helper. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
