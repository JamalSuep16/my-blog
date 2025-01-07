"use client";

import { ContenfulCategory, contentfulpost } from "@/types/contentful";
import { getContentfulData } from "@/utils/contentful-data";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function BlogPage() {
  const [allPost, setAllPost] = useState<unknown>([]);
  const [posts, setPosts] = useState<unknown>([]);
  const [categories, setCategories] = useState<unknown>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = (await getContentfulData({
        contentType: "blogPost",
      })) as unknown as contentfulpost;
      const categories = (await getContentfulData({
        contentType: "blogCategory",
      })) as unknown as ContenfulCategory[];

      setPosts(posts);
      setAllPost(posts);
      setCategories(categories);
    };

    fetchPosts();
  }, []);

  function toggleCategory(cat: string) {
    const filteredPost = allPost?.items?.filter((post) => {
      return post.fields.blogCategory.some(
        (category) => category.fields.title === cat
      );
    });

    setPosts(filteredPost);
  }

  console.log(posts);

  return (
    <section className="grid grid-cols-[1fr_min-content]">
      <div className="bg-slate-900">
        <div className="grid grid-cols-2 gap-5 box-content text-white text-center mx-20">
          {posts?.items?.map((item, index) => {
            return (
              <article
                key={index}
                className="relative mt-24 w-[300px] bg-zinc-500 hover:bg-zinc-400 rounded-xl"
              >
                <div className="relative w-[300px] h-[300px] ">
                  <Image
                    src={`https:${item.fields.thumbnailImage.fields.file.url}`}
                    alt="ThumbnailImage"
                    fill
                    className=" object-cover rounded-xl"
                  />
                </div>
                <h2 className="text-white font-bold">{item.fields.title}</h2>
                <p>{item.fields.preview}</p>
                <div>
                  {item.fields.blogCategory.map((category, index) => (
                    <span
                      key={index}
                      className="relative rounded-md bg-slate-100 text-black"
                    >
                      {category.fields.title}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/blog/${item.fields.slug}`}
                  className="relative rounded-md bg-zinc-700 hover:bg-zinc-400"
                >
                  Read More
                </Link>
              </article>
            );
          })}
        </div>
      </div>
      <aside className="bg-slate-900">
        <div className="sticky top-[120px]">
          <h2 className="mb-5 font-medium text-primary-blue">
            BROWSE BY CATEGORY
          </h2>
          <div className="flex flex-wrap gap-2 text-sm">
            <button onClick={() => toggleCategory(category.title)}>All</button>
            {categories?.items?.map(
              (category: { title: string }, index: number) => (
                <button
                  key={index}
                  onClick={() => toggleCategory(category.fields.title)}
                >
                  {category.fields.title}
                </button>
              )
            )}
          </div>
        </div>
      </aside>
    </section>
  );
}
