"use client";

import Link from "next/link";

export default function Footer() {

  return (
    <footer className="bg-[#e78000] text-white py-4">
      <div className="container mx-auto px-4 text-center">©Gami Studio 2025 | Powered by <Link href={"https://linktr.ee/gabzzz_dias"} target="_blank" className="underline">gabzzz</Link></div>
    </footer>
  );
}
