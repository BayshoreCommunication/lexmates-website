"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavLink {
  name: string;
  path?: string;
  dropdown?: { name: string; path: string }[];
}

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const navLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/service" },
    { name: "Blog", path: "/blog" },
    {
      name: "Useful Links",
      dropdown: [
        {
          name: "Supreme Court of Bangladesh",
          path: "https://www.supremecourt.gov.bd/web/",
        },
        {
          name: "Bangladesh Judiciary",
          path: "http://www.judiciary.org.bd/",
        },
        {
          name: "Bangladesh Laws",
          path: "http://bdlaws.minlaw.gov.bd/",
        },
      ],
    },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActive = (path?: string): boolean => {
    if (!path) return false;
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
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
                {navLinks.map((link, index) =>
                  link.dropdown ? (
                    <div key={index} className="relative group">
                      <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition text-sm font-medium uppercase">
                        {link.name}
                        <ChevronDown size={16} />
                      </button>

                      {/* Dropdown */}
                      {/* Dropdown */}
                      <div className="absolute left-0 mt-3 w-64 rounded-lg border border-gray-200 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <ul className="py-2 text-sm font-medium uppercase">
                          {link.dropdown.map((item, i) => (
                            <li key={i}>
                              <a
                                href={item.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-2 text-gray-700 hover:text-blue-600 transition"
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={index}
                      href={link.path!}
                      className={`transition ${
                        isActive(link.path)
                          ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                          : "text-gray-700 hover:text-blue-600"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ),
                )}
              </nav>

              {/* Mobile Toggle */}
              <button
                onClick={() => setOpen(!open)}
                className="md:hidden"
                aria-label="Toggle Menu"
              >
                {open ? (
                  <X size={28} />
                ) : (
                  <Menu size={28} className="text-black" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden border-t border-gray-200 bg-white">
              <nav className="flex flex-col gap-4 px-4 py-6 text-sm font-medium uppercase">
                {navLinks.map((link, index) =>
                  link.dropdown ? (
                    <div key={index}>
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex w-full items-center justify-between text-gray-700 ext-sm font-medium uppercase"
                      >
                        {link.name}
                        <ChevronDown size={16} />
                      </button>

                      {dropdownOpen && (
                        <div className="mt-2 ml-4 flex flex-col gap-2 text-sm font-medium uppercase">
                          {link.dropdown.map((item, i) => (
                            <a
                              key={i}
                              href={item.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-700 hover:text-blue-600 transition"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={index}
                      href={link.path!}
                      onClick={() => setOpen(false)}
                      className={
                        isActive(link.path)
                          ? "text-blue-600 font-semibold"
                          : "text-gray-700"
                      }
                    >
                      {link.name}
                    </Link>
                  ),
                )}
              </nav>
            </div>
          )}
        </div>
      </header>

      <div className="h-[112px]" />
    </>
  );
}
