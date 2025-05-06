import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Target, Clock } from "lucide-react"

export default function SobrePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] bg-gradient-to-r from-emerald-800 to-emerald-600 flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="container mx-auto px-4 z-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nós</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">Conheça nossa história, missão e valores</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa História</h2>
              <div className="w-20 h-1 bg-emerald-600 mb-6"></div>
              <p className="text-gray-700 mb-4">
                A ONGEP foi fundada em 2010 por um grupo de educadores e assistentes sociais preocupados com a falta de
                oportunidades educacionais em comunidades carentes. O que começou como um pequeno projeto de reforço
                escolar em uma única comunidade, cresceu e se transformou em uma organização com múltiplos projetos e
                iniciativas.
              </p>
              <p className="text-gray-700 mb-4">
                Ao longo dos anos, expandimos nossa atuação para incluir não apenas educação formal, mas também projetos
                culturais, ambientais e de desenvolvimento comunitário. Nossa abordagem sempre foi baseada na
                participação ativa da comunidade e no respeito às particularidades locais.
              </p>
              <p className="text-gray-700">
                Hoje, a ONGEP é reconhecida por seu trabalho de excelência e pelo impacto positivo que gera nas
                comunidades onde atua, tendo beneficiado mais de 5.000 pessoas diretamente através de seus programas.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="História da ONGEP"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Valores</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">Princípios que guiam nossas ações e decisões</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <ValueCard
              icon={<Users className="h-10 w-10 text-emerald-600" />}
              title="Inclusão"
              description="Acreditamos que todos merecem oportunidades iguais, independentemente de sua origem ou condição social."
            />
            <ValueCard
              icon={<Award className="h-10 w-10 text-emerald-600" />}
              title="Excelência"
              description="Buscamos a qualidade em tudo o que fazemos, com compromisso e responsabilidade."
            />
            <ValueCard
              icon={<Target className="h-10 w-10 text-emerald-600" />}
              title="Inovação"
              description="Estamos sempre em busca de novas ideias e abordagens para enfrentar os desafios sociais."
            />
            <ValueCard
              icon={<Clock className="h-10 w-10 text-emerald-600" />}
              title="Sustentabilidade"
              description="Trabalhamos para criar soluções duradouras que possam continuar gerando impacto positivo ao longo do tempo."
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa Equipe</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Conheça os profissionais dedicados que fazem a ONGEP acontecer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMember
              name="Maria Silva"
              role="Diretora Executiva"
              bio="Educadora com mais de 15 anos de experiência em projetos sociais."
              image="/placeholder.svg?height=300&width=300"
            />
            <TeamMember
              name="João Santos"
              role="Coordenador de Projetos"
              bio="Especialista em gestão de projetos sociais e desenvolvimento comunitário."
              image="/placeholder.svg?height=300&width=300"
            />
            <TeamMember
              name="Ana Oliveira"
              role="Coordenadora Pedagógica"
              bio="Pedagoga com foco em metodologias inovadoras de ensino."
              image="/placeholder.svg?height=300&width=300"
            />
          </div>

          <div className="text-center mt-12">
            <Button className="bg-emerald-600 hover:bg-emerald-700">Conheça Toda a Equipe</Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Parceiros</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Organizações que acreditam em nosso trabalho e nos ajudam a fazer a diferença
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-md w-full max-w-[200px] h-[100px] flex items-center justify-center"
              >
                <Image
                  src={`/placeholder.svg?height=80&width=160`}
                  alt={`Parceiro ${i}`}
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
          <h2 className="text-3xl font-bold mb-6">Faça Parte da Nossa História</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Junte-se a nós na missão de transformar vidas através da educação e projetos sociais
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100">
              Seja Voluntário
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Faça uma Doação
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function ValueCard({ icon, title, description }) {
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

function TeamMember({ name, role, bio, image }) {
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
