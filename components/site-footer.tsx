import Link from "next/link"
import { Shirt, Facebook, Instagram, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-accent bg-secondary text-white py-8">
      <div className="container grid grid-cols-1 gap-8 px-4 md:grid-cols-3 md:px-6 lg:grid-cols-4">
        <div className="space-y-4">
          <Link href="/" className="flex items-center space-x-2 text-white">
            <Shirt className="h-6 w-6" />
            <span className="font-bold text-lg">KurtiKart</span>
          </Link>
          <p className="text-sm text-gray-300">Your one-stop shop for elegant and comfortable Kurtis.</p>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold text-primary">Quick Links</h3>
          <Link href="/" className="text-sm text-gray-300 hover:text-primary">
            Home
          </Link>
          <Link href="/products" className="text-sm text-gray-300 hover:text-primary">
            Products
          </Link>
          <Link href="/cart" className="text-sm text-gray-300 hover:text-primary">
            Cart
          </Link>
          <Link href="/contact" className="text-sm text-gray-300 hover:text-primary">
            Contact
          </Link>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold text-primary">Contact Us</h3>
          <p className="text-sm text-gray-300">
            Email: info@kurtikart.com
            <br />
            Phone: +1 (123) 456-7890
            <br />
            Address: 123 Kurti Lane, Fashion City, FC 12345
          </p>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold text-primary">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-300 hover:text-primary">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-gray-300 hover:text-primary">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-gray-300 hover:text-primary">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="container mt-8 text-center text-sm text-gray-300">
        &copy; {new Date().getFullYear()} KurtiKart. All rights reserved.
      </div>
    </footer>
  )
}
