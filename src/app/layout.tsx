"use client"

import './globals.css'
import React from 'react'
import { Gabarito } from "next/font/google"
import { LanguageProvider } from './utils/languageProvider'
import { LoadingProvider } from './utils/loadingProvider'
import { Toaster } from "react-hot-toast";

const gabarito = Gabarito({ subsets: ["latin"] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <LanguageProvider>
        <LoadingProvider>
          <body className={`${gabarito.className}`}>
            <Toaster position='bottom-center' />
            {children}
          </body>
        </LoadingProvider>
      </LanguageProvider>
    </html>
  )
}