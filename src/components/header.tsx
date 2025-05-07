"use client"

import { useState } from "react"
import Link from "next/link"
import { ReactNode } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useTranslations } from "next-intl"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = useTranslations('header');
  const commonT = useTranslations('common');

  // Fecha o menu ao clicar em qualquer link do menu mobile
  function handleNavClick() {
    setIsMenuOpen(false);
  }

  return (
    <header className="bg-[#b3b3b3] py-10 flex flex-col items-center relative">
      <div className="flex flex-col items-center w-full relative">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-2 drop-shadow-lg">
          ONGEP - Organização Não-Governamental para a Educação Popular
        </h1>
        <span className="text-white text-lg font-medium mb-8"></span>
        {/* Overlay para bloquear interação e escurecer fundo quando menu está aberto */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 bg-black bg-opacity-70 md:hidden" aria-hidden="true"></div>
        )}
        {/* Botão hamburguer posicionado abaixo do header, à esquerda, apenas em mobile */}
        <div className="w-full flex md:hidden">
          <button
            className="ml-4 mt-4 z-50 flex items-center gap-2 p-2 rounded-full bg-[#b3b3b3]/90 shadow-lg focus:outline-none focus:ring-2 focus:ring-white transition-all"
            aria-label={isMenuOpen ? commonT('close') : commonT('menu')}
            onClick={() => setIsMenuOpen((v) => !v)}
            type="button"
          >
            {isMenuOpen ? <X className="h-7 w-7 text-white" /> : <Menu className="h-7 w-7 text-white" />}
            <span className="text-white text-base font-medium select-none block">
              {isMenuOpen ? commonT('close') : commonT('menu')}
            </span>
          </button>
        </div>
        {/* Menu de navegação */}
        <nav
          className={
            `md:flex flex-row gap-8 justify-center items-center bg-transparent ${isMenuOpen
              ? 'flex flex-col fixed left-0 top-[100px] w-full bg-neutral-900 bg-opacity-100 py-8 px-6 shadow-2xl z-50'
              : 'hidden'
            } md:static md:bg-transparent md:py-0 md:px-0 md:shadow-none`
          }
        >
          <NavLink href="/" activeClassName="border-b-2 border-white text-white font-bold" onClick={handleNavClick}>{t('home')}</NavLink>
          <NavLink href="/eventos" activeClassName="border-b-2 border-white text-white font-bold" onClick={handleNavClick}>{t('events')}</NavLink>
          <NavLink href="/projects" activeClassName="border-b-2 border-white text-white font-bold" onClick={handleNavClick}>{t('projects')}</NavLink>
          <NavLink href="/blog" activeClassName="border-b-2 border-white text-white font-bold" onClick={handleNavClick}>{t('blog')}</NavLink>
          <NavLink href="/sobre" activeClassName="border-b-2 border-white text-white font-bold" onClick={handleNavClick}>{t('about')}</NavLink>
          <NavLink href="/contact" activeClassName="border-b-2 border-white text-white font-bold" onClick={handleNavClick}>{t('contact')}</NavLink>
        </nav>
      </div>
    </header>
  )
}

function NavLink({ href, children, activeClassName, onClick }: { href: string; children: ReactNode; activeClassName: string; onClick?: () => void }) {
  const pathname = usePathname()
  const isActive = pathname === href
  return (
    <Link href={href} className={`text-white text-lg px-4 py-2 transition-colors ${isActive ? activeClassName : 'opacity-80 hover:opacity-100'}`} onClick={onClick}>
      {children}
    </Link>
  )
}
