import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="w-full">
      <div className="max-w-[1320px] mx-auto px-8 py-8 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Side */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[500px]">
              <Image
                src="/images/about/lawer.png"
                alt="About"
                width={1000}
                height={800}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              About Us
            </h2>

            <p className="text-gray-500 leading-relaxed mb-6">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor.
            </p>

            <p className="text-gray-500 leading-relaxed mb-8">
              and going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections
              1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot;.
            </p>

            <Link
              href="/about"
              className="inline-block bg-[#c2b280] hover:bg-[#b4a36f] text-white px-6 py-3 text-sm font-medium transition duration-300"
            >
              More About Us
            </Link>

            {/* Signature */}
            <div className="mt-8">
              <Image
                src="/images/about/sign.png"
                alt="Signature"
                width={1000}
                height={800}
                className="w-[200px] h-auto"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
