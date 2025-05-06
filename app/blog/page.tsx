import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon, Clock, User, ArrowRight } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] bg-gradient-to-r from-emerald-800 to-emerald-600 flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="container mx-auto px-4 z-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Notícias, artigos e histórias sobre nossos projetos e iniciativas
          </p>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-emerald-600 hover:bg-emerald-700">Todos os Artigos</Button>
            <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
              Educação
            </Button>
            <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
              Projetos
            </Button>
            <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
              Voluntariado
            </Button>
            <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
              Histórias
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Destaque</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
          </div>

          <Card className="overflow-hidden max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Artigo em destaque"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" /> 15 de Maio, 2025
                    </span>
                    <span className="flex items-center">
                      <User className="h-4 w-4 mr-1" /> Admin
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">O Impacto da Educação na Transformação Social</h3>
                  <p className="text-gray-600 mb-4">
                    Neste artigo, exploramos como a educação pode ser uma ferramenta poderosa para a transformação
                    social e como nossos projetos estão contribuindo para essa mudança em comunidades vulneráveis.
                  </p>
                </div>
                <Link href="/blog/1">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    Ler Artigo Completo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Artigos Recentes</h2>
            <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <nav className="flex items-center gap-1">
              <Button variant="outline" size="icon" className="h-8 w-8">
                1
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                2
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8">
                3
              </Button>
              <span className="mx-2">...</span>
              <Button variant="outline" size="icon" className="h-8 w-8">
                8
              </Button>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Inscreva-se em Nossa Newsletter</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Receba as últimas notícias, artigos e atualizações sobre nossos projetos diretamente em seu email
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Seu email"
                className="px-4 py-3 w-full rounded-l-md focus:outline-none text-gray-900"
              />
              <Button className="rounded-l-none bg-gray-900 hover:bg-gray-800">Inscrever-se</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function BlogPostCard({ post }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        <div className="absolute top-3 right-3 bg-emerald-600 text-white text-xs font-bold px-2 py-1 rounded">
          {post.category}
        </div>
      </div>
      <CardContent className="p-6 flex-grow flex flex-col">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <span className="flex items-center">
            <CalendarIcon className="h-4 w-4 mr-1" /> {post.date}
          </span>
          <span className="flex items-center">
            <Clock className="h-4 w-4 mr-1" /> {post.readTime}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
        <Link href={`/blog/${post.id}`}>
          <Button variant="link" className="p-0 text-emerald-600 hover:text-emerald-700">
            Ler mais <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

const blogPosts = [
  {
    id: 1,
    title: "O Impacto da Educação na Transformação Social",
    excerpt:
      "Neste artigo, exploramos como a educação pode ser uma ferramenta poderosa para a transformação social e como nossos projetos estão contribuindo para essa mudança.",
    date: "15 de Maio, 2025",
    readTime: "5 min",
    category: "Educação",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "Voluntariado: Como Você Pode Fazer a Diferença",
    excerpt:
      "Descubra as diferentes formas de voluntariado e como você pode contribuir para causas sociais importantes, mesmo com pouco tempo disponível.",
    date: "10 de Maio, 2025",
    readTime: "4 min",
    category: "Voluntariado",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "História de Sucesso: Projeto Hortas Comunitárias",
    excerpt:
      "Conheça a história do projeto Hortas Comunitárias e como ele está transformando a relação das comunidades com a alimentação saudável e sustentável.",
    date: "5 de Maio, 2025",
    readTime: "6 min",
    category: "Projetos",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    title: "A Importância da Arte na Formação das Crianças",
    excerpt:
      "Entenda como a arte pode contribuir para o desenvolvimento cognitivo, emocional e social das crianças e adolescentes.",
    date: "1 de Maio, 2025",
    readTime: "3 min",
    category: "Educação",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 5,
    title: "Depoimento: 'A ONGEP Mudou Minha Vida'",
    excerpt:
      "Maria Silva, ex-aluna do projeto Inclusão Digital, conta como as aulas de informática abriram portas para sua carreira profissional.",
    date: "25 de Abril, 2025",
    readTime: "7 min",
    category: "Histórias",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 6,
    title: "Como Empresas Podem Apoiar Projetos Sociais",
    excerpt:
      "Guia prático para empresas que desejam investir em responsabilidade social e apoiar iniciativas que geram impacto positivo na sociedade.",
    date: "20 de Abril, 2025",
    readTime: "5 min",
    category: "Parcerias",
    image: "/placeholder.svg?height=200&width=400",
  },
]
