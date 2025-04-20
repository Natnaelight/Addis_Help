import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  rating: number
}

export function TestimonialCard({ quote, author, role, rating }: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} />
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm italic">"{quote}"</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <p className="font-semibold">{author}</p>
        <p className="text-xs text-muted-foreground">{role}</p>
      </CardFooter>
    </Card>
  )
}
