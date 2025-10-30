"use client";

import Link from "next/link"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useContext } from "react"
import { LanguageContext } from "../utils/languageProvider"
import { Button } from "../components/ui/button";
import { projects } from "../utils/projects";

export default function ProjectsPage() {
    const { dictionary, language } = useContext(LanguageContext)


    return (
        <div className="flex flex-col min-h-screen bg-gami-beige w-full h-full">
            <Header />

            <main className="flex flex-1 flex-col pt-28 pb-16 w-full">

                <section className="flex flex-col justify-center items-center mb-6 px-8 md:px-12 lg:px-16 text-center">
                    <h1 className="text-gami-text text-3xl md:text-4xl lg:text-5xl font-bold">Nossos Projetos</h1>
                    <p className="text-gami-text text-lg md:text-xl max-w-lg mt-12">Celebramos as emoções humanas com sensibilidade e otimismo, usando humor e carinho para dar voz à sua mensagem</p>
                </section>

                <section className="container mx-auto py-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12">
                        {projects.map((project, i) => (
                            <div className="space-y-2 relative h-full" key={i}>
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block"
                                >
                                    <div className="bg-gray-200 relative group-hover:scale-105 md:group-hover:scale-110 transition-all duration-300 h-full">
                                        <img
                                            key={i}
                                            src={project.image.replace("../assets/", "/assets/")}
                                            alt={project.title}
                                            className="w-full h-full shadow-md object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-all duration-300"></div>
                                        <div className="absolute bottom-0 left-0 w-full text-white p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                            <h3 className="text-sm font-semibold">{project.title}</h3>
                                            <span className="text-xs">{project.author}</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="flex justify-center items-center mt-6">
                    <Button asChild size="lg" className="bg-gami-primary text-white text-base hover:bg-gami-primary/90 -rotate-6">
                        <Link href="/contact">VAMOS CONVERSAR</Link>
                    </Button>
                </section>

            </main>

            <Footer />

        </div>
    )
}
