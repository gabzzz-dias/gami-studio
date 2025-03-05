'use client'
import React, { useContext, useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Image from "next/image"
import { LanguageContext } from "../utils/languageProvider"

export default function About() {
  const [lang, setLang] = useState<"pt" | "en">("pt")
  const {dictionary} = useContext(LanguageContext)

  const texts = {
    pt: {},
    en: {}
  } as const

  return (
    <div className="min-h-screen flex flex-col bg-white">

      <Header />
      
      
      <main className="container mx-auto px-4 flex-1 flex flex-col justify-center items-center">
        <h1 className="text-[#e78000] text-2xl">{dictionary.COMING}</h1>
       <Image
        src="/assets/store-img.png"
        alt="Store"
        width={500}
        height={500}
       />
      </main>

      <Footer />
    </div>
  )
}
