"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { useToast } from "../components/ui/use-toast"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    // Here you would typically send the form data to your backend
    await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call

    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    })

    setIsSubmitting(false)
    event.currentTarget.reset()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow px-4 py-6 bg-white w-full">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-xl font-bold mb-8 text-gray-800">VAMOS CONVERSAR?</h1>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input placeholder="Seu nome" required className="border-pink-300 focus:border-pink-500" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input type="email" placeholder="Email" required className="border-pink-300 focus:border-pink-500" />
                  <Input type="tel" placeholder="Telefone" className="border-pink-300 focus:border-pink-500" />
                </div>

                <div>
                  <Textarea
                    placeholder="Descreva sua ideia"
                    required
                    className="min-h-[200px] border-pink-300 focus:border-pink-500"
                  />
                </div>

                <div className="flex justify-center">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#FF9800] hover:bg-[#FB8C00] text-white px-12 py-6 rounded-full text-lg font-medium"
                  >
                    {isSubmitting ? "ENVIANDO..." : "ENVIAR"}
                  </Button>
                </div>
              </form>
            </div>

            <div className="hidden md:flex justify-center">
              <Image
                src=""
                alt="Ilustração de envelope"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

