import Image from "next/image"
import { Star, Heart } from "lucide-react"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { products } from "@/lib/data"
import { notFound } from "next/navigation"

interface ProductDetailPageProps {
  params: {
    id: string
  }
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6 bg-background">
      {/* Product Image Gallery */}
      <div className="grid gap-4 items-start order-1">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={600}
          height={600}
          className="aspect-square object-cover border border-accent w-full rounded-lg overflow-hidden"
        />
        <div className="hidden md:flex gap-4 items-start">
          {/* Placeholder for multiple image thumbnails */}
          <button className="border border-accent hover:border-primary rounded-lg overflow-hidden transition-colors">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt="Preview thumbnail 1"
              width={100}
              height={100}
              className="aspect-square object-cover"
            />
            <span className="sr-only">View Image 1</span>
          </button>
          <button className="border border-accent hover:border-primary rounded-lg overflow-hidden transition-colors">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt="Preview thumbnail 2"
              width={100}
              height={100}
              className="aspect-square object-cover"
            />
            <span className="sr-only">View Image 2</span>
          </button>
          <button className="border border-accent hover:border-primary rounded-lg overflow-hidden transition-colors">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt="Preview thumbnail 3"
              width={100}
              height={100}
              className="aspect-square object-cover"
            />
            <span className="sr-only">View Image 3</span>
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="grid gap-4 md:gap-10 items-start order-2 md:order-1">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-3xl lg:text-4xl text-secondary">{product.name}</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating) ? "fill-primary" : "fill-muted stroke-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
          </div>
          <div className="text-4xl font-bold text-accent">${product.price.toFixed(2)}</div>
          <p className="text-muted-foreground">{product.description}</p>
        </div>

        <Separator className="bg-accent" />

        {/* Product Options Form */}
        <form className="grid gap-4 md:gap-6">
          <div className="grid gap-2">
            <Label htmlFor="color" className="text-base text-secondary">
              Color
            </Label>
            <RadioGroup id="color" defaultValue={product.colors[0]} className="flex items-center gap-2">
              {product.colors.map((color) => (
                <Label
                  key={color}
                  htmlFor={`color-${color.toLowerCase()}`}
                  className="border border-accent cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-accent [&:has(:checked)]:text-white"
                >
                  <RadioGroupItem id={`color-${color.toLowerCase()}`} value={color.toLowerCase()} />
                  {color}
                </Label>
              ))}
            </RadioGroup>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="size" className="text-base text-secondary">
              Size
            </Label>
            <RadioGroup id="size" defaultValue={product.sizes[0]} className="flex items-center gap-2">
              {product.sizes.map((size) => (
                <Label
                  key={size}
                  htmlFor={`size-${size.toLowerCase()}`}
                  className="border border-accent cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-accent [&:has(:checked)]:text-white"
                >
                  <RadioGroupItem id={`size-${size.toLowerCase()}`} value={size.toLowerCase()} />
                  {size}
                </Label>
              ))}
            </RadioGroup>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="quantity" className="text-base text-secondary">
              Quantity
            </Label>
            <Select defaultValue="1">
              <SelectTrigger className="w-24 border-accent focus:border-primary">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent className="bg-background text-secondary">
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" className="flex-1 bg-primary hover:bg-primary/90 text-white">
              Add to cart
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="flex-1 bg-transparent border-accent text-accent hover:bg-accent hover:text-white"
            >
              <Heart className="w-4 h-4 mr-2" />
              Add to wishlist
            </Button>
          </div>
        </form>

        <Separator className="bg-accent" />

        {/* Reviews Section (Placeholder) */}
        <div className="grid gap-4">
          <h2 className="text-2xl font-bold text-secondary">Customer Reviews</h2>
          <div className="space-y-4">
            <div className="border border-accent rounded-lg p-4 bg-card text-card-foreground">
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < 5 ? "fill-yellow-400 text-yellow-400" : "fill-muted stroke-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                "This kurti is absolutely stunning! The fabric is soft and the fit is perfect. Highly recommend."
              </p>
              <p className="text-sm font-semibold mt-2 text-secondary">- Jane Doe</p>
            </div>
            <div className="border border-accent rounded-lg p-4 bg-card text-card-foreground">
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < 4 ? "fill-yellow-400 text-yellow-400" : "fill-muted stroke-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                "Good quality for the price. Shipping was fast. Will buy again."
              </p>
              <p className="text-sm font-semibold mt-2 text-secondary">- John Smith</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
