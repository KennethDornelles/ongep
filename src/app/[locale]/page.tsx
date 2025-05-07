"use client"
import React, { useRef, useState, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/atomic/button"
import { Card, CardContent } from "@/components/ui/composed/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, Users, BookOpen, HeartHandshake, ArrowRight, Phone, Mail, MapPin } from "lucide-react"
import { useTranslations } from "next-intl"
import { subscribeToNewsletter } from "@/domains/newsletter/services/newsletterService"
import { sendContactMessage, ContactForm } from "@/domains/contact/services/contactService"

export default function Home() {
    const t = useTranslations('home');
    const commonT = useTranslations('common');

    // Newsletter state
    const [newsletterEmail, setNewsletterEmail] = useState("");
    const [newsletterStatus, setNewsletterStatus] = useState<string | null>(null);
    const newsletterInputRef = useRef<HTMLInputElement>(null);

    // Contact form state
    const [contact, setContact] = useState<ContactForm>({ name: "", email: "", message: "" });
    const [contactStatus, setContactStatus] = useState<string | null>(null);
    const [contactLoading, setContactLoading] = useState(false);

    // Newsletter handler
    const handleNewsletter = useCallback(async (e: React.FormEvent) => {
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
    }, [newsletterEmail, t]);

    // Contact handler
    const handleContact = useCallback(async (e: React.FormEvent) => {
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
    }, [contact, t]);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full h-[500px] bg-gradient-to-r from-emerald-800 to-emerald-600 flex items-center justify-center text-white">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <div className="container mx-auto px-4 z-20 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('heroTitle')}</h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                        {t('heroSubtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-emerald-800 hover:bg-gray-100">
                            {t('seeProjectsButton')}
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                            {t('howToHelpButton')}
                        </Button>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('missionTitle')}</h2>
                        <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            {t('missionDescription')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                            <CardContent className="pt-6">
                                <div className="rounded-full bg-emerald-100 w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                                    <BookOpen className="h-8 w-8 text-emerald-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-center mb-2">{t('educationTitle')}</h3>
                                <p className="text-gray-600 text-center">
                                    {t('educationDescription')}
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                            <CardContent className="pt-6">
                                <div className="rounded-full bg-emerald-100 w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                                    <Users className="h-8 w-8 text-emerald-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-center mb-2">{t('communityTitle')}</h3>
                                <p className="text-gray-600 text-center">
                                    {t('communityDescription')}
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                            <CardContent className="pt-6">
                                <div className="rounded-full bg-emerald-100 w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                                    <HeartHandshake className="h-8 w-8 text-emerald-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-center mb-2">{t('solidarityTitle')}</h3>
                                <p className="text-gray-600 text-center">
                                    {t('solidarityDescription')}
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Projects and Events sections would continue here */}
            {/* ... */}
        </div>
    )
}

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
}

function ProjectCard({ title, description, image }: ProjectCardProps) {
    const t = useTranslations('common');

    return (
        <Card className="overflow-hidden">
            <Image
                src={image || "/placeholder.svg"}
                alt={title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
                loading="lazy"
            />
            <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <Button variant="link" className="p-0 text-emerald-600 hover:text-emerald-700">
                    {t('learnMore')} <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
            </CardContent>
        </Card>
    )
}

interface EventCardProps {
    title: string;
    date: string;
    location: string;
}

function EventCard({ title, date, location }: EventCardProps) {
    const t = useTranslations('home');
    const commonT = useTranslations('common');

    return (
        <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 mb-4">
                    <CalendarIcon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <div className="text-gray-600 text-sm mb-1">
                    <span className="font-medium">{t('date')}:</span> {date}
                </div>
                <div className="text-gray-600 text-sm mb-4">
                    <span className="font-medium">{t('location')}:</span> {location}
                </div>
                <Button variant="outline" size="sm" className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                    {t('registerButton')}
                </Button>
            </CardContent>
        </Card>
    )
}