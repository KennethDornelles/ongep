"use client"

import { Mail } from "lucide-react"
import Link from "next/link"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/atomic/button"
import { useTranslations } from "next-intl"
import { subscribeToNewsletter } from "@/domains/newsletter/services/newsletterService"

export default function Footer() {
    // Usando try/catch para aumentar a robustez do componente
    let t, commonT, footerT;
    try {
        t = useTranslations('home');
        commonT = useTranslations('common');
        footerT = useTranslations('footer');
    } catch (e) {
        // Fallback para traduções caso o contexto não esteja disponível
        t = (key: string) => key;
        commonT = (key: string) => key;
        footerT = (key: string) => key;
    }

    // Newsletter state
    const [newsletterEmail, setNewsletterEmail] = useState("");
    const [newsletterStatus, setNewsletterStatus] = useState<string | null>(null);
    const newsletterInputRef = useRef<HTMLInputElement>(null);

    // Newsletter handler
    const handleNewsletter = async (e: React.FormEvent) => {
        e.preventDefault();
        setNewsletterStatus(null);

        if (!newsletterEmail || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(newsletterEmail)) {
            setNewsletterStatus(t('emailInvalid'));
            newsletterInputRef.current?.focus();
            return;
        }

        const result = await subscribeToNewsletter(newsletterEmail);
        setNewsletterStatus(result.success ? t('newsletterSuccess') : t('newsletterError'));

        if (result.success) {
            setNewsletterEmail("");
        }
    };

    return (
        <footer className="bg-black text-white pt-12 pb-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Sobre */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">{footerT('aboutTitle')}</h3>
                        <p className="text-gray-400 mb-4">
                            {footerT('aboutDescription')}
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-white hover:text-emerald-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="w-5 h-5">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>
                            <a href="#" className="text-white hover:text-emerald-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="w-5 h-5">
                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                </svg>
                            </a>
                            <a href="#" className="text-white hover:text-emerald-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="w-5 h-5">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                                </svg>
                            </a>
                            <a href="#" className="text-white hover:text-emerald-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="w-5 h-5">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect width="4" height="12" x="2" y="9"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Links Rápidos */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">{footerT('quickLinksTitle')}</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-emerald-400">
                                    {footerT('home')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/sobre" className="text-gray-400 hover:text-emerald-400">
                                    {footerT('about')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="text-gray-400 hover:text-emerald-400">
                                    {footerT('projects')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/eventos" className="text-gray-400 hover:text-emerald-400">
                                    {footerT('events')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-gray-400 hover:text-emerald-400">
                                    {footerT('blog')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-emerald-400">
                                    {footerT('contact')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contato */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">{footerT('contactTitle')}</h3>
                        <address className="not-italic text-gray-400 space-y-3">
                            <p>{footerT('address')}</p>
                            <p>{footerT('zipCode')}</p>
                            <p>{footerT('phone')}</p>
                            <p className="flex items-center">
                                <Mail className="w-4 h-4 mr-2" /> {footerT('email')}
                            </p>
                        </address>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">{footerT('newsletterTitle')}</h3>
                        <p className="text-gray-400 mb-4">
                            {footerT('newsletterDescription')}
                        </p>
                        <form onSubmit={handleNewsletter} className="space-y-4">
                            <div>
                                <input
                                    ref={newsletterInputRef}
                                    type="email"
                                    value={newsletterEmail}
                                    onChange={(e) => setNewsletterEmail(e.target.value)}
                                    placeholder={t('newsletterPlaceholder')}
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    required
                                />
                            </div>
                            {newsletterStatus && (
                                <div className={`text-sm ${newsletterStatus === t('newsletterSuccess') ? 'text-green-400' : 'text-red-400'}`}>
                                    {newsletterStatus}
                                </div>
                            )}
                            <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                                {t('newsletterSubmit')}
                            </Button>
                        </form>
                    </div>
                </div>

                {/* Linha divisória */}
                <div className="border-t border-gray-800 pt-6">
                    <p className="text-center text-gray-500 text-sm">
                        © {new Date().getFullYear()} {footerT('copyright')}
                    </p>
                </div>
            </div>
        </footer>
    )
}