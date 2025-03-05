"use client"

import { useContext, useState } from "react"
import Image from "next/image"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { LanguageContext } from "../utils/languageProvider"
import { Button } from "../components/ui/button"
import { LoadingOverlay } from "../components/loadingOverlay"
import { useLoading } from "../utils/loadingProvider"
import { toast } from 'react-hot-toast';

export default function ContactPage() {
  const { dictionary, language } = useContext(LanguageContext)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { startLoading, stopLoading } = useLoading()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    sendEmail({
      name: (event.currentTarget.elements[0] as HTMLInputElement).value,
      email: (event.currentTarget.elements[1] as HTMLInputElement).value,
      message: (event.currentTarget.elements[2] as HTMLTextAreaElement).value,
    })

    setIsSubmitting(false)
    event.currentTarget.reset()
  }

  async function sendEmail(data: { name: string; email: string; message: string }) {
    startLoading("contact")

    const apiEndpoint = '/api/email';

    console.log(data, "dataaaaaa");

    fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.error) {
          stopLoading("contact")
          toast.error(dictionary.ERROR);
          return;
        }
        stopLoading("contact")
        toast.success(dictionary.SUCCESS);
        return;
      })
      .catch((err) => {
        console.error(err);
        stopLoading("contact")
        toast.error(dictionary.ERROR);
        return;
      });
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <LoadingOverlay loadingKey="contact" />
      <div className="flex-grow px-4 py-6 bg-white w-full">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-xl font-bold mb-8 text-gray-800">{dictionary.LETS_TALK}</h1>


              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder={dictionary.NAME}
                    required
                    className="border-pink-300 focus:border-pink-500"
                  />
                </div>

                <div className="space-y-4">
                  <Input type="email" placeholder="Email" required className="border-pink-300 focus:border-pink-500" />
                </div>

                <div>
                  <Textarea
                    placeholder={dictionary.MESSAGE}
                    required
                    className="min-h-[200px] border-pink-300 focus:border-pink-500 text-gray-600"
                  />
                </div>

                <div className="flex justify-center">
                  <Button
                    type="submit"
                    className="my-2"
                    disabled={isSubmitting}
                  >
                    <Image src={language === "pt" ? '/assets/send-btn-v2-pt.png' : '/assets/send-btn-v2-eng.png'} alt="Contato" width={150} height={50} className="object-contain" />
                  </Button>
                </div>
              </form>
            </div>

            <div className="hidden md:flex justify-center">
              <Image
                src="/assets/contact-img.png"
                alt="Ilustração de envelope"
                width={500}
                height={500}
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

