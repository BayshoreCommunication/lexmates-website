"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Menu, X } from "lucide-react";

interface NavLink {
  name: string;
  path: string;
}

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  // ✅ Properly Typed
  const navLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/service" },
    { name: "Blog", path: "/blog" },
    { name: "Useful Links", path: "/links" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActive = (path: string): boolean => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
        {/* Top Info Bar */}
        <div className="bg-gray-50 text-sm text-gray-700">
          <div className="mx-auto max-w-[1320px] px-4">
            <div className="flex flex-col gap-2 py-2 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>
                  House No-35, 3rd Floor, Road No-4, Block-F, Kalwalapara,
                  Mirpur-1, Dhaka 1216
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <a href="tel:+8801727145247">+8801727145247</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <a href="mailto:parvez.hashem@gmail.com">
                    parvez.hashem@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="bg-white">
          <div className="mx-auto max-w-[1320px] px-4">
            <div className="flex h-20 items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/header/logo.png"
                  alt="Le Mates"
                  width={170}
                  height={50}
                  priority
                />
              </Link>

              {/* Desktop Menu */}
              <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase">
                {navLinks.map((link: NavLink) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`transition ${
                      isActive(link.path)
                        ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Mobile Toggle */}
              <button
                onClick={() => setOpen(!open)}
                className="md:hidden"
                aria-label="Toggle Menu"
              >
                {open ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden border-t border-gray-200 bg-white">
              <nav className="flex flex-col gap-4 px-4 py-6 text-sm font-medium uppercase">
                {navLinks.map((link: NavLink) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setOpen(false)}
                    className={
                      isActive(link.path)
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700"
                    }
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      <div className="h-[112px]" />
    </>
  );
}
