"use client"

import { useState } from "react"
import { Button } from "@/components/ui/atomic/button"
import { Card, CardContent } from "@/components/ui/composed/card"
import { Phone, Mail, MapPin } from "lucide-react"
import { useTranslations } from "next-intl"
import { sendContactMessage, ContactForm } from "@/domains/contact/services/contactService"

export default function ContactPage() {
    // Usando try/catch para aumentar a robustez do componente
    let t, commonT, contactT;
    try {
        t = useTranslations('home');
        commonT = useTranslations('common');
        contactT = useTranslations('contact');
    } catch (e) {
        // Fallback para traduções caso o contexto não esteja disponível
        t = (key: string) => key;
        commonT = (key: string) => key;
        contactT = (key: string) => key;
    }

    // Contact form state
    const [contact, setContact] = useState<ContactForm>({ name: "", email: "", message: "" });
    const [contactStatus, setContactStatus] = useState<string | null>(null);
    const [contactLoading, setContactLoading] = useState(false);

    // Contact handler
    const handleContact = async (e: React.FormEvent) => {
        e.preventDefault();
        setContactStatus(null);
        if (!contact.name || !contact.email || !contact.message) {
            setContactStatus(t('contactFormIncomplete'));
            return;
        }
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(contact.email)) {
            setContactStatus(t('emailInvalid'));
            return;
        }

        setContactLoading(true);
        const result = await sendContactMessage(contact);
        setContactStatus(result.success ? t('contactFormSuccess') : t('contactFormError'));

        if (result.success) {
            setContact({ name: "", email: "", message: "" });
        }
        setContactLoading(false);
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full h-[300px] bg-gradient-to-r from-emerald-800 to-emerald-600 flex items-center justify-center text-white">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <div className="container mx-auto px-4 z-20 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{contactT('heroTitle')}</h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto">
                        {contactT('heroSubtitle')}
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Formulário de contato */}
                        <Card className="shadow-lg">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold mb-6">{contactT('formTitle')}</h2>
                                <form onSubmit={handleContact} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                            {commonT('name')} <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            value={contact.name}
                                            onChange={(e) => setContact({ ...contact, name: e.target.value })}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            {commonT('email')} <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            value={contact.email}
                                            onChange={(e) => setContact({ ...contact, email: e.target.value })}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                            {commonT('message')} <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={6}
                                            value={contact.message}
                                            onChange={(e) => setContact({ ...contact, message: e.target.value })}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                            required
                                        />
                                    </div>
                                    {contactStatus && (
                                        <div className={`text-sm ${contactStatus === t('contactFormSuccess') ? 'text-green-600' : 'text-red-600'}`}>
                                            {contactStatus}
                                        </div>
                                    )}
                                    <Button
                                        type="submit"
                                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                                        disabled={contactLoading}
                                    >
                                        {commonT('submit')}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Informações de contato */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold mb-6">{contactT('contactInfoTitle')}</h2>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <Phone className="h-5 w-5 text-emerald-600 mr-3" />
                                        <p className="text-gray-700">{t('contact.phone')}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <Mail className="h-5 w-5 text-emerald-600 mr-3" />
                                        <p className="text-gray-700">{t('contact.email')}</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold mb-6">{contactT('addressTitle')}</h2>
                                <div className="flex items-start">
                                    <MapPin className="h-5 w-5 text-emerald-600 mt-1 mr-3" />
                                    <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: t('contact.address') }} />
                                </div>
                            </div>

                            <Card>
                                <CardContent className="p-0">
                                    <div className="w-full h-[300px] bg-gray-300 flex items-center justify-center">
                                        <p className="text-gray-600">{contactT('mapPlaceholder')}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-8 bg-emerald-50">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-lg text-emerald-800">
                        {contactT('ctaMessage')}
                    </p>
                </div>
            </section>
        </div>
    );
}