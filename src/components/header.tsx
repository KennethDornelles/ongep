"use client"

import { useState } from "react"
import Link from "next/link"
import { ReactNode } from "react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[#b3b3b3] py-10 flex flex-col items-center relative">
      <div className="flex flex-col items-center w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-2 drop-shadow-lg">
          ONGEP - Organização Não-Governamental para a Educação Popular
        </h1>
        <span className="text-white text-lg font-medium mb-8">Páginas</span>
        <nav className="flex flex-row gap-8 justify-center items-center bg-transparent">
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
