"use client";

import { getContentfulData } from "@/utils/contentful-data";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface BlogPost {
  title: string;
  preview: string;
  slug: string;
  thumbnailImage: { fields: { file: { url: string } } };
  blogCategory: { fields: { title: string } }[];
}

interface ContentfulPost {
  items: { fields: BlogPost }[];
}

interface BlogCategory {
  title: string;
}

interface ContentfulCategory {
  items: { fields: BlogCategory }[];
}

export default function BlogPage() {
  const [allPost, setAllPost] = useState<ContentfulPost | null>(null);
  const [posts, setPosts] = useState<ContentfulPost | null>(null);
  const [categories, setCategories] = useState<ContentfulCategory | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = (await getContentfulData({
        contentType: "blogPost",
      })) as ContentfulPost;
      const categories = (await getContentfulData({
        contentType: "blogCategory",
      })) as ContentfulCategory;

      setPosts(posts);
      setAllPost(posts);
      setCategories(categories);
    };

    fetchPosts();
  }, []);

  const toggleCategory = (cat: string | null) => {
    setActiveCategory(cat);

    if (cat === null) {
      setPosts(allPost);
    } else {
      const filteredPost = allPost?.items.filter((post) =>
        post.fields.blogCategory.some(
          (category) => category.fields.title === cat
        )
      );
      setPosts({ items: filteredPost || [] });
    }
  };

  return (
    <section className="flex flex-col md:flex-row gap-5 p-4 md:p-8">
      {/* Konten Blog */}
      <div className="flex-1 bg-slate-900 p-4 rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
          {posts?.items.map((item, index) => (
            <article
              key={index}
              className="bg-zinc-800 hover:bg-zinc-700 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative w-full h-48 md:h-64">
                <Image
                  src={`https:${item.fields.thumbnailImage.fields.file.url}`}
                  alt="Thumbnail Image"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-bold">{item.fields.title}</h2>
                <p className="text-sm mt-2 text-gray-300">
                  {item.fields.preview}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.fields.blogCategory.map((category, index) => (
                    <span
                      key={index}
                      className="bg-slate-700 text-sm text-white px-2 py-1 rounded"
                    >
                      {category.fields.title}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/blog/${item.fields.slug}`}
                  className="inline-block mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition"
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-slate-800 p-4 rounded-lg">
        <div className="sticky top-20">
          <h2 className="text-white mb-4 text-lg font-semibold">
            Browse by Category
          </h2>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => toggleCategory(null)}
              className={`${
                activeCategory === null
                  ? "bg-blue-600"
                  : "bg-gray-700 hover:bg-gray-600"
              } text-white px-3 py-1 rounded transition`}
            >
              All
            </button>
            {categories?.items.map((category, index) => (
              <button
                key={index}
                onClick={() => toggleCategory(category.fields.title)}
                className={`${
                  activeCategory === category.fields.title
                    ? "bg-blue-600"
                    : "bg-gray-700 hover:bg-gray-600"
                } text-white px-3 py-1 rounded transition`}
              >
                {category.fields.title}
              </button>
            ))}
          </div>
        </div>
      </aside>
    </section>
  );
}
