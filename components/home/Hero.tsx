"use client";

import emailjs from "emailjs-com";
import Image from "next/image";
import { useState } from "react";
import Swal from "sweetalert2";

const SERVICE_ID = "service_e046rqt";
const TEMPLATE_ID = "template_90aw2qd";
const PUBLIC_KEY = "KM4HJj4iFHnCM8EbS";

emailjs.init(PUBLIC_KEY);

export default function Hero() {
  const [loading, setLoading] = useState(false);
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
    setLoading(true);

    const submittedAt = new Date().toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, {
        email: formData.email,
        phone: formData.phone,
        consultFor: formData.consultFor,
        query: formData.query,
        time: submittedAt,
      })
      .then(
        () => {
          setLoading(false);
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Your message has been sent successfully!",
            confirmButtonText: "OK",
            didOpen: () => {
              const button = document.querySelector(
                ".swal2-confirm",
              ) as HTMLElement;
              if (button) button.style.backgroundColor = "#3b5b82";
            },
          });
          setFormData({ email: "", phone: "", consultFor: "", query: "" });
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS error:", error);
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Failed to send message. Please try again.",
            confirmButtonText: "OK",
            didOpen: () => {
              const button = document.querySelector(
                ".swal2-confirm",
              ) as HTMLElement;
              if (button) button.style.backgroundColor = "#dc2626";
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

          <form onSubmit={sendEmail} className="space-y-4">
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
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded bg-orange-500 py-3 text-sm font-semibold uppercase text-white hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <>
                  <svg
                    className="h-4 w-4 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Request"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
