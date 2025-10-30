"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gami-green-dark text-white py-4 w-full">
            <div className="container mx-auto px-4 text-center text-sm">
                ©Gami Studio 2025 | Powered by{" "}
                <Link
                    href={"https://linktr.ee/gabzzz_dias"}
                    target="_blank"
                    className="underline hover:text-white/80"
                >
                    gabzzz
                </Link>
            </div>
        </footer>
    );
}