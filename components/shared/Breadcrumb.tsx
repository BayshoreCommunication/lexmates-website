import Image from "next/image";
import Link from "next/link";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  breadcrumbs: Breadcrumb[];
}

export default function Breadcrumb({ title, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative h-[320px] md:h-[380px] w-full overflow-hidden">
      {/* Shared Background Image */}
      <Image
        src="/images/breadcrumb/bg.png"
        alt="Page background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-3xl md:text-5xl font-semibold text-white mb-4">
          {title}
        </h1>

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-200">
          {breadcrumbs.map((item, index) => (
            <span key={index} className="flex items-center gap-2">
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-orange-400 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-orange-400 capitalize">
                  {item.label}
                </span>
              )}

              {index < breadcrumbs.length - 1 && (
                <span className="text-gray-400">›</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
