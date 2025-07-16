"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Trash2 } from "lucide-react"
import { useState } from "react"

// Mock cart items
const initialCartItems = [
  {
    id: "1",
    name: "Elegant Silk Kurti",
    price: 120.0,
    image: "/placeholder.svg?height=100&width=100",
    quantity: 1,
  },
  {
    id: "2",
    name: "Casual Cotton Kurti",
    price: 45.0,
    image: "/placeholder.svg?height=100&width=100",
    quantity: 2,
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)

  const updateQuantity = (id: string, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item)),
    )
  }

  const removeItem = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 10.0 // Example shipping cost
  const total = subtotal + shipping

  return (
    <div className="container px-4 md:px-6 py-8 md:py-12 bg-background">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center mb-8 text-secondary">
        Your Shopping Cart
      </h1>
      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground mb-4">Your cart is empty.</p>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white">
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
          {/* Cart Items List */}
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 border-b border-accent pb-4">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="aspect-square rounded-md object-cover border border-accent"
                />
                <div className="grid flex-1 gap-1">
                  <h3 className="font-semibold text-lg text-secondary">{item.name}</h3>
                  <p className="text-muted-foreground">${item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      className="border-accent text-accent hover:bg-accent hover:text-white"
                    >
                      -
                    </Button>
                    <Input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value))}
                      className="w-16 text-center border-accent focus:border-primary text-secondary"
                      min="1"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="border-accent text-accent hover:bg-accent hover:text-white"
                    >
                      +
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <p className="font-semibold text-lg text-accent">${(item.price * item.quantity).toFixed(2)}</p>
                  <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
                    <Trash2 className="h-5 w-5 text-destructive" />
                    <span className="sr-only">Remove item</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="rounded-lg border border-accent bg-card p-6 text-card-foreground shadow-sm h-fit">
            <h2 className="text-2xl font-bold mb-4 text-secondary">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between text-secondary">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-secondary">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <Separator className="my-4 bg-accent" />
              <div className="flex justify-between font-bold text-lg text-accent">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-white" size="lg">
              Proceed to Checkout
            </Button>
            <Button asChild variant="link" className="w-full mt-2 text-accent hover:text-primary">
              <Link href="/products">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
