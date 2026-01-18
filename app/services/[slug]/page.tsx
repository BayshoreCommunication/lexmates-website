import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/shared/Breadcrumb";

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug];

  if (!service) {
    notFound();
  }

  // Get all services except the current one for related services
  const relatedServices = Object.entries(servicesData)
    .filter(([key]) => key !== params.slug)
    .slice(0, 5) // Limit to 5 related services
    .map(([key, value]) => ({
      slug: key,
      name: value.name
    }));

  return (
    <>
      <Breadcrumb
        title="Service"
        imageSrc= "/images/breadcrumb/service-bg.png"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Service", href: "/services" },
          { label: service.name }, // Changed from service.title to service.name
        ]}
      />

      <section className="max-w-[1320px] mx-auto px-8 py-8 md:my-8 grid grid-cols-1 lg:grid-cols-4 gap-10">
        
        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-8">
          
          {/* Experience Card */}
          <div className="relative overflow-hidden rounded-md">
            <Image
              src="/images/home/service/title-img.png"
              alt="Experience"
              width={1000}
              height={800}
              className="object-contain"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white text-center p-8">
              <h3 className="text-4xl font-bold mb-2">25 Years of</h3>
              <p className="mb-4 text-4xl">Experience In This Field</p>
              <Link
                href="/contact"
                className="bg-orange-500 hover:bg-orange-600 transition px-4 py-2 text-sm font-semibold rounded"
              >
                Contact Us Now
              </Link>
            </div>
          </div>

          {/* Related Services (Dynamic) */}
          <div>
            <h4 className="text-lg font-semibold mb-4 uppercase tracking-wide text-black">
              Related Practice
            </h4>

            <ul className="space-y-2">
              {relatedServices.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/services/${item.slug}`}
                    className="text-gray-600 hover:text-orange-500 transition flex items-center gap-2"
                  >
                    <span>›</span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-8">
          <Image
            // src={`/images/services/${service.slug}.jpg`}
            src="/images/home/service/title-img.png"
            alt={service.name}
            width={900}
            height={450}
            className="rounded-md object-cover w-full"
          />

          <h1 className="text-4xl font-semibold text-black">
            {service.name} {/* Changed from service.title to service.name */}
          </h1>

          {service.description.map((text, idx) => (
            <p key={idx} className="text-gray-700 leading-relaxed">
              {text}
            </p>
          ))}
        </div>
      </section>
    </>
  );
}