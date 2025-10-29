"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { Instagram, DribbbleIcon as Behance, Linkedin, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet"
import { Button } from "./ui/button";
import { BsBehance } from "react-icons/bs";
import { LanguageContext } from "../utils/languageProvider";

export default function Header() {
  const [open, setOpen] = useState(false)
  const { dictionary, userLanguageChange, language } = useContext(LanguageContext)

  return (
    <header className="mx-auto px-6 md:px-20 py-6 flex md:flex-col md:items-center justify-between bg-white w-full min-w-screen">


      <div className="flex items-center justify-between w-full">


        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="default">
              <Menu className="h-8 w-8 text-[#e78000]" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full bg-black opacity-60 h-full flex items-center justify-center text-center">
            <nav className="flex flex-col space-y-8">
             
                <Link href="/" className="text-xl font-medium transition-colors hover:text-[#e78000]">
                  {dictionary.HOME}
                </Link>
                <Link href="/about" className="text-xl font-medium transition-colors hover:text-[#e78000]">
                  {dictionary.ABOUT}
                </Link>
                <Link href="/contact" className="text-xl font-medium transition-colors hover:text-[#e78000]">
                  {dictionary.CONTACT}
                </Link>
                <Link href="/store" className="text-xl font-medium transition-colors hover:text-green-700">
                  {dictionary.STORE}
                </Link>
           

              <div className="flex flex-col items-center justify-center space-y-4">

                <div className="flex flex-1 items-center space-x-2 pt-4 border-t text-lg">
                  <button onClick={() => userLanguageChange("pt")} className={`hover:text-gray-600 ${language === "pt" ? "font-bold" : ""}`}>
                    PT
                  </button>
                  <span>|</span>
                  <button onClick={() => userLanguageChange("en")} className={`hover:text-gray-600 ${language === "en" ? "font-bold" : ""}`}>
                    EN
                  </button>
                </div>

                <div className="flex space-x-4">
                  <Link target="blank" href="https://www.instagram.com/oi.gami/" className="text-gray-500 hover:text-gray-600">
                    <Instagram className="h-6 w-6" />
                  </Link>
                  <Link target="blank" href="https://www.behance.net/oigamistudio" className="text-gray-500 hover:text-gray-600">
                    <BsBehance className="h-6 w-6" />
                  </Link>
                  <Link target="blank" href="https://www.linkedin.com/in/gabriela-mello-arte/" className="text-gray-500 hover:text-gray-600">
                    <Linkedin className="h-6 w-6" />
                  </Link>
                </div>
              </div>

            </nav>
          </SheetContent>
        </Sheet>


        <div id="1" className="flex justify-center flex-1">
          <Link href="/" className="flex items-center space-x-2">
            <Image src={'/assets/new-logo.png'} alt="Gami Studio Logo" width={300} height={160} className="object-contain" />
          </Link>
        </div>

        <div id="2" className="hidden md:flex flex-col ml-auto items-center space-y-3">

          <div className="flex space-x-4">
            <Link target="blank" href="https://www.instagram.com/oi.gami/" className="text-gray-500 hover:text-gray-600">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link target="blank" href="https://www.behance.net/oigamistudio" className="text-gray-500 hover:text-gray-600">
              <BsBehance className="h-5 w-5" />
            </Link>
            <Link target="blank" href="https://www.linkedin.com/in/gabriela-mello-arte/" className="text-gray-500 hover:text-gray-600">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>

          <div className="text-gray-400 space-x-2">
            <button onClick={() => userLanguageChange("pt")} className={`hover:text-gray-600 ${language === "pt" ? "font-bold" : ""}`}>
              PT
            </button>
            <span>|</span>
            <button onClick={() => userLanguageChange("en")} className={`hover:text-gray-600 ${language === "en" ? "font-bold" : ""}`}>
              EN
            </button>
          </div>

        </div>

      </div>

      <div id="3" className="flex items-center mt-4">
        <nav className="hidden md:flex space-x-24 text-lg">
          <Link href="/" className="text-[#e78000] hover:text-orange-600 hover:scale-102">
            {dictionary.HOME}
          </Link>
          <Link href="/about" className="text-[#e78000] hover:text-orange-600 hover:scale-102">
            {dictionary.ABOUT}
          </Link>
          <Link href="/contact" className="text-[#e78000] hover:text-orange-600 hover:scale-102">
            {dictionary.CONTACT}
          </Link>
          <Link href="/store" className="text-green-600 hover:text-green-700 hover:scale-102">
            {dictionary.STORE}
          </Link>
        </nav>
      </div>
    </header>
  );
}
