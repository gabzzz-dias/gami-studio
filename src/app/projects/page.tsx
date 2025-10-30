"use client";

import Image from "next/image"
import Link from "next/link"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useContext } from "react"
import { LanguageContext } from "../utils/languageProvider"
import { Button } from "../components/ui/button";

export default function ProjectsPage() {
    const { dictionary, language } = useContext(LanguageContext)


    return (
        <div className="flex flex-col min-h-screen bg-gami-beige w-full">
            <Header />

            <main className="flex flex-col pt-24 pb-16 w-full">

                <section className="flex flex-col justify-center items-center mb-8 px-6 md:px-8 lg:px-12">
                    <h1 className="text-gami-text text-3xl mb-4">Nossos Projetos</h1>
                    <p className="text-gami-text text-lg md:text-xl lg:text-2xl">Celebramos as emoções humanas com sensibilidade e otimismo, usando humor e carinho para dar voz à sua mensagem</p>
                </section>

                <section>

                </section>

                <section>
                    <button></button>
                </section>

            </main>

            <Footer />

        </div>
    )
}
