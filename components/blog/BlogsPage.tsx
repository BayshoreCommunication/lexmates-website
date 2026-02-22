"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogsData } from "@/data/blogsData";

const BRAND = "#4F647F";
const BLOGS_PER_PAGE = 3;

const BlogsPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Sort latest first (important)
  const sortedBlogs = useMemo(() => {
    return [...blogsData].sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
  }, []);

  const totalPages = Math.ceil(sortedBlogs.length / BLOGS_PER_PAGE);

  const currentBlogs = useMemo(() => {
    const start = (currentPage - 1) * BLOGS_PER_PAGE;
    const end = start + BLOGS_PER_PAGE;
    return sortedBlogs.slice(start, end);
  }, [currentPage, sortedBlogs]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <div className="mx-auto max-w-[1320px] px-4 py-20">
      {/* Title */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold uppercase" style={{ color: BRAND }}>
          Our Blog
        </h1>
        <p className="mt-3 text-gray-600">Latest legal insights and updates</p>
      </div>

      {/* Blog Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {currentBlogs.map((blog) => (
          <div
            key={blog.id}
            className="overflow-hidden rounded-lg border border-gray-200 shadow-sm transition hover:shadow-md"
          >
            {/* Image */}
            <div className="relative h-52 w-full overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-sm text-gray-500">
                {formatDate(blog.publishedAt)}
              </p>

              <h2 className="mt-2 text-lg font-semibold text-gray-800">
                {blog.title}
              </h2>

              <p className="mt-3 text-sm text-gray-600">{blog.excerpt}</p>

              <Link
                href={`/blog/${blog.slug}`}
                className="mt-4 inline-block text-sm font-medium transition hover:underline"
                style={{ color: BRAND }}
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12 flex justify-center gap-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="rounded border px-4 py-2 text-sm disabled:opacity-50"
        >
          Previous
        </button>

        {Array.from({ length: totalPages }).map((_, index) => {
          const page = index + 1;
          const isActive = currentPage === page;

          return (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className="rounded border px-4 py-2 text-sm transition"
              style={{
                backgroundColor: isActive ? BRAND : "white",
                color: isActive ? "white" : "#374151",
              }}
            >
              {page}
            </button>
          );
        })}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="rounded border px-4 py-2 text-sm disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogsPage;
