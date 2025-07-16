import Link from "next/link"
import { ShoppingCart, Shirt, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-accent bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2 text-secondary">
          <Shirt className="h-6 w-6" />
          <span className="font-bold text-lg">KurtiKart</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="text-secondary hover:text-primary">
            Home
          </Link>
          <Link href="/products" className="text-secondary hover:text-primary">
            Products
          </Link>
          <Link href="/contact" className="text-secondary hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" asChild className="text-secondary hover:text-primary">
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
              {/* Placeholder for cart item count */}
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                0
              </span>
            </Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-secondary hover:text-primary">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <div className="grid gap-4 py-6">
                <Link href="/" className="text-lg font-semibold text-secondary hover:text-primary">
                  Home
                </Link>
                <Link href="/products" className="text-lg font-semibold text-secondary hover:text-primary">
                  Products
                </Link>
                <Link href="/contact" className="text-lg font-semibold text-secondary hover:text-primary">
                  Contact
                </Link>
                <Link
                  href="/cart"
                  className="text-lg font-semibold text-secondary hover:text-primary flex items-center gap-2"
                >
                  Cart <ShoppingCart className="h-5 w-5" />
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
