import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate the request data
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Here you would typically send an email or store the contact in a database
    // For this example, we'll just return a success response

    console.log("Contact form submission:", { name, email, message })

    return NextResponse.json(
      {
        success: true,
        message: "Mensagem recebida com sucesso! Entraremos em contato em breve.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      { error: "Ocorreu um erro ao processar sua mensagem. Por favor, tente novamente." },
      { status: 500 },
    )
  }
}
