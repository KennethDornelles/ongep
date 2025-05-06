import { Inter } from "next/font/google"
import "../styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import type { ReactNode } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ONGEP - Organização Não Governamental para Educação e Projetos Sociais",
  description:
    "Promovendo educação, cultura e desenvolvimento social através de projetos que transformam vidas e comunidades.",
  generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className + " bg-[#b3b3b3] min-h-screen"}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Header />
          <main className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-80px)]">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
