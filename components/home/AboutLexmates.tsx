import Image from "next/image";

export default function AboutLexmates() {
  return (
    <section className="w-full bg-[#F8F9FBFB]">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-10">
          {/* Left: Image */}

          <div className=" w-full max-w-xl">
            <Image
              src="/images/home/about/img.png"
              alt="Lexmates Advocates & Legal Advisers"
              width={1000}
              height={800}
              className="object-contain w-full "
              priority
            />
          </div>

          {/* Right: Content */}
          <div className="text-gray-800 text-base leading-relaxed w-full  mx-auto flex-1">
            <p className="mb-4">
              Lexmates is a Dhaka based Law Firm to provide you with the most
              experienced and well-trained lawyers in Bangladesh. Are you
              dealing with a legal situation and have not found the solution
              yet? Don’t worry!Lexmates with footprints spread across the
              country are capable of satisfying any legal requirement anywhere
              in the country. Lexmates provides one-stop legal services to
              corporates in 40 practice areas and each practice area is headed
              by highly experienced Advocates and legal professionals. The
              Litigation Division manages legal disputes in all kinds of courts
              and tribunals ranging from the subordinate courts to the Supreme
              Court of Bangladesh. Lexmates is also a melting bowl of
              experienced legal talents engaged in the fields of civil,
              criminal, writ, corporate transactions, infrastructure, project
              finance, intellectual property, real estate, etc. This unique
              symbiosis of lawyers experienced in various fields of law, both
              litigation and non-litigation, makes Lexmates a true “One Stop”
              law firm to resolve all legal needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
