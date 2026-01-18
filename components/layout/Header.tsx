"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* Fixed Header */}
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
              <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase text-gray-700">
                <Link href="/" className="hover:text-blue-600">
                  Home
                </Link>
                <Link href="/about" className="hover:text-blue-600">
                  About Us
                </Link>
                <Link href="/service" className="hover:text-blue-600">
                  Services
                </Link>
                <Link href="/blog" className="hover:text-blue-600">
                  Blog
                </Link>
                <Link href="/links" className="hover:text-blue-600">
                  Useful Links
                </Link>
                <Link href="/contact" className="hover:text-blue-600">
                  Contact Us
                </Link>
              </nav>

              {/* Mobile Toggle */}
              <button
                onClick={() => setOpen(!open)}
                className="md:hidden"
                aria-label="Toggle Menu"
              >
                {open ? (
                  <X size={28} className="text-black" />
                ) : (
                  <Menu size={28} className="text-black" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden border-t border-gray-200 bg-white">
              <nav className="flex flex-col gap-4 px-4 py-6 text-sm font-medium uppercase text-gray-700">
                <Link href="/" onClick={() => setOpen(false)}>
                  Home
                </Link>
                <Link href="/about" onClick={() => setOpen(false)}>
                  About Us
                </Link>
                <Link href="/service" onClick={() => setOpen(false)}>
                  Services
                </Link>
                <Link href="/blog" onClick={() => setOpen(false)}>
                  Blog
                </Link>
                <Link href="/links" onClick={() => setOpen(false)}>
                  Useful Links
                </Link>
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Contact Us
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-[112px]" />
    </>
  );
}
