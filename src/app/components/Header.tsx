"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/app/components/ui/sheet";
import { Button } from "@/app/components/ui/button";
import { LanguageContext } from "../utils/languageProvider";
import { cn } from "../lib/utils";
import { BsBehance, BsInstagram, BsLinkedin } from "react-icons/bs";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, isActive }: {
    href: string,
    children: React.ReactNode,
    isActive: boolean
}) => (
    <Link
        href={href}
        className={cn(
            "font-medium transition-colors",
            isActive && "underline decoration-2 underline-offset-4",
            href === "/contact"
                ? "text-gami-green-light hover:text-gami-green-dark"
                : "text-gami-text hover:text-gami-green-dark"
        )}
    >
        {children}
    </Link>
);

export default function Header() {
    const [open, setOpen] = useState(false);
    const { dictionary, userLanguageChange, language } = useContext(LanguageContext);
    const pathname = usePathname();

    const navLinks = [
        { href: "/", label: dictionary.HOME.toLowerCase() },
        { href: "/about", label: dictionary.ABOUT.toLowerCase() },
        { href: "/projects", label: dictionary.PROJECTS.toLowerCase() },
        { href: "/contact", label: dictionary.CONTACT.toLowerCase() },
    ];

    return (
        <header className="w-full bg-gami-beige fixed top-0 left-0 right-0 z-50">
            <nav className="mx-auto px-4 md:px-10 w-full py-4 flex items-center justify-between">

                <Link href="/" className="text-3xl lg:text-4xl md:self-start font-extrabold text-gami-text">
                    GamiStudio
                </Link>

                <div className="hidden lg:flex font-medium text-lg items-center gap-6">
                    <Link
                        href="/"
                        className={cn(
                            "text-gami-text hover:text-gami-green-dark",
                            pathname === "/" && "underline decoration-2 underline-offset-4"
                        )}
                    >
                        {dictionary.HOME.toLowerCase()}
                    </Link>
                    <Link
                        href="/about"
                        className={cn(
                            "text-gami-text hover:text-gami-green-dark",
                            pathname === "/about" && "underline decoration-2 underline-offset-4"
                        )}
                    >
                        {dictionary.ABOUT.toLowerCase()}
                    </Link>
                    <Link
                        href="/projects"
                        className={cn(
                            "text-gami-text hover:text-gami-green-dark",
                            pathname === "/projects" && "underline decoration-2 underline-offset-4"
                        )}
                    >
                        {dictionary.PROJECTS.toLowerCase()}
                    </Link>
                    <Link
                        href="/contact"
                        className={cn(
                            "text-gami-green-light hover:text-gami-green-dark",
                            pathname === "/contact" && "underline decoration-2 underline-offset-4"
                        )}
                    >
                        {dictionary.CONTACT.toLowerCase()}
                    </Link>
                </div>

                <div className="hidden lg:flex justify-around gap-10 font-medium text-gami-text">
                    <div className="flex space-x-4">
                        <Link target="blank" href="https://www.instagram.com/oi.gami/" className="text-gami-text hover:text-gami-green-dark">
                            <BsInstagram className="h-5 w-5" />
                        </Link>
                        <Link target="blank" href="https://www.behance.net/oigamistudio" className="text-gami-text hover:text-gami-green-dark">
                            <BsBehance className="h-5 w-5" />
                        </Link>
                        {/* <Link target="blank" href="https://www.linkedin.com/in/gabriela-mello-arte/" className="text-gami-text hover:text-gami-green-dark">
                            <BsLinkedin className="h-5 w-5" />
                        </Link> */}
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => userLanguageChange("pt")}
                            className={cn(language === "pt" ? "font-extrabold" : "hover:text-gami-green-dark")}
                        >
                            PT
                        </button>
                        <span>|</span>
                        <button
                            onClick={() => userLanguageChange("en")}
                            className={cn(language === "en" ? "font-extrabold" : "hover:text-gami-green-dark")}
                        >
                            EN
                        </button>
                    </div>
                </div>

                <div className="lg:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6 text-gami-text" />
                                <span className="sr-only">Abrir menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-full max-w-sm bg-gami-beige">
                            <div className="flex flex-col h-full p-10">

                                <nav className="flex flex-col gap-6 text-xl">

                                    {navLinks.map((link) => (
                                        <SheetClose asChild key={link.href}>
                                            <NavLink
                                                href={link.href}
                                                isActive={pathname === link.href}
                                            >
                                                {link.label}
                                            </NavLink>
                                        </SheetClose>
                                    ))}
                                </nav>

                                <div className="mt-auto flex flex-col justify-around items-center">

                                    <div className="flex space-x-4">
                                        <Link target="blank" href="https://www.instagram.com/oi.gami/" className="text-gami-text hover:text-gami-green-dark">
                                            <BsInstagram className="h-6 w-6" />
                                        </Link>
                                        <Link target="blank" href="https://www.behance.net/oigamistudio" className="text-gami-text hover:text-gami-green-dark">
                                            <BsBehance className="h-6 w-6" />
                                        </Link>
                                        {/* <Link target="blank" href="https://www.linkedin.com/in/gabriela-mello-arte/" className="text-gray-500 hover:text-gray-600">
                                            <BsLinkedin className="h-6 w-6" />
                                        </Link> */}
                                    </div>

                                    <div className="mt-10 flex justify-center items-center gap-4 text-xl font-medium text-gami-text">
                                        <button
                                            onClick={() => userLanguageChange("pt")}
                                            className={cn(language === "pt" ? "font-extrabold" : "hover:text-gami-green-dark")}
                                        >
                                            PT
                                        </button>
                                        <span className="text-gray-300">|</span>
                                        <button
                                            onClick={() => userLanguageChange("en")}
                                            className={cn(language === "en" ? "font-extrabold" : "hover:ttext-gami-green-dark")}
                                        >
                                            EN
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
}