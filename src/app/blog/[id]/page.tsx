import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/atomic/button"
import { Card, CardContent } from "@/components/composed/card"
import {
  CalendarIcon,
  Clock,
  User,
  Tag,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  ArrowRight,
} from "lucide-react"

interface BlogPostPageProps {
  params: { id: string }
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  // Na implementação real, você buscaria o post pelo ID
  const post = blogPosts.find((p) => p.id === Number.parseInt(params.id)) || blogPosts[0]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] bg-gradient-to-r from-emerald-800 to-emerald-600">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt={post.title}
          fill
          className="object-cover z-0"
          priority
        />
        <div className="container mx-auto px-4 h-full flex items-end z-20 relative pb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 text-sm text-white/80 mb-3">
              <span className="flex items-center">
                <CalendarIcon className="h-4 w-4 mr-1" /> {post.date}
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" /> {post.readTime}
              </span>
              <span className="flex items-center">
                <User className="h-4 w-4 mr-1" /> Admin
              </span>
              <span className="flex items-center">
                <Tag className="h-4 w-4 mr-1" /> {post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 flex justify-center bg-transparent">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 gap-8">
            <div>
              <Link href="/blog" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" /> Voltar para o Blog
              </Link>

              <div className="prose prose-lg max-w-none">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl
                  nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl
                  nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.
                </p>

                <p>
                  Neste artigo, exploramos como a educação pode ser uma ferramenta poderosa para a transformação social
                  e como nossos projetos estão contribuindo para essa mudança em comunidades vulneráveis.
                </p>

                <h2>A Educação como Agente de Transformação</h2>

                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>

                <blockquote>
                  "A educação é a arma mais poderosa que você pode usar para mudar o mundo." - Nelson Mandela
                </blockquote>

                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                  non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                </p>

                <h2>Nossos Projetos Educacionais</h2>

                <p>
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
                  aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                  esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </p>

                <ul>
                  <li>Reforço escolar para crianças e adolescentes</li>
                  <li>Cursos de capacitação profissional para jovens</li>
                  <li>Oficinas de arte e cultura</li>
                  <li>Educação ambiental</li>
                </ul>

                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                  deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                  provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
                  fuga.
                </p>

                <h2>Resultados e Impacto</h2>

                <p>
                  Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est
                  eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
                  assumenda est, omnis dolor repellendus.
                </p>

                <p>
                  Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
                  voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
                  delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus
                  asperiores repellat.
                </p>
              </div>

              {/* Share Section */}
              <div className="mt-8 pt-8 border-t">
                <h3 className="text-lg font-semibold mb-4">Compartilhe este artigo</h3>
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
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              {/* Author Card */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                      <Image src="/placeholder.svg?height=100&width=100" alt="Autor" fill className="object-cover" />
                    </div>
                    <h3 className="text-xl font-semibold">Admin</h3>
                    <p className="text-gray-600 mb-4">Equipe ONGEP</p>
                    <p className="text-sm text-gray-600">
                      Equipe responsável pela comunicação e divulgação dos projetos e iniciativas da ONGEP.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Categorias</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/blog?category=educacao"
                        className="text-emerald-600 hover:text-emerald-700 hover:underline"
                      >
                        Educação (8)
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog?category=projetos"
                        className="text-emerald-600 hover:text-emerald-700 hover:underline"
                      >
                        Projetos (12)
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog?category=voluntariado"
                        className="text-emerald-600 hover:text-emerald-700 hover:underline"
                      >
                        Voluntariado (5)
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog?category=historias"
                        className="text-emerald-600 hover:text-emerald-700 hover:underline"
                      >
                        Histórias (7)
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog?category=parcerias"
                        className="text-emerald-600 hover:text-emerald-700 hover:underline"
                      >
                        Parcerias (3)
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Recent Posts */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Posts Recentes</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <div key={post.id} className="flex gap-3">
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm line-clamp-2">
                            <Link
                              href={`/blog/${post.id}`}
                              className="hover:text-emerald-600 hover:underline transition-colors"
                            >
                              {post.title}
                            </Link>
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Artigos Relacionados</h2>
            <div className="w-16 h-1 bg-emerald-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.slice(1, 4).map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function BlogPostCard({ post }: { post: BlogPost }) {
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
]
