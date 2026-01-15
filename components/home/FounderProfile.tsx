import Image from "next/image";

interface FounderProfileProps {
  name: string;
  title: string;
  details: string;
  button: {
    label: string;
    href: string;
  };
  image: string;
  backgroundImage: string;
}

export default function FounderProfile({
  name,
  title,
  details,
  button,
  image,
  backgroundImage,
}: FounderProfileProps) {
  return (
    <section
      className="w-full bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="mx-auto max-w-[1320px]  px-8 py-8 lg:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Right Image (but mobile first) */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative w-full max-w-[420px]">
              <Image
                src={image}
                alt={name}
                width={420}
                height={520}
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Left Content */}
          <div className="order-last lg:order-first">
            <p className="text-lg tracking-widest text-gray-500 uppercase mb-2">
              {name}
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
              {title}
            </h2>

            <p className="text-gray-700 leading-relaxed mb-8 whitespace-pre-line">
              {details}
            </p>

            <a
              href={button.href}
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white text-md font-medium px-6 py-3 rounded transition"
            >
              {button.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
