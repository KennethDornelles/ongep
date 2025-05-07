import { Inter } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const translations = await getTranslations({ locale, namespace: "common" });
  return { title: translations("title") };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const locale = params?.locale || "en";

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className + " bg-[#b3b3b3] min-h-screen"}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Header />
          <main className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-80px)]">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
