import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    // Validate the request data
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Here you would typically add the email to your newsletter service
    // For this example, we'll just return a success response

    console.log("Newsletter subscription:", { email })

    return NextResponse.json(
      {
        success: true,
        message: "Inscrição realizada com sucesso! Obrigado por se inscrever em nossa newsletter.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error processing newsletter subscription:", error)
    return NextResponse.json(
      { error: "Ocorreu um erro ao processar sua inscrição. Por favor, tente novamente." },
      { status: 500 },
    )
  }
}
