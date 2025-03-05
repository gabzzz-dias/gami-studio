"use client";

import Image from "next/image"
import Link from "next/link"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useContext } from "react"
import { LanguageContext } from "../utils/languageProvider"

export default function AboutPage() {
  const { dictionary, language } = useContext(LanguageContext)


  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow">
        {/* Top Section with Three Columns */}
        <section className="container mx-auto px-4 py-12 flex flex-col justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4 flex justify-center md:justify-end">
              <Image
                src="/assets/gabi-photo.jpg"
                alt="Foto da Gabi"
                height={250}
                width={200}
                className="md:w-3/4 rounded-lg object-cover"
              />

            </div>
            <div className="space-y-4 flex justify-start items-end">
              <p className="text-gray-700 text-sm">
                {dictionary.TEXT_GABI}
              </p>
            </div>
            <div className="space-y-4 flex justify-center md:justify-end">
              <Image
                src="/assets/mi-img.jpg"
                alt="Foto da Milena"
                height={250}
                width={200}
                className="md:w-3/4 rounded-lg object-cover"
              />

            </div>
            <div className="space-y-4 flex justify-start items-end">

              <p className="text-gray-700 text-sm">
                {dictionary.TEXT_MI}
              </p>
            </div>

          </div>
        </section>
        <div className="py-4 flex items-center justify-center">
          <Image
            src="/assets/about-img.png"
            alt="Ilustração de pessoas interagindo"
            width={1080}
            height={800}
            className="space-y-10"
          />
        </div>

        {/* Green Section */}
        <section className="bg-[#2F5233] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">{dictionary.GAMI_IS}</h2>
            <p className="max-w-3xl mx-auto">
              {dictionary.TEXT_GAMI}
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-gray-800">
            {[
              { title: dictionary.ILLUSTRATION, txt: dictionary.ILLUSTRATION_TEXT, src: "/assets/icon-pencil.png" },
              { title: dictionary.DESIGN, txt: dictionary.DESIGN_TEXT, src: "/assets/icon-design.png" },
              { title: dictionary.ART_DIRECTION, txt: dictionary.ART_DIRECTION_TEXT, src: "/assets/icon-idea.png" }
            ].map((service, index) => (
              <div key={index} className="flex flex-col items-center space-y-4">
                <Image
                  src={service.src!}
                  alt={service.title}
                  width={200}
                  height={200}
                  className="object-contain"
                />
                <h3 className="text-xl font-medium">{service.title}</h3>
                <p>{service.txt}</p>
              </div>
            ))}
          </div>
        </section>

           <div className="flex justify-center my-12">
                    <Link href="/contact">
                      <Image
                        src={language === "pt" ? '/assets/contact-btn-br.png' : '/assets/contact-btn-eng.png'} 
                        alt="Contato" 
                        width={220} 
                        height={50} 
                        className="object-contain"
                      />
                    </Link>
                  </div>
      </main>

      <Footer />
    </div>
  )
}
