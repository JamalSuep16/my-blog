import { getAllBlogPost } from "@/utils/contentful-data";
import Image from "next/image";
import Link from "next/link";

export default async function BlogPage() {
  const posts = await getAllBlogPost();
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
                  <Image
                    src={item.thumbnailImage}
                    alt="ThumbnailImage"
                    fill
                    className=" object-cover rounded-xl"
                  />
                </div>
                <h2 className="text-black font-bold">{item.title}</h2>
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
    </>
  );
}
