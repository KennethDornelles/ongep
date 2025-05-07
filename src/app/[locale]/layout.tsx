import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import Header from "@/components/header";
import Footer from "@/components/footer";

export async function generateMetadata({ params }: { params: { locale: string } }) {
    const locale = params.locale;
    const translations = await getTranslations({ locale, namespace: "common" });
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
    const locale = params.locale;
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