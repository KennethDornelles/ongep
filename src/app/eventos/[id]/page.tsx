import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/atomic/button"
import { Card, CardContent } from "@/components/composed/card"
import { CalendarIcon, Clock, MapPin, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react"

interface EventoDetalhePageProps {
  params: { id: string };
}

export default function EventoDetalhePage({ params }: EventoDetalhePageProps) {
  // Na implementação real, você buscaria o evento pelo ID
  const event = {
    id: Number.parseInt(params.id),
    title: "Festival Cultural das Comunidades",
    category: "Festival",
    date: "10 de Abril, 2025",
    time: "10:00 - 18:00",
    location: "Praça Central - Centro",
    address: "Av. Principal, s/n - Centro",
    description:
      "O Festival Cultural das Comunidades é um evento que celebra a diversidade cultural das comunidades atendidas pela ONGEP. Com apresentações artísticas, exposições, oficinas e muito mais, o festival é uma oportunidade para conhecer e valorizar as manifestações culturais locais.",
    organizer: "ONGEP - Equipe de Projetos Culturais",
    contact: "eventos@ongep.org | (00) 1234-5678",
    image: "/placeholder.svg?height=800&width=1600",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] bg-gradient-to-r from-emerald-800 to-emerald-600">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover z-0" priority />
        <div className="container mx-auto px-4 h-full flex items-end z-20 relative pb-12">
          <div className="max-w-3xl">
            <div className="inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold px-2 py-1 rounded mb-3">
              {event.category}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{event.title}</h1>
            <div className="flex flex-wrap gap-4 text-white/90">
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{event.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Link href="/eventos" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" /> Voltar para Eventos
              </Link>

              <div className="prose prose-lg max-w-none">
                <h2>Sobre o Evento</h2>
                <p>{event.description}</p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl
                  nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl
                  nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.
                </p>

                <p>
                  Neste evento, celebramos a diversidade cultural das comunidades atendidas pela ONGEP, com
                  apresentações artísticas, exposições, oficinas e muito mais.
                </p>

                <h2>Programação</h2>

                <ul>
                  <li>
                    <strong>10:00 - 12:00</strong>: Abertura oficial e apresentações culturais
                  </li>
                  <li>
                    <strong>12:00 - 14:00</strong>: Feira gastronômica com comidas típicas
                  </li>
                  <li>
                    <strong>14:00 - 16:00</strong>: Oficinas culturais para todas as idades
                  </li>
                  <li>
                    <strong>16:00 - 18:00</strong>: Apresentações musicais e encerramento
                  </li>
                </ul>

                <h2>Galeria de Fotos</h2>
              </div>

              {/* Photo Gallery */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                {event.gallery.map((photo, index) => (
                  <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={photo || "/placeholder.svg"}
                      alt={`Foto ${index + 1} do evento`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Share Section */}
              <div className="mt-8 pt-8 border-t">
                <h3 className="text-lg font-semibold mb-4">Compartilhe este evento</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              {/* Event Details Card */}
              <Card className="mb-8 sticky top-24">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Detalhes do Evento</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">Data e Hora</p>
                      <p className="text-gray-600">{event.date}</p>
                      <p className="text-gray-600">{event.time}</p>
                    </div>
                    <div>
                      <p className="font-medium">Local</p>
                      <p className="text-gray-600">{event.location}</p>
                      <p className="text-gray-600">{event.address}</p>
                    </div>
                    <div>
                      <p className="font-medium">Organizador</p>
                      <p className="text-gray-600">{event.organizer}</p>
                    </div>
                    <div>
                      <p className="font-medium">Contato</p>
                      <p className="text-gray-600">{event.contact}</p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Inscrever-se</Button>
                    <Button
                      variant="outline"
                      className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                    >
                      Adicionar ao Calendário
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Events */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Eventos Relacionados</h2>
            <div className="w-16 h-1 bg-emerald-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((id) => (
              <RelatedEventCard
                key={id}
                event={{
                  id,
                  title: `Evento Relacionado ${id}`,
                  date: "Próximos dias",
                  category: "Workshop",
                  image: "/placeholder.svg?height=200&width=400",
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

interface RelatedEvent {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
}

function RelatedEventCard({ event }: { event: RelatedEvent }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48">
        <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
        <div className="absolute top-3 right-3 bg-emerald-600 text-white text-xs font-bold px-2 py-1 rounded">
          {event.category}
        </div>
      </div>
      <CardContent className="p-6 flex-grow flex flex-col">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <CalendarIcon className="h-4 w-4" />
          <span>{event.date}</span>
        </div>
        <h3 className="text-xl font-semibold mb-4">{event.title}</h3>
        <Link href={`/eventos/${event.id}`} className="mt-auto">
          <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Ver Detalhes</Button>
        </Link>
      </CardContent>
    </Card>
  )
}
