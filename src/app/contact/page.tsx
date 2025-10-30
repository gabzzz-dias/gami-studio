"use client"

import { useContext, useState } from "react"
import Image from "next/image"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { LanguageContext } from "../utils/languageProvider"
import { LoadingOverlay } from "../components/loadingOverlay"
import { useLoading } from "../utils/loadingProvider"
import { toast } from 'react-hot-toast';

export default function ContactPage() {
    const { dictionary } = useContext(LanguageContext)
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

        fetch(apiEndpoint, {
            method: 'POST',
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.error) {
                    stopLoading("contact")
                    toast.error(dictionary.CONTACT_ERROR);
                    return;
                }
                stopLoading("contact")
                toast.success(dictionary.CONTACT_SUCCESS);
                return;
            })
            .catch((err) => {
                console.error(err);
                stopLoading("contact")
                toast.error(dictionary.CONTACT_ERROR);
                return;
            });
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <LoadingOverlay loadingKey="contact" />
            <div className="flex-1 px-4 pt-16 pb-8 bg-gami-beige w-full justify-center items-center">
                <div className="flex mx-auto px-4 py-12 justify-center items-center">
                    <div className="flex flex-col xl:flex-row gap-12 items-center">
                        <div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gami-text">{dictionary.CONTACT_TITLE}</h1>
                            <p className="text-gami-text text-lg md:text-xl mb-8">{dictionary.CONTACT_SUBTITLE}</p>


                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="rounded-md">
                                    <Input
                                        placeholder={dictionary.CONTACT_NAME}
                                        required
                                        className="border-gami-text focus:border-gami-text/90 rounded-md bg-white"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <Input type="email" placeholder={dictionary.CONTACT_EMAIL} required className="border-gami-text focus:border-gami-text/90 rounded-md bg-white" />
                                </div>

                                <div>
                                    <Textarea
                                        placeholder={dictionary.CONTACT_MESSAGE}
                                        required
                                        className="min-h-[200px] border-gami-text focus:border-gami-text/90 text-gray-600 rounded-md bg-white"
                                    />
                                </div>

                                <div className="flex justify-between items-center pt-6">
                                    <div className="flex flex-col border-l-2 border-gami-text px-2 justify-between h-14">
                                        <span className="text-gami-text text-md">oi.gamistudio@gmail.com</span>
                                        <span className="text-gami-text text-md">(11) 99442-5701</span>
                                    </div>
                                    <button
                                        className="bg-gami-primary text-white text-base hover:bg-gami-primary/90 -rotate-6 w-32 p-2 "
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        <span>{dictionary.BTN_SUBMIT}</span>
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="justify-center">
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

