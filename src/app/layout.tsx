"use client"

import './globals.css'
import React from 'react'
import { Gabarito } from "next/font/google"
import { LanguageProvider } from './utils/languageProvider'
import { LoadingProvider } from './utils/loadingProvider'
import { Toaster } from "react-hot-toast";
import { cn } from '@/app/lib/utils';

const gabarito = Gabarito({
  subsets: ["latin"],
  weight: ["400", "500", "800"],
  variable: "--font-gabarito",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/assets/favicon.png" />
        <title>Gami Studio</title>
      </head>
      <LanguageProvider>
        <LoadingProvider>
          <body
            className={cn(
              "min-h-screen bg-gami-beige text-gami-text font-sans antialiased",
              gabarito.variable
            )}
          >
            <Toaster position='bottom-center' />
            {children}
          </body>
        </LoadingProvider>
      </LanguageProvider>
    </html>
  )
}