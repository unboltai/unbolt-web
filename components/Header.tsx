"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Menu,
  X,
  TvMinimalPlay,
} from "lucide-react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <nav className="py-4 px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-10">
            <a href="/" className="flex items-center gap-3 group">
              <img
                src="/unbolt-logo.svg?v=2"
                alt="Unbolt Logo"
                width="160"
                height="50"
                className="transition-transform group-hover:scale-105"
              />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Button size="default" className="font-medium">
              Get Early Access
            </Button>
            <a href="/webinar" className="hidden sm:block font-medium text-base hover:text-primary transition-colors">
              <Button variant="outline" size="default" className="font-medium">
                <TvMinimalPlay className="mr-2 h-5 w-5" />
                Webinars
              </Button>
            </a>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <ul className="space-y-4 pt-4">
              <li>
                <a href="/" className="block py-2 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/webinar" className="block py-2 hover:text-primary transition-colors">
                  Webinars
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 hover:text-primary transition-colors">
                  Platform
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 hover:text-primary transition-colors">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
