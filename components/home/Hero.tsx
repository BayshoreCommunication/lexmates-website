"use client";

import emailjs from "emailjs-com";
import Image from "next/image";
import { useRef, useState } from "react";
import Swal from "sweetalert2";

export default function Hero() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    consultFor: "",
    query: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        form.current,
        "YOUR_PUBLIC_KEY", // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Your message has been sent successfully!",
            confirmButtonColor: "#3b5b82",
            confirmButtonText: "OK",
          });
          setFormData({ email: "", phone: "", consultFor: "", query: "" }); // Reset form
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Failed to send message. Please try again.",
            confirmButtonText: "OK",
            didOpen: () => {
              const button = document.querySelector(
                ".swal2-confirm",
              ) as HTMLElement;
              if (button) {
                button.style.backgroundColor = "#dc2626";
              }
            },
          });
        },
      );
  };

  return (
    <section className="relative  w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/home/hero/hero-bg1.jpg"
        alt="City Background"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/20" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[90vh] flex-col items-center justify-center px-4">
        <h1 className="mb-10 max-w-4xl text-center text-3xl font-semibold italic text-[#3b5b82] md:text-4xl lg:text-5xl">
          “A passion for justice. The experience for win”
        </h1>

        <div className="w-full max-w-xl rounded-md bg-white p-8 shadow-lg md:p-10">
          <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800">
            Request Free Consultation
          </h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your E-mail"
              className="w-full rounded border px-4 py-3 text-sm text-gray-900 focus:border-blue-600 focus:outline-none"
              required
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter Your Phone number"
              className="w-full rounded border px-4 py-3 text-sm text-gray-900 focus:border-blue-600 focus:outline-none"
              required
            />

            <input
              type="text"
              name="consultFor"
              value={formData.consultFor}
              onChange={handleChange}
              placeholder="Consult For"
              className="w-full rounded border px-4 py-3 text-sm text-gray-900 focus:border-blue-600 focus:outline-none"
              required
            />

            <textarea
              rows={4}
              name="query"
              value={formData.query}
              onChange={handleChange}
              placeholder="Enter Your Query"
              className="w-full resize-none rounded border px-4 py-3 text-sm text-gray-900 focus:border-blue-600 focus:outline-none"
              required
            />

            <button
              type="submit"
              className="w-full rounded bg-orange-500 py-3 text-sm font-semibold uppercase text-white hover:bg-orange-600"
            >
              Send Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
