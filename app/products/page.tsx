import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/data"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export default function ProductsPage() {
  return (
    <div className="container px-4 md:px-6 py-8 md:py-12 bg-background">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center mb-8 text-secondary">
        Our Kurti Collection
      </h1>
      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        {/* Filters Section */}
        <div className="hidden lg:block space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-secondary">Filters</h3>
            <div className="grid gap-4">
              <div>
                <Label htmlFor="search" className="text-secondary">
                  Search
                </Label>
                <Input
                  id="search"
                  placeholder="Search products..."
                  type="text"
                  className="mt-1 border-accent focus:border-primary"
                />
              </div>
              <div>
                <Label htmlFor="size" className="text-secondary">
                  Size
                </Label>
                <Select>
                  <SelectTrigger id="size" className="w-full mt-1 border-accent focus:border-primary">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent className="bg-background text-secondary">
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="s">S</SelectItem>
                    <SelectItem value="m">M</SelectItem>
                    <SelectItem value="l">L</SelectItem>
                    <SelectItem value="xl">XL</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="color" className="text-secondary">
                  Color
                </Label>
                <Select>
                  <SelectTrigger id="color" className="w-full mt-1 border-accent focus:border-primary">
                    <SelectValue placeholder="Select color" />
                  </SelectTrigger>
                  <SelectContent className="bg-background text-secondary">
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="red">Red</SelectItem>
                    <SelectItem value="blue">Blue</SelectItem>
                    <SelectItem value="green">Green</SelectItem>
                    <SelectItem value="pink">Pink</SelectItem>
                    <SelectItem value="black">Black</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="price" className="text-secondary">
                  Price Range
                </Label>
                <Select>
                  <SelectTrigger id="price" className="w-full mt-1 border-accent focus:border-primary">
                    <SelectValue placeholder="Select price range" />
                  </SelectTrigger>
                  <SelectContent className="bg-background text-secondary">
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="0-50">$0 - $50</SelectItem>
                    <SelectItem value="50-100">$50 - $100</SelectItem>
                    <SelectItem value="100+">$100+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
