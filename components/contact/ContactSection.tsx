"use client";

import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import Swal from "sweetalert2";

const SERVICE_ID = "service_e046rqt";
const TEMPLATE_ID = "template_90aw2qd"; // TODO: replace with your contact template ID once created
const PUBLIC_KEY = "KM4HJj4iFHnCM8EbS";

emailjs.init(PUBLIC_KEY);

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    caseDescription: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, {
        email: formData.email,
        phone: formData.phone,
        name: formData.name,
        consultFor: formData.serviceType,
        query: formData.caseDescription,
        time: new Date().toLocaleString("en-US", {
          dateStyle: "medium",
          timeStyle: "short",
        }),
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
          setFormData({
            name: "",
            phone: "",
            email: "",
            serviceType: "",
            caseDescription: "",
          });
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
    <section className="w-full py-20">
      <div className="max-w-[1320px] mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Side - Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Our Contacts
            </h2>

            <p className="text-gray-500 mb-10 leading-relaxed">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                <p className="text-gray-500 text-sm">
                  House No. 35, 3rd Floor, Road No-4,
                  <br />
                  Block-F, Kalwalapara (Main Road)
                  <br />
                  Mirpur-1, Dhaka 1216, Bangladesh
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                <p className="text-gray-500 text-sm">+8801727145247</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                <p className="text-gray-500 text-sm">parvez.hashem@gmail.com</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  Working Hours
                </h4>
                <p className="text-gray-500 text-sm">
                  Saturday to Thursday: 9:00 AM – 9:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-8 text-gray-800">
              Quick Contact Now
            </h2>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-gray-200 px-4 py-3 text-sm text-gray-900 outline-none"
                  required
                />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full bg-gray-200 px-4 py-3 text-sm text-gray-900 outline-none"
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full bg-gray-200 px-4 py-3 text-sm text-gray-900 outline-none"
                  required
                />
                <input
                  type="text"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  placeholder="Business Law"
                  className="w-full bg-gray-200 px-4 py-3 text-sm text-gray-900 outline-none"
                  required
                />
              </div>

              <textarea
                name="caseDescription"
                value={formData.caseDescription}
                onChange={handleChange}
                placeholder="Case Description"
                rows={5}
                className="w-full bg-gray-200 px-4 py-3 text-sm text-gray-900 outline-none resize-none"
                required
              />

              <button
                type="submit"
                disabled={loading}
                style={{ width: "200px" }}
                className="bg-primary hover:bg-[#b4a36f] disabled:opacity-70 disabled:cursor-not-allowed text-white py-3 text-sm font-medium transition duration-300 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4 text-white"
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
                  "Appointment"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
