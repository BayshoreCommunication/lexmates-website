export default function ContactSection() {
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
                  245 King Street, Touterie Victoria 8520 Australia
                </p>
              </div>

              {/* Phone */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                <p className="text-gray-500 text-sm">
                  0-123-456-7890 <br />
                  0-123-456-7892
                </p>
              </div>

              {/* Email */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                <p className="text-gray-500 text-sm">
                  sample@gmail.com <br />
                  demo@gmail.com
                </p>
              </div>

            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-8 text-gray-800">
              Quick Contact Now
            </h2>

            <form className="space-y-6">

              {/* Row 1 */}
              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full bg-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Row 2 */}
              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="text"
                  placeholder="Business Law"
                  className="w-full bg-gray-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Message */}
              <textarea
                placeholder="Case Description"
                rows={5}
                className="w-full bg-gray-200 px-4 py-3 text-sm outline-none resize-none focus:ring-2 focus:ring-orange-500"
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
