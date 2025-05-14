"use client"

import Image from "next/image"
import { Button } from "@/components/ui/atomic/button"
import { Card, CardContent } from "@/components/ui/composed/card"
import { Users, Award, Target, Clock } from "lucide-react"
import { useTranslations } from "next-intl"

export default function SobrePage() {
    // Usando try/catch para aumentar a robustez do componente
    let t, commonT, sobreT;
    try {
        t = useTranslations('home');
        commonT = useTranslations('common');
        sobreT = useTranslations('sobre');
    } catch (e) {
        // Fallback para traduções caso o contexto não esteja disponível
        t = (key: string) => key;
        commonT = (key: string) => key;
        sobreT = (key: string) => key;
    }

    return (
        <div className="flex flex-col min-h-screen">            {/* Hero Section */}
            <section className="relative w-full h-[300px] bg-[#e90c26] flex items-center justify-center text-white overflow-hidden">                {/* Logo como marca d'água */}                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">                    <img src="/ongep_logo.png"
                className="w-full h-auto min-w-[800px]"
                style={{
                    pointerEvents: 'none',
                    opacity: 0.2,
                    mixBlendMode: 'soft-light',
                    filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))'
                }}
                aria-hidden="true"
                alt=""
            />
            </div>
                <div className="container mx-auto px-4 z-20 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{sobreT('heroTitle')}</h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto">{sobreT('heroSubtitle')}</p>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>                            <h2 className="text-3xl font-bold text-gray-900 mb-6">{sobreT('historyTitle')}</h2>
                            <div className="w-20 h-1 bg-[#e90c26] mb-6"></div>
                            <p className="text-gray-700 mb-4">{sobreT('historyParagraph1')}</p>
                            <p className="text-gray-700 mb-4">{sobreT('historyParagraph2')}</p>
                            <p className="text-gray-700">{sobreT('historyParagraph3')}</p>
                        </div>
                        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src="/placeholder.svg?height=400&width=600"
                                alt={sobreT('historyImageAlt')}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{sobreT('valuesTitle')}</h2>
                        <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">{sobreT('valuesSubtitle')}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <ValueCard
                                key={index}
                                icon={valueIcons[index]}
                                title={sobreT(`values.${index}.title`)}
                                description={sobreT(`values.${index}.description`)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{sobreT('teamTitle')}</h2>
                        <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">{sobreT('teamSubtitle')}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <TeamMember
                                key={index}
                                name={sobreT(`team.${index}.name`)}
                                role={sobreT(`team.${index}.role`)}
                                bio={sobreT(`team.${index}.bio`)}
                                image="/placeholder.svg?height=300&width=300"
                            />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button className="bg-emerald-600 hover:bg-emerald-700">{sobreT('viewAllTeam')}</Button>
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{sobreT('partnersTitle')}</h2>
                        <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">{sobreT('partnersSubtitle')}</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className="bg-white p-6 rounded-lg shadow-md w-full max-w-[200px] h-[100px] flex items-center justify-center"
                            >
                                <Image
                                    src={`/placeholder.svg?height=80&width=160`}
                                    alt={`${sobreT('partner')} ${i}`}
                                    width={160}
                                    height={80}
                                    className="max-h-full max-w-full"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-emerald-700 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">{sobreT('ctaTitle')}</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">{sobreT('ctaDescription')}</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100">
                            {sobreT('volunteerButton')}
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                            {sobreT('donateButton')}
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}

interface ValueCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

function ValueCard({ icon, title, description }: ValueCardProps) {
    return (
        <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6 text-center">
                <div className="mb-4 flex justify-center">{icon}</div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </CardContent>
        </Card>
    )
}

interface TeamMemberProps {
    name: string;
    role: string;
    bio: string;
    image: string;
}

function TeamMember({ name, role, bio, image }: TeamMemberProps) {
    return (
        <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
            </div>
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-emerald-600 mb-2">{role}</p>
            <p className="text-gray-600">{bio}</p>
        </div>
    )
}

// Dados para ícones de valores
const valueIcons = [
    <Users key="users" className="h-10 w-10 text-emerald-600" />,
    <Award key="award" className="h-10 w-10 text-emerald-600" />,
    <Target key="target" className="h-10 w-10 text-emerald-600" />,
    <Clock key="clock" className="h-10 w-10 text-emerald-600" />
];

// Dados mock para valores
const values = [
    { title: "Inclusão", description: "Acreditamos que todos merecem oportunidades iguais." },
    { title: "Excelência", description: "Buscamos a qualidade em tudo o que fazemos." },
    { title: "Inovação", description: "Estamos sempre em busca de novas ideias e abordagens." },
    { title: "Sustentabilidade", description: "Trabalhamos para criar soluções duradouras." }
];

// Dados mock para equipe
const team = [
    { name: "Maria Silva", role: "Diretora Executiva", bio: "Educadora com mais de 15 anos de experiência." },
    { name: "João Santos", role: "Coordenador de Projetos", bio: "Especialista em gestão de projetos sociais." },
    { name: "Ana Oliveira", role: "Coordenadora Pedagógica", bio: "Pedagoga com foco em metodologias inovadoras." }
];