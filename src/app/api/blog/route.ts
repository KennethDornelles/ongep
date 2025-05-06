import { NextResponse } from "next/server"

// Simulação de posts do blog
const blogPosts = [
  {
    id: 1,
    title: "O Impacto da Educação na Transformação Social",
    excerpt:
      "Neste artigo, exploramos como a educação pode ser uma ferramenta poderosa para a transformação social e como nossos projetos estão contribuindo para essa mudança.",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.</p>
      <p>Neste artigo, exploramos como a educação pode ser uma ferramenta poderosa para a transformação social e como nossos projetos estão contribuindo para essa mudança em comunidades vulneráveis.</p>
      <h2>A Educação como Agente de Transformação</h2>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
      <blockquote>"A educação é a arma mais poderosa que você pode usar para mudar o mundo." - Nelson Mandela</blockquote>
      <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    `,
    date: "15 de Maio, 2025",
    readTime: "5 min",
    category: "Educação",
    author: "Admin",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "Voluntariado: Como Você Pode Fazer a Diferença",
    excerpt:
      "Descubra as diferentes formas de voluntariado e como você pode contribuir para causas sociais importantes, mesmo com pouco tempo disponível.",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.</p>
      <p>Descubra as diferentes formas de voluntariado e como você pode contribuir para causas sociais importantes, mesmo com pouco tempo disponível.</p>
      <h2>Tipos de Voluntariado</h2>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      <ul>
        <li>Voluntariado presencial</li>
        <li>Voluntariado remoto</li>
        <li>Voluntariado pontual</li>
        <li>Voluntariado contínuo</li>
      </ul>
    `,
    date: "10 de Maio, 2025",
    readTime: "4 min",
    category: "Voluntariado",
    author: "Admin",
    image: "/placeholder.svg?height=200&width=400",
  },
  // Outros posts...
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")
  const id = searchParams.get("id")

  // Se um ID for fornecido, retorne o post específico
  if (id) {
    const post = blogPosts.find((p) => p.id === Number.parseInt(id))
    if (!post) {
      return NextResponse.json({ error: "Post não encontrado" }, { status: 404 })
    }
    return NextResponse.json(post)
  }

  // Se uma categoria for fornecida, filtre os posts
  if (category) {
    const filteredPosts = blogPosts.filter((post) => post.category.toLowerCase() === category.toLowerCase())
    return NextResponse.json(filteredPosts)
  }

  // Caso contrário, retorne todos os posts
  return NextResponse.json(blogPosts)
}
