import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container px-4 md:px-6 py-8 md:py-12 bg-background">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center mb-8 text-secondary">
        Contact Us
      </h1>
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact Form */}
        <div className="rounded-lg border border-accent bg-card p-6 text-card-foreground shadow-sm">
          <h2 className="text-2xl font-bold mb-4 text-secondary">Send us a message</h2>
          <form className="grid gap-4">
            <div className="grid gap-2">
              <label
                htmlFor="name"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-secondary"
              >
                Name
              </label>
              <Input id="name" placeholder="Your Name" className="border-accent focus:border-primary text-secondary" />
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-secondary"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@example.com"
                className="border-accent focus:border-primary text-secondary"
              />
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="message"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-secondary"
              >
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message..."
                className="min-h-[120px] border-accent focus:border-primary text-secondary"
              />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
              Send Message
            </Button>
          </form>
        </div>

        {/* Contact Info and Map */}
        <div className="space-y-8">
          <div className="rounded-lg border border-accent bg-card p-6 text-card-foreground shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-secondary">Our Details</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <p className="text-muted-foreground">info@kurtikart.com</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <p className="text-muted-foreground">+1 (123) 456-7890</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  123 Kurti Lane,
                  <br />
                  Fashion City, FC 12345,
                  <br />
                  India
                </p>
              </div>
            </div>
          </div>

          {/* Google Map Embed Placeholder */}
          <div className="rounded-lg border border-accent overflow-hidden shadow-sm">
            <h2 className="sr-only">Our Location</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2100000000007!2d144.9631!3d-37.814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Store Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
