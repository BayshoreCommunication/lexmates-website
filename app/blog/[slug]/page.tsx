import { blogsData } from "@/data/blogsData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const BRAND = "#4F647F";

interface BlogDetailsProps {
  params: {
    slug: string;
  };
}

export default function BlogDetails({ params }: BlogDetailsProps) {
  // Sort latest first
  const sortedBlogs = [...blogsData].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  // Find selected blog
  const blog = sortedBlogs.find((item) => item.slug === params.slug);

  if (!blog) return notFound();

  // Recent blogs (exclude current one)
  const recentBlogs = sortedBlogs
    .filter((item) => item.slug !== blog.slug)
    .slice(0, 3);

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <div className="mx-auto max-w-[1320px] px-4 py-20">
      <div className="grid gap-12 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              priority
              sizes="(max-width:1024px) 100vw, 66vw"
              className="object-cover"
            />
          </div>

          <h1
            className="mt-8 text-3xl font-bold uppercase"
            style={{ color: BRAND }}
          >
            {blog.title}
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            {formatDate(blog.publishedAt)}
          </p>

          <div className="mt-6 space-y-4 leading-relaxed text-gray-700">
            <p>{blog.excerpt}</p>
            <p>
              This article discusses important legal insights and practical
              considerations related to the topic.
            </p>
            <p>
              For personalized legal consultation, contact our experienced
              advocates.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          <div className="rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3
              className="mb-6 text-lg font-semibold uppercase"
              style={{ color: BRAND }}
            >
              Recent Blogs
            </h3>

            <div className="flex flex-col gap-6">
              {recentBlogs.map((item) => (
                <Link
                  key={item.id}
                  href={`/blog/${item.slug}`}
                  className="group flex gap-4"
                >
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="80px"
                      className="object-cover transition group-hover:scale-105"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-800 transition group-hover:text-[#4F647F]">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      {formatDate(item.publishedAt)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
