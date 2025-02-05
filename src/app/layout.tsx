import './globals.css'
import React from 'react'
import { Gabarito } from "next/font/google"

const gabarito = Gabarito({ subsets: ["latin"] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${gabarito.className}`}>{children}</body>
    </html>
  )
}