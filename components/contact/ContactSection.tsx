"use client";

import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import Swal from "sweetalert2";

export default function ContactSection() {
  const form = useRef<HTMLFormElement>(null);
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
          setFormData({
            name: "",
            phone: "",
            email: "",
            serviceType: "",
            caseDescription: "",
          }); // Reset form
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
              {/* Address */}
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

              {/* Phone */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                <p className="text-gray-500 text-sm">+8801727145247</p>
              </div>

              {/* Email */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                <p className="text-gray-500 text-sm">parvez.hashem@gmail.com</p>
              </div>

              {/* Office Hours (optional add) */}
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
              {/* Row 1 */}
              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-gray-200 px-4 py-3 text-sm text-gray-900 outline-none "
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

              {/* Row 2 */}
              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full bg-gray-200 px-4 py-3 text-sm text-gray-900 outline-none "
                  required
                />
                <input
                  type="text"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  placeholder="Business Law"
                  className="w-full bg-gray-200 px-4 py-3 text-sm text-gray-900 outline-none "
                  required
                />
              </div>

              {/* Message */}
              <textarea
                name="caseDescription"
                value={formData.caseDescription}
                onChange={handleChange}
                placeholder="Case Description"
                rows={5}
                className="w-full bg-gray-200 px-4 py-3 text-sm text-gray-900 outline-none resize-none "
                required
              />

              {/* Button */}
              <button
                type="submit"
                className="bg-primary hover:bg-[#b4a36f] text-white px-8 py-3 text-sm font-medium transition duration-300"
              >
                Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
