import { Inter } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'ONGEP - Organização Não Governamental para Educação Popular',
  description: 'Organização Não Governamental para Educação Popular', icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/ongep_logo.png',
  },
};

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html suppressHydrationWarning>      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
    </head>
      <body className={inter.className + " bg-white min-h-screen"}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <main className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-80px)]">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
