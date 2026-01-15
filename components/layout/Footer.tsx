"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#1f2a44] text-white">
      {/* Background map overlay (optional) */}
      <div className="absolute inset-0 bg-[url('/images/home/why-choose/blue-map.jpg')] bg-cover bg-center " />

      <div className="relative max-w-[1320px] mx-auto px-6 py-16">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div className="space-y-4">
            <Image
              src="/images/header/footer_logo.png"
              alt="Lexmates"
              width={190}
              height={60}
            />
            <p className="text-sm leading-relaxed text-gray-300">
              Lexmates is a Dhaka Based Law Firm which employs a team of
              excellent and hardworking Advocates, Legal Consultant and Advisers
              to provide top-notch legal representation and advice to its
              clients.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Details</h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              House No. 35, 3rd Floor, Road No-4,
              <br />
              Block-F, Kalwalapara (Main Road)
              <br />
              Mirpur-1, Dhaka 1216, Bangladesh
            </p>
            <p className="text-sm text-gray-300">Phone: +8801727145247</p>
            <p className="text-sm text-gray-300">parvez.hashem@gmail.com</p>
            <p className="text-sm text-gray-300">Saturday to Thursday 9 to 9</p>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Useful Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Disclaimer</Link>
              </li>
              <li>
                <Link href="#">Supreme Court</Link>
              </li>
              <li>
                <Link href="#">Judicial Portal Bangladesh</Link>
              </li>
              <li>
                <Link href="#">NBR</Link>
              </li>
              <li>
                <Link href="#">Laws of Bangladesh</Link>
              </li>
              <li>
                <Link href="#">FAQ</Link>
              </li>
              <li>
                <Link href="#">Press</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Land & Real Estate</li>
              <li>Income Tax, VAT & Custom</li>
              <li>Civil Service</li>
              <li>Family Matter</li>
              <li>Criminal Cases</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-500/30 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © Copyright Lexmates 2026. All Right Reserved.
          </p>

          <Link
            href="#"
            className="w-8 h-8 flex items-center justify-center bg-white text-[#1f2a44] rounded"
          >
            <FaFacebookF />
          </Link>
        </div>
      </div>
    </footer>
  );
}
