"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-emerald-700">
              ONGEP
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink href="/">Início</NavLink>
            <NavLink href="/sobre">Sobre Nós</NavLink>
            <NavLink href="/projetos">Projetos</NavLink>
            <NavLink href="/eventos">Eventos</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/contato">Contato</NavLink>
          </nav>

          <div className="hidden md:flex">
            <Button className="bg-emerald-600 hover:bg-emerald-700">Doe Agora</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-emerald-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>
              Início
            </MobileNavLink>
            <MobileNavLink href="/sobre" onClick={() => setIsMenuOpen(false)}>
              Sobre Nós
            </MobileNavLink>
            <MobileNavLink href="/projetos" onClick={() => setIsMenuOpen(false)}>
              Projetos
            </MobileNavLink>
            <MobileNavLink href="/eventos" onClick={() => setIsMenuOpen(false)}>
              Eventos
            </MobileNavLink>
            <MobileNavLink href="/blog" onClick={() => setIsMenuOpen(false)}>
              Blog
            </MobileNavLink>
            <MobileNavLink href="/contato" onClick={() => setIsMenuOpen(false)}>
              Contato
            </MobileNavLink>
            <div className="pt-2">
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Doe Agora</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, children }) {
  return (
    <Link href={href} className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
      {children}
    </Link>
  )
}

function MobileNavLink({ href, onClick, children }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-md"
    >
      {children}
    </Link>
  )
}
