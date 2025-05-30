import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/atomic/button"
import { Card, CardContent } from "@/components/ui/composed/card"
import { CalendarIcon, Clock, MapPin, Users, ArrowRight } from "lucide-react"

export default function EventosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] bg-gradient-to-r from-emerald-800 to-emerald-600 flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="container mx-auto px-4 z-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Eventos</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Confira nossa agenda de eventos, workshops e atividades
          </p>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-emerald-600 hover:bg-emerald-700">Todos os Eventos</Button>
            <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
              Workshops
            </Button>
            <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
              Palestras
            </Button>
            <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
              Feiras
            </Button>
            <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
              Ações Sociais
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Próximo Evento</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
          </div>

          <Card className="overflow-hidden max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Evento em destaque"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold px-2 py-1 rounded mb-3">
                    Workshop
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Workshop de Educação Ambiental</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      <span>15 de Maio, 2025 | 14:00 - 17:00</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>Centro Comunitário - Av. Principal, 123</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      <span>Vagas limitadas: 30 pessoas</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Aprenda sobre práticas sustentáveis e como implementar projetos de educação ambiental em sua
                    comunidade. Atividades práticas e material didático incluídos.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">Inscrever-se</Button>
                  <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                    Mais Informações
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Calendário de Eventos</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Confira nossa programação completa e participe das atividades
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-800">Maio 2025</h3>
            {events.slice(0, 3).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}

            <h3 className="text-xl font-semibold text-gray-800 mt-10">Junho 2025</h3>
            {events.slice(3, 6).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Eventos Anteriores</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <PastEventCard key={event.id} event={event} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
              Ver Todos os Eventos Anteriores
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Quer Propor um Evento?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Se você tem uma ideia para um evento ou atividade que se alinha com nossa missão, entre em contato conosco
          </p>
          <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100">
            Entre em Contato
          </Button>
        </div>
      </section>
    </div>
  )
}

interface EventCardProps {
  event: {
    id: number;
    title: string;
    category: string;
    day?: string;
    month?: string;
    time?: string;
    location?: string;
    description?: string;
    date?: string;
    image?: string;
  };
}

function EventCard({ event }: EventCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="md:col-span-1 bg-emerald-50 p-6 flex flex-col items-center justify-center text-center">
          <div className="text-4xl font-bold text-emerald-700">{event.day}</div>
          <div className="text-lg text-emerald-600">{event.month}</div>
        </div>
        <div className="md:col-span-3">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold px-2 py-1 rounded mb-2">
                  {event.category}
                </div>
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <div className="flex items-center text-gray-600 mt-1">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-gray-600 mt-1">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{event.location}</span>
                </div>
              </div>
              <div className="flex-shrink-0">
                <Button className="bg-emerald-600 hover:bg-emerald-700 w-full md:w-auto">Inscrever-se</Button>
              </div>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  )
}

function PastEventCard({ event }: EventCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48">
        <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
        <div className="absolute top-3 right-3 bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded">
          {event.category}
        </div>
      </div>
      <CardContent className="p-6 flex-grow flex flex-col">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <CalendarIcon className="h-4 w-4" />
          <span>{event.date}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{event.description}</p>
        <Link href={`/eventos/${event.id}`}>
          <Button variant="link" className="p-0 text-emerald-600 hover:text-emerald-700">
            Ver Galeria <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

const events = [
  {
    id: 1,
    title: "Workshop de Educação Ambiental",
    category: "Workshop",
    day: "15",
    month: "Mai",
    time: "14:00 - 17:00",
    location: "Centro Comunitário - Av. Principal, 123",
  },
  {
    id: 2,
    title: "Palestra: Inclusão Digital para Idosos",
    category: "Palestra",
    day: "20",
    month: "Mai",
    time: "19:00 - 21:00",
    location: "Auditório Municipal - Rua das Flores, 45",
  },
  {
    id: 3,
    title: "Mutirão de Limpeza da Praia",
    category: "Ação Social",
    day: "27",
    month: "Mai",
    time: "09:00 - 12:00",
    location: "Praia Central - Ponto de Encontro: Quiosque 5",
  },
  {
    id: 4,
    title: "Feira de Artesanato Solidário",
    category: "Feira",
    day: "05",
    month: "Jun",
    time: "10:00 - 18:00",
    location: "Praça Central",
  },
  {
    id: 5,
    title: "Seminário de Educação Inclusiva",
    category: "Seminário",
    day: "12",
    month: "Jun",
    time: "08:30 - 17:00",
    location: "Auditório Municipal - Rua das Flores, 45",
  },
  {
    id: 6,
    title: "Oficina de Arte para Crianças",
    category: "Workshop",
    day: "19",
    month: "Jun",
    time: "14:00 - 16:00",
    location: "Escola Municipal João da Silva - Rua Educação, 100",
  },
]

const pastEvents = [
  {
    id: 1,
    title: "Festival Cultural das Comunidades",
    description: "Evento que celebrou a diversidade cultural das comunidades atendidas pela ONGEP.",
    date: "10 de Abril, 2025",
    category: "Festival",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "Seminário de Sustentabilidade",
    description: "Discussões sobre práticas sustentáveis e sua implementação em projetos sociais.",
    date: "25 de Março, 2025",
    category: "Seminário",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "Campanha de Arrecadação de Livros",
    description: "Ação que arrecadou mais de 500 livros para bibliotecas comunitárias.",
    date: "15 de Fevereiro, 2025",
    category: "Campanha",
    image: "/placeholder.svg?height=200&width=400",
  },
]
