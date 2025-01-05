import { getAllBlogPost } from "@/utils/contentful-data";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getAllBlogPost();
      setPosts(posts);
    };
    fetchPosts();
  }, []);
  const categories = ["Technology", "Health", "Finance"]; // Example categories
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };
  return (
    <>
      <section className="bg-slate-900">
        <div className="grid grid-cols-3 gap-5 box-content text-white text-center mx-20">
          {posts?.map((item) => {
            return (
              <article
                key={item.slug}
                className="relative mt-24 w-[300px] bg-zinc-500 hover:bg-zinc-400 rounded-xl"
              >
                <div className="relative w-[300px] h-[300px] ">
                  {item.thumbnailImage && (
                    <Image
                      src={item.thumbnailImage}
                      alt="ThumbnailImage"
                      fill
                      className=" object-cover rounded-xl"
                    />
                  )}
                </div>
                <h2 className="text-white font-bold">{item.title}</h2>
                <p>{item.preview}</p>
                <Link
                  href={`/blog/${item.slug}`}
                  className="relative rounded-md bg-zinc-700 hover:bg-zinc-400"
                >
                  Read More
                </Link>
              </article>
            );
          })}
        </div>
      </section>
      <section>
        <div className="hidden min-h-[calc(100vh-80px)] bg-secondary p-5 md:block md:w-1/4">
          <div className="rounded-3xl bg-main p-5">
            <h2 className="mb-3 font-raleway text-lg font-bold text-secondary">
              Categories:
            </h2>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={category}
                      onChange={() => toggleCategory(category)}
                      checked={selectedCategories.includes(category)}
                    />
                    <span>{category}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
