"use client"

import Link from "next/link"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentDateTime, setCurrentDateTime] = useState(new Date())

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    const timer = setInterval(() => {
      setCurrentDateTime(new Date())
    }, 1000)

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearInterval(timer)
    }
  }, [])

  const formatDateTime = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).format(date)
  }

  const navItems = [
    { name: "PROJECTS", href: "#projects" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/fonts" }
  ]

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      <div className={cn(
        "container flex h-14 items-center justify-between pl-5 pr-5 transition-all duration-300",
        isScrolled ? "justify-center" : ""
      )}>
        {/* Logo */}
        <Link href="/" className={cn(
          "flex items-center space-x-2 transition-opacity duration-300",
          isScrolled ? "hidden" : ""
        )}>
          <span className="text-lg">SANJANA MASAM</span>
        </Link>

        {/* Nav Items */}
        <NavigationMenu className={cn(
          "hidden md:flex",
          isScrolled ? "flex-1 justify-center mt-6" : ""
        )}>
          <ul className={cn(
            "flex items-center",
            isScrolled 
              ? "bg-white/30 backdrop-blur-md rounded-full px-4 py-2 border border-gray-200/50 shadow-lg" 
              : ""
          )}>
            {navItems.map((item, index) => (
              <NavigationMenuItem key={item.href} className="flex items-center">
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink 
                    className="relative px-3 py-2 hover:underline hover:decoration-0.5 hover:underline-offset-2"
                  >
                    {item.name}
                  </NavigationMenuLink>
                </Link>
                {/* Remove separator slashes when scrolled */}
                {!isScrolled && index < navItems.length - 1 && (
                  <span className="text-muted-foreground mx-1">/</span>
                )}
              </NavigationMenuItem>
            ))}
          </ul>
        </NavigationMenu>

        {/* Right Section */}
        <div className={cn(
          "flex items-center gap-4 transition-opacity duration-300",
          isScrolled ? "hidden" : ""
        )}>
          <span className="hidden sm:block text-md">
            {formatDateTime(currentDateTime)}
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute w-full bg-background border-b",
        isOpen ? "block" : "hidden"
      )}>
        <div className="container px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-2 py-2 text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
