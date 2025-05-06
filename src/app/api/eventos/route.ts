import { NextResponse } from "next/server"

// Simulação de eventos
const eventos = [
  {
    id: 1,
    title: "Workshop de Educação Ambiental",
    description:
      "Aprenda sobre práticas sustentáveis e como implementar projetos de educação ambiental em sua comunidade. Atividades práticas e material didático incluídos.",
    category: "Workshop",
    date: "2025-05-15",
    day: "15",
    month: "Mai",
    time: "14:00 - 17:00",
    location: "Centro Comunitário",
    address: "Av. Principal, 123 - Centro",
    organizer: "ONGEP - Equipe de Projetos Ambientais",
    contact: "eventos@ongep.org | (00) 1234-5678",
    capacity: 30,
    isActive: true,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Palestra: Inclusão Digital para Idosos",
    description:
      "Palestra sobre a importância da inclusão digital para idosos e como familiares podem ajudar nesse processo.",
    category: "Palestra",
    date: "2025-05-20",
    day: "20",
    month: "Mai",
    time: "19:00 - 21:00",
    location: "Auditório Municipal",
    address: "Rua das Flores, 45 - Centro",
    organizer: "ONGEP - Equipe de Inclusão Digital",
    contact: "eventos@ongep.org | (00) 1234-5678",
    capacity: 100,
    isActive: true,
    image: "/placeholder.svg?height=400&width=600",
  },
  // Outros eventos...
]

// Simulação de eventos passados
const eventosPassados = [
  {
    id: 101,
    title: "Festival Cultural das Comunidades",
    description: "Evento que celebrou a diversidade cultural das comunidades atendidas pela ONGEP.",
    category: "Festival",
    date: "2025-04-10",
    formattedDate: "10 de Abril, 2025",
    location: "Praça Central",
    isActive: false,
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  {
    id: 102,
    title: "Seminário de Sustentabilidade",
    description: "Discussões sobre práticas sustentáveis e sua implementação em projetos sociais.",
    category: "Seminário",
    date: "2025-03-25",
    formattedDate: "25 de Março, 2025",
    location: "Auditório Municipal",
    isActive: false,
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
  },
  // Outros eventos passados...
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")
  const id = searchParams.get("id")
  const past = searchParams.get("past") === "true"

  // Se um ID for fornecido, retorne o evento específico
  if (id) {
    const allEvents = [...eventos, ...eventosPassados]
    const event = allEvents.find((e) => e.id === Number.parseInt(id))
    if (!event) {
      return NextResponse.json({ error: "Evento não encontrado" }, { status: 404 })
    }
    return NextResponse.json(event)
  }

  // Se for solicitado eventos passados
  if (past) {
    // Se uma categoria for fornecida, filtre os eventos passados
    if (category) {
      const filteredEvents = eventosPassados.filter((event) => event.category.toLowerCase() === category.toLowerCase())
      return NextResponse.json(filteredEvents)
    }
    // Caso contrário, retorne todos os eventos passados
    return NextResponse.json(eventosPassados)
  }

  // Para eventos ativos
  // Se uma categoria for fornecida, filtre os eventos
  if (category) {
    const filteredEvents = eventos.filter((event) => event.category.toLowerCase() === category.toLowerCase())
    return NextResponse.json(filteredEvents)
  }

  // Caso contrário, retorne todos os eventos ativos
  return NextResponse.json(eventos)
}
