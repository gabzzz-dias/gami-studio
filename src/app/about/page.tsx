"use client";

import Image from "next/image"
import Link from "next/link"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useContext } from "react"
import { LanguageContext } from "../utils/languageProvider"
import { Button } from "../components/ui/button";

export default function AboutPage() {
    const { dictionary, language } = useContext(LanguageContext)


    return (
        <div className="flex flex-col min-h-screen bg-gami-beige w-full">
            <Header />

            <main className="flex flex-col pt-24 pb-16 w-full">

                <section className="flex flex-col md:flex-row justify-around content-center px-6 md:px-8 lg:px-12 mb-8">

                    <div className="flex flex-col justify-around md:justify-center md:items-start items-center text-center md:text-left max-w-md">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gami-text mb-4">{dictionary.ABOUT}</h1>
                        <p className="text-lg md:text-xl lg:text-2xl text-gami-text mb-4"><strong>Gami</strong> é um projeto colaborativo, um espaço onde transformamos nossa visão em arte.</p>
                        <Button asChild size="lg" className="bg-gami-pink-dark text-white text-base hover:bg-gami-pink-dark/90 -rotate-6 max-w-56 self-center my-6">
                            <Link href="/contact">VEM COM A GENTE?</Link>
                        </Button>
                    </div>

                    <div className="my-4 md:max-w-2xl lg:max-w-3xl">
                        <img src="/assets/about-img.png" alt="about image ilustration" />
                    </div>

                </section>

                <section className="bg-white w-full flex flex-col mt-16 px-6 py-6 relative">

                    <div className="flex justify-around w-full">

                        <div className="flex w-full justify-between md:justify-start md:px-16">

                            <div className="flex flex-col relative mx-3 md:mx-6 md:max-w-sm">
                                <img src="/assets/mi-img.jpg" alt="Milena" className="w-24 md:w-32 h-24 md:h-32 object-cover rounded-full absolute -top-20 self-center lg:left-32" />
                                <span className="text-gami-text mt-8 md:mt-20"><strong>Milena</strong> é ilustradora e vive para espalhar cores e encantamento pelo mundo, com um carinho extra pelos animais. Com <strong>três livros infantis ilustrados</strong> e uma colaboração editorial para a revista <strong>Superinteressante</strong>, seu trabalho transita com naturalidade do universo lúdico ao adulto.</span>
                            </div>

                            <div className="flex flex-col relative mx-3 md:mx-6 md:max-w-sm">
                                <img src="/assets/gabi-photo.jpg" alt="Gabi" className="w-24 md:w-32 h-24 md:h-32 object-cover rounded-full absolute -top-20 self-center lg:-left-32" />
                                <span className="text-gami-text mt-8 md:mt-20"><strong>Gabi</strong> é ilustradora, designer e diretora de arte. Sua experiência inclui a criação dos universos gráficos das novelas infantis <strong>A Caverna Encantada</strong> e <strong>A Infância de Romeu e Julieta</strong>. Traz consigo uma camada extra de sensibilidade, afeto e diversão que vai além do design convencional.</span>
                            </div>

                        </div>

                        <div className="hidden xl:block">
                            <img src="/assets/hero-bolinhas-1.png" alt="Bolinhas" className="absolute max-w-sm right-20 -top-16" />
                        </div>

                    </div>

                    <div className="mt-12 mb-8 md:max-w-3xl md:self-center md:text-center md:px-6 md:mt-24 md:mb-16">
                        <span className="text-gami-text text-xl md:text-2xl">Juntas, oferecemos um serviço que acompanha seu projeto do começo ao fim: <strong className="text-gami-pink-dark">da concepção criativa à arte final.</strong></span>
                    </div>

                    <div className="hidden xl:block">
                        <img src="/assets/hero-bolinha-3.png" alt="Bolinha" className="absolute max-w-sm -left-24 top-64" />
                    </div>

                </section>

                <section className="flex flex-col md:flex-row justify-around md:justify-center items-center px-6 md:px-12 mt-6">
                    <div>
                        <img src="/assets/store-img.png" alt="Ratinho" className="md:max-w-lg md:mx-6" />
                    </div>
                    <div className="flex flex-col justify-around items-center mt-8 md:mx-6">
                        <span className="text-gami-text text-xl md:text-2xl lg:text-3xl"><strong>Curtiu a ideia?</strong></span>
                        <span className="text-gami-text text-lg md:text-xl lg:text-2xl">Confira alguns dos nossos projetos!</span>
                        <Button asChild size="lg" className="bg-gami-green-dark text-white text-base hover:bg-gami-green-dark/90 -rotate-6 max-w-56 self-center my-4 md:mt-12">
                            <Link href="/projects">SAIBA MAIS</Link>
                        </Button>
                    </div>
                </section>

            </main>

            <Footer />

        </div>
    )
}
