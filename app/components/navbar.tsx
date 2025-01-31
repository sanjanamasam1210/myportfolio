"use client"

import Link from "next/link"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentDateTime, setCurrentDateTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
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
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ]


  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="container flex h-14 items-center justify-between pl-5 pr-5">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-lg">Sanjana Masam</span>
        </Link>

        {/* Desktop Nav */}
        <NavigationMenu className="hidden md:flex">
          <ul className="flex items-center">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={item.href} className="flex items-center">
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink 
                    className="relative px-3 py-2 hover:underline hover:decoration-0.5 hover:underline-offset-2"
                  >
                    {item.name}
                  </NavigationMenuLink>
                </Link>
                {index < navItems.length - 1 && (
                  <span className="text-muted-foreground mx-1">/</span>
                )}
              </NavigationMenuItem>
            ))}
          </ul>
        </NavigationMenu>

        {/* Right Section */}
        <div className="flex items-center gap-4">
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
        <div className="container py-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 text-sm font-medium transition-colors hover:text-primary"
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
