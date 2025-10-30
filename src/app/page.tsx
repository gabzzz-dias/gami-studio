"use client";
import Header from "../app/components/Header";
import { homeProjects } from "./utils/projects";
import { useContext } from "react";
import { LanguageContext } from "./utils/languageProvider";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "./components/Footer";

const services = [
    { id: "1", title: "Ilustração editorial", description: "Criação de ilustrações para livros, revistas e outros materiais impressos." },
    { id: "2", title: "Ilustração de livros", description: "Desenvolvimento de ilustrações para livros infantis e infanto-juvenis." },
    { id: "3", title: "Produtos personalizados", description: "Criação de ilustrações para produtos como camisetas, canecas e outros itens." },
    { id: "4", title: "Identidade visual ilustrada", description: "Desenvolvimento de identidades visuais para marcas e empresas." },
    { id: "5", title: "Ilustração para marcas", description: "Criação de ilustrações para marcas e campanhas publicitárias." },
    { id: "6", title: "Ilustração para presentes", description: "Criação de ilustrações para presentes personalizados." },
];

export default function Home() {
    const { dictionary } = useContext(LanguageContext);

    return (
        <div>
            <Header />

            <main className="flex flex-col w-full">

                <section className="relative flex flex-col items-center pt-20 lg:pt-10 pb-10 overflow-hidden">

                    <img
                        src="/assets/hero-bolinhas-1.png"
                        alt=""
                        className="hidden lg:block absolute -left-24 top-32 w-[400px] xl:w-[520px]"
                    />

                    <img
                        src="/assets/hero-logo.png"
                        alt=""
                        className="w-[300px] sm:w-[380px] md:w-[450px] lg:w-[520px] xl:w-[600px]"
                    />

                    <img
                        src="/assets/hero-bolinha-3.png"
                        alt=""
                        className="hidden lg:block absolute right-0 -top-24 w-[350px] xl:w-[450px]"
                    />
                    <img
                        src="/assets/hero-bolinhas-2.png"
                        alt=""
                        className="hidden xl:block absolute right-20 bottom-72 w-[420px]"
                    />

                    <div className="w-full max-w-3xl mt-4 text-center md:text-left px-6">
                        <h1 className="text-3xl md:text-5xl font-extrabold text-gami-text leading-tight max-w-[600px] md:mx-10">
                            Ilustração editorial e produtos personalizados
                        </h1>

                        <div className="md:flex mt-4">
                            <p className="text-lg text-gami-text mt-4 md:max-w-[200px] md:mx-10">
                                damos vida à suas ideias com humor, carinho e sensibilidade
                            </p>
                            <Button asChild size="lg" className="bg-gami-green-light text-white text-base hover:bg-gami-green-light/90 -rotate-6 mt-4 md:ml-6 min-w-40">
                                <Link href="/about">SAIBA MAIS</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="hidden md:flex gap-24 mt-20">
                        <Link href="/projects">
                            <img src="/assets/ilustracao.png" width={200} />
                        </Link>
                        <Link href="/projects">
                            <img src="/assets/design.png" width={200} />
                        </Link>
                        <Link href="/projects">
                            <img src="/assets/conceito.png" width={200} />
                        </Link>
                    </div>
                </section>

                <section className="container mx-auto py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-12">
                        {homeProjects.map((project, i) => (
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

                <section className="container mx-auto px-4 py-10 max-w-3xl">
                    <h2 className="text-3xl font-extrabold text-center mb-10 text-gami-text">
                        Nossos Serviços
                    </h2>

                    <Accordion type="single" collapsible>
                        {services.map((service) => (
                            <AccordionItem key={service.id} value={service.id} className="border-b border-gami-text/30">
                                <AccordionTrigger className="text-xl md:text-2xl font-medium">
                                    {service.title}
                                </AccordionTrigger>
                                <AccordionContent className="text-base text-gami-text">
                                    {service.description}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </section>

                <section className="container mx-auto px-4 py-10 text-center mb-10">
                    <p className="text-lg max-w-xl mx-auto text-gami-text mb-6">
                        Amou? Manda um oi com a sua ideia e retornaremos com
                        os próximos passos ✨
                    </p>

                    <Button asChild size="lg" className="bg-gami-primary text-white text-base hover:bg-gami-primary/90 -rotate-6">
                        <Link href="/contact">VAMOS CONVERSAR</Link>
                    </Button>
                </section>

            </main>
            <Footer />
        </div>
    );
}
