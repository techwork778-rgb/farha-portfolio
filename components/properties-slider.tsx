"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function PropertiesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("properties-section")
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const properties = [
    {
      id: 1,
      name: "Beachfront Villa",
      location: "Palm Jumeirah",
      price: "15.5M AED",
      beds: "5",
      baths: "6",
      image: "/dubai-penthouse-skyline-view.jpg",
    },
    {
      id: 2,
      name: "Downtown Penthouse",
      location: "Downtown Dubai",
      price: "8.2M AED",
      beds: "4",
      baths: "5",
      image: "/palm-jumeirah-beachfront-villa.jpg",
    },
    {
      id: 3,
      name: "Marina Luxury Apartment",
      location: "Dubai Marina",
      price: "5.8M AED",
      beds: "3",
      baths: "3.5",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80",
    },
    {
      id: 4,
      name: "Emirates Hills Estate",
      location: "Emirates Hills",
      price: "12.5M AED",
      beds: "6",
      baths: "7",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80",
    },
  ]

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % properties.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + properties.length) % properties.length)
  }

  const currentProperty = properties[currentIndex]

  return (
    <section id="properties-section" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16 animate-fade-in-up">
          <span className="text-sm font-semibold text-accent tracking-widest uppercase">Featured Properties</span>
          <h2 className="text-4xl lg:text-5xl font-light text-primary mt-4 leading-tight">
            Curated Premium <span className="font-semibold">Listings</span>
          </h2>
        </div>

        {/* Slider - Added smooth fade transition for content */}
        <div
          className={`bg-background rounded-2xl border border-border overflow-hidden shadow-lg transition-all duration-500 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative h-80 lg:h-[500px] overflow-hidden group bg-muted">
              <img
                src={currentProperty.image || "/placeholder.svg"}
                alt={currentProperty.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/20"></div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-between bg-card">
              <div className="space-y-6">
                <span className="text-sm text-accent font-semibold tracking-wide uppercase">
                  {currentProperty.location}
                </span>
                <div>
                  <h3 className="text-3xl lg:text-4xl font-light text-primary mb-3">{currentProperty.name}</h3>
                  <p className="text-2xl font-semibold text-accent">{currentProperty.price}</p>
                </div>

                {/* Details */}
                <div className="flex gap-8 py-8 border-t border-b border-border">
                  <div>
                    <p className="text-sm text-foreground/60 mb-2">Bedrooms</p>
                    <p className="text-2xl font-semibold text-primary">{currentProperty.beds}</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60 mb-2">Bathrooms</p>
                    <p className="text-2xl font-semibold text-primary">{currentProperty.baths}</p>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between pt-8">
                <div className="flex gap-3">
                  <button
                    onClick={prev}
                    className="p-3 border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                    aria-label="Previous property"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={next}
                    className="p-3 border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                    aria-label="Next property"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
                <div className="text-sm text-foreground/60">
                  {String(currentIndex + 1).padStart(2, "0")} / {String(properties.length).padStart(2, "0")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
