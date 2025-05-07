import { Inter } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body className={inter.className + " bg-[#b3b3b3] min-h-screen"}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <main className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-80px)]">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
