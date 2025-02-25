"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Ícones do menu mobile

interface MenuItem {
  url: string;
  title: string;
}

const menuItems: MenuItem[] = [
  { url: "/", title: "Sobre" },
  { url: "/pilares", title: "Pilares" },
  { url: "/beneficios", title: "Benefícios" },
  { url: "/etapas", title: "Etapas" },
  { url: "/depoimentos", title: "Depoimentos" },
  { url: "/duvidas", title: "Dúvidas" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 w-full h-[80px] z-50 bg-black text-white flex items-center">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-10 w-full">
        {/* Logo */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="/">
            <Image
              src="/logo.svg"
              width={180}
              height={30}
              alt="Logo Union Developers"
              className=""
            />
          </Link>

          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map(({ url, title }, index) => (
            <Link
              key={index}
              href={url}
              className="relative text-white transition-all group"
            >
              <span className="group-hover:bg-gradient-to-r group-hover:from-[#0048FE] group-hover:to-[#851D86] group-hover:bg-clip-text group-hover:text-transparent">
                {title}
              </span>
            </Link>
          ))}
        </nav>

        <Link href="/junte" className="hidden md:block">
          <button className="bg-gradient-to-r from-[#0048FE] to-[#851D86] text-white font-bold py-2 px-6 rounded-lg transition-all hover:opacity-90">
            Junte-se a nós
          </button>
        </Link>
      </div>

      {menuOpen && (
        <nav className="absolute top-[80px] left-0 w-full bg-black flex flex-col items-center gap-4 py-4 md:hidden">
          {menuItems.map(({ url, title }, index) => (
            <Link
              key={index}
              href={url}
              className="text-white text-lg hover:text-green-400"
              onClick={() => setMenuOpen(false)}
            >
              {title}
            </Link>
          ))}

          <Link href="/junte" onClick={() => setMenuOpen(false)}>
            <button className="bg-gradient-to-r from-[#0048FE] to-[#851D86] text-white font-bold py-2 px-6 rounded-lg transition-all hover:opacity-90">
              Junte-se a nós
            </button>
          </Link>
        </nav>
      )}
    </header>
  );
}
