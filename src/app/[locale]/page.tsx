"use client"
import React, { useRef, useState, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/atomic/button"
import { Card, CardContent } from "@/components/ui/composed/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Users, BookOpen, HeartHandshake, ArrowRight, Phone, Mail, MapPin } from "lucide-react"
import { useTranslations } from "next-intl"
import { subscribeToNewsletter } from "@/domains/newsletter/services/newsletterService"
import { sendContactMessage, ContactForm } from "@/domains/contact/services/contactService"

export default function Home() {
    // Usando try/catch para aumentar a robustez do componente
    let t, commonT;
    try {
        t = useTranslations('home');
        commonT = useTranslations('common');
    } catch (e) {
        // Fallback para traduções caso o contexto não esteja disponível
        t = (key: string) => key;
        commonT = (key: string) => key;
    }

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
            {/* Hero Section - Área verde escura com o título ONGEP e subtítulo */}
            <section className="relative w-full h-[500px] bg-emerald-900 flex items-center justify-center text-white">
                <div className="container mx-auto px-4 z-20 text-center">
                    <h1 className="text-4xl md:text-7xl font-bold mb-6">{t('heroTitle')}</h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                        {t('heroSubtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-emerald-900 hover:bg-gray-100">
                            {t('seeProjectsButton')}
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                            {t('howToHelpButton')}
                        </Button>
                    </div>
                </div>
            </section>

            {/* Nossa Missão Section */}
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
                        <div className="bg-black text-center p-8 rounded-md">
                            <div className="rounded-full bg-emerald-100 w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                                <BookOpen className="h-8 w-8 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">{t('educationTitle')}</h3>
                            <p className="text-gray-300">
                                {t('educationDescription')}
                            </p>
                        </div>

                        <div className="bg-black text-center p-8 rounded-md">
                            <div className="rounded-full bg-emerald-100 w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                                <Users className="h-8 w-8 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">{t('communityTitle')}</h3>
                            <p className="text-gray-300">
                                {t('communityDescription')}
                            </p>
                        </div>

                        <div className="bg-black text-center p-8 rounded-md">
                            <div className="rounded-full bg-emerald-100 w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                                <HeartHandshake className="h-8 w-8 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">{t('solidarityTitle')}</h3>
                            <p className="text-gray-300">
                                {t('solidarityDescription')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nossos Projetos Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('projectsTitle')}</h2>
                        <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            {t('projectsDescription')}
                        </p>
                    </div>

                    {/* Tabs de categorias de projetos */}
                    <Tabs defaultValue="educacao" className="mb-8">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="educacao" className="data-[state=active]:bg-emerald-900 data-[state=active]:text-white">
                                {t('projects.categories.0')}
                            </TabsTrigger>
                            <TabsTrigger value="cultura" className="data-[state=active]:bg-emerald-900 data-[state=active]:text-white">
                                {t('projects.categories.1')}
                            </TabsTrigger>
                            <TabsTrigger value="meioambiente" className="data-[state=active]:bg-emerald-900 data-[state=active]:text-white">
                                {t('projects.categories.2')}
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="educacao" className="mt-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <ProjectCard
                                    title={t('projects.education.project1.title')}
                                    description={t('projects.education.project1.description')}
                                    image="/placeholder.jpg"
                                />
                                <ProjectCard
                                    title={t('projects.education.project2.title')}
                                    description={t('projects.education.project2.description')}
                                    image="/placeholder.jpg"
                                />
                            </div>
                        </TabsContent>

                        <TabsContent value="cultura" className="mt-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <ProjectCard
                                    title={t('projects.culture.project1.title')}
                                    description={t('projects.culture.project1.description')}
                                    image="/placeholder.jpg"
                                />
                                <ProjectCard
                                    title={t('projects.culture.project2.title')}
                                    description={t('projects.culture.project2.description')}
                                    image="/placeholder.jpg"
                                />
                            </div>
                        </TabsContent>

                        <TabsContent value="meioambiente" className="mt-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <ProjectCard
                                    title={t('projects.environment.project1.title')}
                                    description={t('projects.environment.project1.description')}
                                    image="/placeholder.jpg"
                                />
                                <ProjectCard
                                    title={t('projects.environment.project2.title')}
                                    description={t('projects.environment.project2.description')}
                                    image="/placeholder.jpg"
                                />
                            </div>
                        </TabsContent>
                    </Tabs>

                    <div className="text-center mt-10">
                        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                            <Link href="/projects" className="flex items-center">
                                {commonT('seeAll')} <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Próximos Eventos Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('eventsTitle')}</h2>
                        <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <EventCard
                            title={t('events.event1.title')}
                            date={t('events.event1.date')}
                            location={t('events.event1.location')}
                        />
                        <EventCard
                            title={t('events.event2.title')}
                            date={t('events.event2.date')}
                            location={t('events.event2.location')}
                        />
                        <EventCard
                            title={t('events.event3.title')}
                            date={t('events.event3.date')}
                            location={t('events.event3.location')}
                        />
                    </div>

                    <div className="text-center mt-10">
                        <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                            <Link href="/eventos" className="flex items-center">
                                {t('events.seeAllButton')} <Calendar className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Entre em Contato Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('contactTitle')}</h2>
                        <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            {t('contactDescription')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Informações de contato */}
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <div className="flex items-center mb-6">
                                <Phone className="h-5 w-5 text-emerald-600 mr-3" />
                                <p className="text-gray-600">{t('contact.phone')}</p>
                            </div>
                            <div className="flex items-center mb-6">
                                <Mail className="h-5 w-5 text-emerald-600 mr-3" />
                                <p className="text-gray-600">{t('contact.email')}</p>
                            </div>
                            <div className="flex items-start">
                                <MapPin className="h-5 w-5 text-emerald-600 mt-1 mr-3" />
                                <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: t('contact.address') }} />
                            </div>
                        </div>

                        {/* Formulário de contato */}
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <form onSubmit={handleContact} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        {t('contactFormName')} <span className="text-red-500">*</span>
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
                                        {t('contactFormEmail')} <span className="text-red-500">*</span>
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
                                        {t('contactFormMessage')} <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
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
                                    {t('contactFormSubmit')}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter - No footer, não precisamos incluir aqui pois está no footer */}
        </div>
    )
}

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
}

function ProjectCard({ title, description, image }: ProjectCardProps) {
    const commonT = useTranslations('common');

    return (
        <Card className="overflow-hidden bg-black text-white">
            <div className="aspect-video relative bg-gray-200 flex items-center justify-center">
                <Image
                    src={image || "/placeholder.svg"}
                    alt={title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>
            <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-400 mb-4">{description}</p>
                <Link href="#" className="text-emerald-400 hover:text-emerald-300 flex items-center text-sm">
                    {commonT('learnMore')} <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
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

    return (
        <div className="bg-black p-6 rounded-md">
            <div className="flex justify-start mb-4">
                <div className="rounded-full bg-emerald-100 w-12 h-12 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-emerald-600" />
                </div>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
            <div className="text-gray-400 text-sm mb-1">
                <span className="text-gray-300">{t('date')}:</span> {date}
            </div>
            <div className="text-gray-400 text-sm mb-6">
                <span className="text-gray-300">{t('location')}:</span> {location}
            </div>
            <Button variant="outline" size="sm" className="w-full border-emerald-400 text-emerald-400 hover:bg-emerald-900">
                {t('registerButton')}
            </Button>
        </div>
    )
}