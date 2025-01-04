import {
  // getAllCategories,
  // getAllEntries,
  // getAllBlogPost,
  // getAllHeroSection,
  // getPostsByTitle,
  getLatestPosts,
  getPostsByCategory,
} from "@/utils/contentful-data";
import Image from "next/image";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Categories from "./categories/page";

export default async function HomePage() {
  // const entries = await getAllEntries();
  // console.log(entries);

  //const posts = await getAllBlogPost();
  //console.log(posts)

  // const result = await getPostsByTitle("mon");
  // console.log(result);

  const latestPosts = await getLatestPosts();
  const postByCategory = await getPostsByCategory({
    content_type: "blogCategory",
    fields_popular: true,
  });
  console.log(Categories);

  return (
    <>
      <section
        id="home"
        className="overflow-hidden relative min-h-screen flex justify-center items-center"
      >
        <video
          src="carbg.mp4"
          className="absolute h-full object-cover"
          autoPlay
          loop
          muted
        />
        <div className="w-full h-96 flex  justify-center items-center  text-white text-xl font-bold relative z-10 flex-col sm:flex-row">
          <div>
            <h1 className="text-5xl">HI, Welcome👋</h1>
            <p>
              What I'm learning about shipping great products, <br />
              becoming a better developer, and growing a career in tech.
            </p>
          </div>
          <div className="w-52 h-52">
            <img
              className="rounded-xl shadow-md shadow-slate-50 "
              src="/ProfileArya.jpeg"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="p-10">
        <h2 className="mb-5 text-2xl font-bold">NEW HOT TOPIC</h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative h-[300px] w-full object-cover">
            <Image
              src={`https:${latestPosts?.items?.[0]?.fields?.thumbnailImage?.fields?.file?.url}`}
              alt="Latest post image"
              fill
            />
          </div>
          <div className="p-5 text-xl">
            <h2 className="overflow-hidden rounded-lg border border-gray-200 shadow-lg">
              {latestPosts.items[0].fields.title}
            </h2>
            <p>{latestPosts?.items[0].fields.preview}</p>
            <p>{latestPosts?.items[0].fields.blogCategory}</p>
            <Link
              href={`/blog/${latestPosts.items[0].fields.slug}`}
              className="flex items-center font-medium text-white absolute rounded-xl hover:bg-slate-600"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>
      <section className="p-10">
        <h2 className="mb-5 text-2xl font-bold">POPULAR CATEGORY</h2>
        <div>
          <Image
            src={`https:${postByCategory?.items[0].fields.image.fields.file.url}`}
            alt="Blog Category Image"
            width={100}
            height={100}
            className="object-cover rounded-xl"
          />
        </div>
        <div>
          <h2>{postByCategory?.items[0].fields.title}</h2>
          <p>{postByCategory?.items[0].fields.preview}</p>
        </div>
      </section>
    </>
  );
}
