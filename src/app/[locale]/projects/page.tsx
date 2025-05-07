"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/atomic/button"
import { Card, CardContent } from "@/components/ui/composed/card"
import { ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"

export default function ProjectsPage() {
    // Usando try/catch para aumentar a robustez do componente
    let t, commonT, projectsT;
    try {
        t = useTranslations('home');
        commonT = useTranslations('common');
        projectsT = useTranslations('projects');
    } catch (e) {
        // Fallback para traduções caso o contexto não esteja disponível
        t = (key: string) => key;
        commonT = (key: string) => key;
        projectsT = (key: string) => key;
    }

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full h-[300px] bg-gradient-to-r from-emerald-800 to-emerald-600 flex items-center justify-center text-white">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <div className="container mx-auto px-4 z-20 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{projectsT('heroTitle')}</h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto">
                        {projectsT('heroSubtitle')}
                    </p>
                </div>
            </section>

            {/* Projects Categories */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button className="bg-emerald-600 hover:bg-emerald-700">{projectsT('allProjects')}</Button>
                        {projectsT('categories').map((category: string, index: number) => (
                            <Button
                                key={index}
                                variant="outline"
                                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects List */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{projectsT('impactTitle')}</h2>
                        <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            {projectsT('impactDescription')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {impactData.map((item, index) => (
                            <ImpactCard
                                key={index}
                                number={projectsT(`impact.${index}.number`)}
                                text={projectsT(`impact.${index}.text`)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-emerald-700 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">{projectsT('ctaTitle')}</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        {projectsT('ctaDescription')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100">
                            {projectsT('donateButton')}
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                            {projectsT('partnerButton')}
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}

interface Project {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
}

function ProjectCard({ project }: { project: Project }) {
    const projectsT = useTranslations('projects');

    return (
        <Card className="overflow-hidden h-full flex flex-col">
            <div className="relative h-48">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                <div className="absolute top-3 right-3 bg-emerald-600 text-white text-xs font-bold px-2 py-1 rounded">
                    {project.category}
                </div>
            </div>
            <CardContent className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                <Link href={`/projects/${project.id}`}>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                        {projectsT('viewDetails')} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
            </CardContent>
        </Card>
    )
}

function ImpactCard({ number, text }: { number: string; text: string }) {
    return (
        <Card className="border-none shadow-lg text-center">
            <CardContent className="p-6">
                <div className="text-4xl font-bold text-emerald-600 mb-2">{number}</div>
                <p className="text-gray-700">{text}</p>
            </CardContent>
        </Card>
    )
}

const projects = [
    {
        id: 1,
        title: "Educação para Todos",
        description: "Aulas de reforço escolar para crianças e adolescentes em comunidades carentes.",
        category: "Educação",
        image: "/placeholder.svg?height=200&width=400",
    },
    {
        id: 2,
        title: "Inclusão Digital",
        description: "Cursos de informática básica e avançada para jovens e adultos.",
        category: "Educação",
        image: "/placeholder.svg?height=200&width=400",
    },
    {
        id: 3,
        title: "Arte nas Escolas",
        description: "Oficinas de arte, música e teatro em escolas públicas.",
        category: "Cultura",
        image: "/placeholder.svg?height=200&width=400",
    },
    {
        id: 4,
        title: "Cultura Popular",
        description: "Preservação e divulgação da cultura local através de eventos e oficinas.",
        category: "Cultura",
        image: "/placeholder.svg?height=200&width=400",
    },
    {
        id: 5,
        title: "Hortas Comunitárias",
        description: "Criação e manutenção de hortas em escolas e espaços comunitários.",
        category: "Meio Ambiente",
        image: "/placeholder.svg?height=200&width=400",
    },
    {
        id: 6,
        title: "Reciclagem Consciente",
        description: "Educação ambiental e coleta seletiva em comunidades.",
        category: "Meio Ambiente",
        image: "/placeholder.svg?height=200&width=400",
    },
]

const impactData = [
    { number: "5.000+", text: "Pessoas beneficiadas" },
    { number: "20+", text: "Projetos realizados" },
    { number: "15", text: "Comunidades atendidas" },
    { number: "10+", text: "Anos de atuação" }
]