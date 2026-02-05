"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    { name: "Properties", href: "#properties" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">FM</span>
          </div>
          <span className="hidden sm:block text-sm font-semibold tracking-wide text-primary">Farha N Mirza</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm tracking-wide text-foreground/70 hover:text-primary transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 hover:bg-muted rounded transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-5 h-5 text-primary" /> : <Menu className="w-5 h-5 text-primary" />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border lg:hidden">
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm tracking-wide text-foreground/70 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
