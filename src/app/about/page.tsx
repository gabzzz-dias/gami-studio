"use client";

import Link from "next/link"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useContext } from "react"
import { LanguageContext } from "../utils/languageProvider"
import { Button } from "../components/ui/button";

export default function AboutPage() {
    const { dictionary } = useContext(LanguageContext)

    return (
        <div className="flex flex-col min-h-screen bg-gami-beige w-full">
            <Header />

            <main className="flex flex-1 flex-col pt-24 pb-16 w-full">

                <section className="flex flex-col md:flex-row justify-around content-center px-6 md:px-8 lg:px-12 mb-8">

                    <div className="flex flex-col justify-around md:justify-center md:items-start items-center text-center md:text-left max-w-md">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gami-text mb-4">{dictionary.ABOUT_TITLE}</h1>
                        <p className="text-lg md:text-xl text-gami-text mb-4"><strong>Gami</strong> {dictionary.ABOUT_SUBTITLE}</p>
                        <Button asChild size="lg" className="bg-gami-pink-dark text-white text-base hover:bg-gami-pink-dark/90 -rotate-6 max-w-56 self-center my-6">
                            <Link href="/contact">{dictionary.BTN_JOIN_US}</Link>
                        </Button>
                    </div>

                    <div className="my-4 md:max-w-2xl lg:max-w-3xl">
                        <img src="/assets/about-img.png" alt="about image ilustration" />
                    </div>

                </section>

                <section className="bg-white w-full flex flex-col mt-16 px-6 py-6 relative">

                    <div className="flex justify-around w-full">

                        <div className="flex flex-col md:flex-row w-full justify-between">

                            <img src="/assets/mi-img.jpg" alt="Milena" className="w-24 md:w-32 h-24 md:h-32 object-cover rounded-full absolute -top-12 self-center left-16 md:left-24 lg:left-32 xl:left-1/4" />
                            <img src="/assets/gabi-photo.jpg" alt="Gabi" className="w-24 md:w-32 h-24 md:h-32 object-cover rounded-full absolute -top-12 self-center right-16 md:right-24 lg:right-32 xl:left-1/3" />


                            <div className="flex flex-col md:flex-row mt-6 px-2 xl:mx-32">
                                <span className="text-gami-text mt-10 md:mt-20 md:mx-6 xl:max-w-sm"><strong>Milena</strong> {dictionary.ABOUT_MI_TXT}</span>
                                <span className="text-gami-text mt-6 md:mt-20 md:mx-6 xl:max-w-sm"><strong>Gabi</strong> {dictionary.ABOUT_GABI_TXT}</span>
                            </div>

                        </div>

                        <div className="hidden xl:block">
                            <img src="/assets/hero-bolinhas-1.png" alt="Bolinhas" className="absolute max-w-sm right-20 -top-16" />
                        </div>

                    </div>

                    <div className="mt-12 mb-8 md:max-w-3xl md:self-center md:text-center md:px-6 md:mt-24 md:mb-16 text-center">
                        <span className="text-gami-text text-xl md:text-2xl">{dictionary.ABOUT_BOTH_TXT} <strong className="text-gami-pink-dark">{dictionary.ABOUT_BOTH_TXT_BOLD}</strong></span>
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
                        <span className="text-gami-text text-xl md:text-2xl lg:text-3xl"><strong>{dictionary.ABOUT_LIKED_IDEA}</strong></span>
                        <span className="text-gami-text text-lg md:text-xl lg:text-2xl">{dictionary.ABOUT_CHECK_PROJECTS}</span>
                        <Button asChild size="lg" className="bg-gami-green-dark text-white text-base hover:bg-gami-green-dark/90 -rotate-6 max-w-56 self-center my-4 md:mt-12">
                            <Link href="/projects">{dictionary.BTN_LEARN_MORE}</Link>
                        </Button>
                    </div>
                </section>

            </main>

            <Footer />

        </div>
    )
}
