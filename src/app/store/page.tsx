'use client'
import React, { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function About() {
  const [lang, setLang] = useState<"pt" | "en">("pt")

  const texts = {
    pt: {},
    en: {}
  } as const

  return (
    <div className="min-h-screen flex flex-col bg-orange-100">

      <Header />
      
      
      <main className="container mx-auto px-4 flex-1 flex flex-col">
       
      </main>

      <Footer />
    </div>
  )
}
