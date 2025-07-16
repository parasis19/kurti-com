import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"

interface ProductCardProps {
  product: {
    id: string
    name: string
    price: number
    image: string
    rating: number
    reviews: number
  }
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden rounded-lg shadow-sm transition-all hover:shadow-md border-accent">
      <Link href={`/products/${product.id}`} className="relative block aspect-[3/4] overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </Link>
      <CardContent className="flex-1 p-4">
        <h3 className="text-lg font-semibold text-secondary">
          <Link href={`/products/${product.id}`} className="hover:underline hover:text-primary">
            {product.name}
          </Link>
        </h3>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(product.rating) ? "fill-primary text-primary" : "fill-muted stroke-muted-foreground"
              }`}
            />
          ))}
          <span className="ml-1 text-secondary">({product.reviews})</span>
        </div>
        <p className="mt-2 text-xl font-bold text-accent">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 p-4 pt-0 sm:flex-row">
        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
          <Link href={`/products/${product.id}`}>Quick View</Link>
        </Button>
        <Button
          variant="outline"
          className="w-full bg-transparent border-accent text-accent hover:bg-accent hover:text-white"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
