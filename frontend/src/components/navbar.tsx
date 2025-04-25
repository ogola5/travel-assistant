"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Globe, Map, Settings, User, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-3xl">
      <div className="glass rounded-md border border-[#035A52]/20 shadow-md dark:border-[#D8E267]/20 px-4 py-2">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-[#035A52] dark:text-[#D8E267] font-medium">
            <div className="relative">
              <Globe className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D8E267] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D8E267]"></span>
              </span>
            </div>
            <span className="hidden sm:inline-block">TravelBuddy</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <NavItem href="/map" icon={<Map className="h-4 w-4" />} label="Explore" />
            <NavItem href="/profile" icon={<User className="h-4 w-4" />} label="Profile" />
            <NavItem href="/settings" icon={<Settings className="h-4 w-4" />} label="Settings" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden rounded-md p-2 text-[#035A52] hover:bg-[#035A52]/5 dark:text-[#D8E267] dark:hover:bg-[#D8E267]/10"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 glass rounded-md border border-[#035A52]/20 shadow-md dark:border-[#D8E267]/20 p-2 animate-fade-in">
          <div className="flex flex-col gap-1">
            <MobileNavItem href="/map" icon={<Map className="h-4 w-4" />} label="Explore" />
            <MobileNavItem href="/profile" icon={<User className="h-4 w-4" />} label="Profile" />
            <MobileNavItem href="/settings" icon={<Settings className="h-4 w-4" />} label="Settings" />
          </div>
        </div>
      )}
    </nav>
  )
}

function NavItem({
  href,
  icon,
  label,
  active = false,
}: { href: string; icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium transition-all",
        active
          ? "bg-[#035A52]/10 text-[#035A52] dark:bg-[#D8E267]/10 dark:text-[#D8E267]"
          : "text-[#035A52]/80 hover:bg-[#035A52]/5 hover:text-[#035A52] dark:text-[#D8E267]/80 dark:hover:bg-[#D8E267]/10 dark:hover:text-[#D8E267]",
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  )
}

function MobileNavItem({
  href,
  icon,
  label,
  active = false,
}: { href: string; icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-all",
        active
          ? "bg-[#035A52]/10 text-[#035A52] dark:bg-[#D8E267]/10 dark:text-[#D8E267]"
          : "text-[#035A52]/80 hover:bg-[#035A52]/5 hover:text-[#035A52] dark:text-[#D8E267]/80 dark:hover:bg-[#D8E267]/10 dark:hover:text-[#D8E267]",
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  )
}
