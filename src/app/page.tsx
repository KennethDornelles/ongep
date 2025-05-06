"use client"
import React, { useRef, useState, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/atomic/button"
import { Card, CardContent } from "@/components/ui/composed/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, Users, BookOpen, HeartHandshake, ArrowRight, Phone, Mail, MapPin } from "lucide-react"

export default function Home() {
  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<string | null>(null);
  const newsletterInputRef = useRef<HTMLInputElement>(null);

  // Contact form state
  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [contactStatus, setContactStatus] = useState<string | null>(null);
  const [contactLoading, setContactLoading] = useState(false);

  // Newsletter handler
  const handleNewsletter = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterStatus(null);
    if (!newsletterEmail || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(newsletterEmail)) {
      setNewsletterStatus("Por favor, insira um e-mail válido.");
      newsletterInputRef.current?.focus();
      return;
    }
    try {
      const res = await fetch("/api/newsletter/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail })
      });
      if (res.ok) {
        setNewsletterStatus("Inscrição realizada com sucesso!");
        setNewsletterEmail("");
      } else {
        setNewsletterStatus("Erro ao inscrever. Tente novamente.");
      }
    } catch {
      setNewsletterStatus("Erro ao inscrever. Tente novamente.");
    }
  }, [newsletterEmail]);

  // Contact handler
  const handleContact = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setContactStatus(null);
    if (!contact.name || !contact.email || !contact.message) {
      setContactStatus("Preencha todos os campos.");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(contact.email)) {
      setContactStatus("E-mail inválido.");
      return;
    }
    setContactLoading(true);
    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact)
      });
      if (res.ok) {
        setContactStatus("Mensagem enviada com sucesso!");
        setContact({ name: "", email: "", message: "" });
      } else {
        setContactStatus("Erro ao enviar. Tente novamente.");
      }
    } catch {
      setContactStatus("Erro ao enviar. Tente novamente.");
    } finally {
      setContactLoading(false);
    }
  }, [contact]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] bg-gradient-to-r from-emerald-800 to-emerald-600 flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="container mx-auto px-4 z-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">ONGEP</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Organização Não Governamental para Educação e Projetos Sociais
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-800 hover:bg-gray-100">
              Conheça Nossos Projetos
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Como Ajudar
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa Missão</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Promover a educação, cultura e desenvolvimento social através de projetos que transformam vidas e
              comunidades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-emerald-100 w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <BookOpen className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Educação</h3>
                <p className="text-gray-600 text-center">
                  Promovemos acesso à educação de qualidade para crianças e jovens em situação de vulnerabilidade.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-emerald-100 w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <Users className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Comunidade</h3>
                <p className="text-gray-600 text-center">
                  Fortalecemos comunidades através de projetos sociais que promovem cidadania e inclusão.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-emerald-100 w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <HeartHandshake className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Solidariedade</h3>
                <p className="text-gray-600 text-center">
                  Incentivamos a cultura de voluntariado e doação para causas sociais importantes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Projetos</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Conheça as iniciativas que estão transformando vidas e comunidades
            </p>
          </div>

          <Tabs defaultValue="education" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="education">Educação</TabsTrigger>
              <TabsTrigger value="culture">Cultura</TabsTrigger>
              <TabsTrigger value="environment">Meio Ambiente</TabsTrigger>
            </TabsList>
            <TabsContent value="education">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProjectCard
                  title="Educação para Todos"
                  description="Aulas de reforço escolar para crianças e adolescentes em comunidades carentes."
                  image="/placeholder.svg?height=200&width=400"
                />
                <ProjectCard
                  title="Inclusão Digital"
                  description="Cursos de informática básica e avançada para jovens e adultos."
                  image="/placeholder.svg?height=200&width=400"
                />
              </div>
            </TabsContent>
            <TabsContent value="culture">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProjectCard
                  title="Arte nas Escolas"
                  description="Oficinas de arte, música e teatro em escolas públicas."
                  image="/placeholder.svg?height=200&width=400"
                />
                <ProjectCard
                  title="Cultura Popular"
                  description="Preservação e divulgação da cultura local através de eventos e oficinas."
                  image="/placeholder.svg?height=200&width=400"
                />
              </div>
            </TabsContent>
            <TabsContent value="environment">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProjectCard
                  title="Hortas Comunitárias"
                  description="Criação e manutenção de hortas em escolas e espaços comunitários."
                  image="/placeholder.svg?height=200&width=400"
                />
                <ProjectCard
                  title="Reciclagem Consciente"
                  description="Educação ambiental e coleta seletiva em comunidades."
                  image="/placeholder.svg?height=200&width=400"
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-12">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              Ver Todos os Projetos <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Próximos Eventos</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <EventCard title="Workshop de Educação Ambiental" date="15 de Maio, 2025" location="Centro Comunitário" />
            <EventCard title="Feira de Artesanato Solidário" date="22 de Junho, 2025" location="Praça Central" />
            <EventCard
              title="Seminário de Educação Inclusiva"
              date="10 de Julho, 2025"
              location="Auditório Municipal"
            />
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
              Ver Calendário Completo <CalendarIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Estamos à disposição para esclarecer dúvidas e receber sugestões
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-emerald-600 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Telefone</p>
                    <p className="text-gray-600">(00) 1234-5678</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-emerald-600 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">contato@ongep.org</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-emerald-600 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Endereço</p>
                    <p className="text-gray-600">Av. Principal, 123 - Centro</p>
                    <p className="text-gray-600">CEP: 00000-000</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Envie uma Mensagem</h3>
              <form className="space-y-4" role="form" aria-label="Formulário de contato" onSubmit={handleContact}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome <span aria-hidden="true" className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    aria-required="true"
                    aria-label="Nome"
                    value={contact.name}
                    onChange={e => setContact(c => ({ ...c, name: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span aria-hidden="true" className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    aria-required="true"
                    aria-label="Email"
                    value={contact.email}
                    onChange={e => setContact(c => ({ ...c, email: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem <span aria-hidden="true" className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    aria-required="true"
                    aria-label="Mensagem"
                    rows={4}
                    value={contact.message}
                    onChange={e => setContact(c => ({ ...c, message: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  ></textarea>
                </div>
                <div aria-live="polite" className="min-h-[24px] text-sm">
                  {contactStatus && (
                    <span className={contactStatus.includes("sucesso") ? "text-emerald-600" : "text-red-600"}>{contactStatus}</span>
                  )}
                </div>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700" type="submit" aria-disabled={contactLoading} disabled={contactLoading}>
                  {contactLoading ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ONGEP</h3>
              <p className="text-gray-400">Organização Não Governamental para Educação e Projetos Sociais</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Projetos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Eventos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Doações
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="text-gray-400">(00) 1234-5678</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span className="text-gray-400">contato@ongep.org</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-gray-400">Av. Principal, 123 - Centro</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Receba novidades sobre nossos projetos e eventos</p>
              <form className="flex w-full items-stretch" role="form" aria-label="Formulário de newsletter" onSubmit={handleNewsletter}>
                <input
                  type="email"
                  ref={newsletterInputRef}
                  placeholder="Seu email"
                  aria-label="Seu email"
                  required
                  aria-required="true"
                  value={newsletterEmail}
                  onChange={e => setNewsletterEmail(e.target.value)}
                  className="px-3 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none flex-1 min-w-0"
                />
                <Button className="rounded-l-none bg-emerald-600 hover:bg-emerald-700 min-w-[100px]" type="submit">
                  Assinar
                </Button>
              </form>
              <div aria-live="polite" className="min-h-[24px] text-sm mt-2">
                {newsletterStatus && (
                  <span className={newsletterStatus.includes("sucesso") ? "text-emerald-400" : "text-red-400"}>{newsletterStatus}</span>
                )}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} ONGEP. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

function ProjectCard({ title, description, image }: ProjectCardProps) {
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
          Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
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
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 mb-4">
          <CalendarIcon className="h-6 w-6 text-emerald-600" />
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="text-gray-600 text-sm mb-1">
          <span className="font-medium">Data:</span> {date}
        </div>
        <div className="text-gray-600 text-sm mb-4">
          <span className="font-medium">Local:</span> {location}
        </div>
        <Button variant="outline" size="sm" className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50">
          Inscrever-se
        </Button>
      </CardContent>
    </Card>
  )
}
