import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import Header from "@/components/header";
import Footer from "@/components/footer";

export async function generateMetadata({ params }: { params: { locale: string } }) {
    const { locale } = await Promise.resolve(params);
    const translations = await getTranslations({ locale });
    return {
        title: translations("title")
    };
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: ReactNode;
    params: { locale: string };
}) {
    const { locale } = await Promise.resolve(params);
    const messages = await getMessages({ locale });

    return (
        <>
            <NextIntlClientProvider locale={locale} messages={messages}>
                <Header />
                {children}
                <Footer />
            </NextIntlClientProvider>
        </>
    );
}