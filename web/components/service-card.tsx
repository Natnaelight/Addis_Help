import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import type { ReactNode } from "react"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  href: string
}

export function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-2 flex flex-row items-center gap-2">
        <div className="text-primary">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Link href={href} className="text-sm font-medium text-primary flex items-center gap-1 hover:underline">
          View Providers
          <ArrowRight className="h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  )
}
