"use client";
import Image from "next/image";
import Header from "../app/components/Header";
import Footer from "./components/Footer";
import { projects } from "./utils/projects";
import { useContext } from "react";
import { LanguageContext } from "./utils/languageProvider";
import Link from "next/link";

export default function Home() {
  const { dictionary, userLanguageChange, language } = useContext(LanguageContext)

  return (
    <div className="min-h-screen flex flex-col bg-white w-full">
      <Header />

      <main className="container mx-auto px-4 flex-1 flex flex-col justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
          {projects.length > 0 ? (
            projects.map((project, i) => (
              <div key={i} className="space-y-2 relative">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="bg-gray-200 aspect-video rounded-lg overflow-hidden relative group-hover:scale-105 md:group-hover:scale-110 transition-all duration-300">
                    <img
                      src={project.image || "/placeholder-image.png"}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-all duration-300"></div>
                    <div className="absolute bottom-0 left-0 w-full text-white p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <h3 className="text-sm font-semibold">{project.title}</h3>
                      <span className="text-xs">{project.author}</span>
                    </div>
                  </div>
                </a>
              </div>
            ))
          ) : (
            <p>Carregando projetos...</p>
          )}
        </div>

        <div className="flex justify-center my-12">
          <Link href="/contact">
            <Image
              src={language === "pt" ? '/assets/contact-btn-br.png' : '/assets/contact-btn-eng.png'} 
              alt="Contato" 
              width={180} 
              height={50} 
              className="object-contain"
            />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
