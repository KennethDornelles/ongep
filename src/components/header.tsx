"use client"

import { useState } from "react"
import Link from "next/link"
import { ReactNode } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[#b3b3b3] py-10 flex flex-col items-center relative">
      <div className="flex flex-col items-center w-full relative">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-2 drop-shadow-lg">
          ONGEP - Organização Não-Governamental para a Educação Popular
        </h1>
        <span className="text-white text-lg font-medium mb-8"></span>
        {/* Botão hamburguer com texto sempre visível na tela */}
        <button
          className="md:hidden absolute left-4 top-[100%] mt-4 z-40 flex items-center gap-2 p-2 rounded-full bg-[#b3b3b3]/90 shadow-lg focus:outline-none focus:ring-2 focus:ring-white transition-all"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          {isMenuOpen ? <X className="h-7 w-7 text-white" /> : <Menu className="h-7 w-7 text-white" />}
          <span className="text-white text-base font-medium select-none block">
            {isMenuOpen ? 'Fechar' : 'Menu'}
          </span>
        </button>
        {/* Menu de navegação */}
        <nav
          className={
            `md:flex flex-row gap-8 justify-center items-center bg-transparent ${isMenuOpen
              ? 'flex flex-col absolute left-0 top-[100%] mt-6 w-full bg-neutral-900 bg-opacity-95 py-8 px-6 shadow-2xl z-50'
              : 'hidden'
            } md:static md:bg-transparent md:py-0 md:px-0 md:shadow-none`
          }
        >
          <NavLink href="/" activeClassName="border-b-2 border-white text-white font-bold">INÍCIO</NavLink>
          <NavLink href="/horarios" activeClassName="border-b-2 border-white text-white font-bold">HORÁRIOS</NavLink>
          <NavLink href="/aprovados" activeClassName="border-b-2 border-white text-white font-bold">APROVADOS DA ONGEP</NavLink>
          <NavLink href="/como-ajudar" activeClassName="border-b-2 border-white text-white font-bold">COMO AJUDAR</NavLink>
        </nav>
      </div>
    </header>
  )
}

function NavLink({ href, children, activeClassName }: { href: string; children: ReactNode; activeClassName: string }) {
  const pathname = usePathname()
  const isActive = pathname === href
  return (
    <Link href={href} className={`text-white text-lg px-4 py-2 transition-colors ${isActive ? activeClassName : 'opacity-80 hover:opacity-100'}`}>
      {children}
    </Link>
  )
}
