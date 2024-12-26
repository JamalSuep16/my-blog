import {
  // getAllEntries,
  // getAllBlogPost,
  // getAllHeroSection,
  // getPostsByTitle,
  getLatestPosts,
} from "@/utils/contentful-data";
import Image from "next/image";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default async function HomePage() {
  // const entries = await getAllEntries();
  // console.log(entries);

  //const posts = await getAllBlogPost();
  //console.log(posts)

  // const result = await getPostsByTitle("mon");
  // console.log(result);

  const latestPosts = await getLatestPosts();
  return (
    <>
      <section>
        <div className="w-full h-96 flex  justify-center items-center bg-gray-500">
          <div className="w-24 h-24 ml-10 ">
            <img
              className="rounded-xl shadow-md shadow-slate-50"
              src="/ProfileArya.jpeg"
              alt="Its Me"
            />
          </div>
          <div>
            <h1 className="justify-center items-center text-white text-5xl font-bold relative z-10 flex-col sm:flex-row ">
              Welcome To My👋
            </h1>
            <p>
              What I'm learning about shipping great products, becoming a better
              developer, and growing a career in tech.
            </p>
          </div>
        </div>
      </section>
      <section className="grid bg-slate-900 w-full h-full">
        <div className="relative grid-cols-3 box-content mt-10 w-[300px] h-[300px]">
          <div className="relative w-[300px] h-[250px]">
            <Image
              src={`https:${latestPosts?.items[0].fields.thumbnailImage.fields.file.url}`}
              alt="Latest post image"
              fill
            />
          </div>
          <div className="mt-24 justify-center text-center">
            <h2>{latestPosts.items[0].fields.title}</h2>
            <p>{latestPosts?.items[0].fields.preview}</p>
            <Link
              href={`/blog/${latestPosts.items[0].fields.slug}`}
              className="grid box-content text-black bg-white hover:bg-slate-100"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
