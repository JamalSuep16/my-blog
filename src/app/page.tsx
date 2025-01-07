import { getContentfulData } from "@/utils/contentful-data";
import Image from "next/image";
import Link from "next/link";

export default async function HomePage() {
  const latestPosts = (await getContentfulData({
    contentType: "blogPost",
    limit: 1,
  })) as unknown as {
    items: [
      {
        fields: {
          title: string;
          preview: string;
          slug: string;
          thumbnailImage: { fields: { file: { url: string } } };
          blogCategory: [{ fields: { title: string } }];
        };
      }
    ];
  };

  const postByCategory = await getContentfulData({
    contentType: "blogCategory",
    fieldsPopular: true,
  });

  return (
    <>
      {/* Bagian Hero */}
      <section
        id="home"
        className="overflow-hidden relative min-h-screen flex justify-center items-center"
      >
        <video
          src="carbg.mp4"
          className="absolute h-full w-full object-cover"
          autoPlay
          loop
          muted
        />
        <div className="w-full h-full flex flex-col sm:flex-row justify-center items-center text-white text-xl font-bold relative z-10 p-5 sm:p-10">
          <div className="sm:w-1/2 text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl font-semibold">
              HI, Welcome👋
            </h1>
            <p className="mt-4">
              What I'm learning about shipping great products, <br />
              becoming a better developer, and growing a career in tech.
            </p>
          </div>
          <div className="w-52 h-52 relative mt-6 sm:mt-0">
            <Image
              className="rounded-xl shadow-md shadow-slate-50 object-cover"
              src="/ProfileArya.jpeg"
              alt="Profile Image"
              fill
            />
          </div>
        </div>
      </section>

      {/* New Hot Topic */}
      <section className="p-10">
        <h2 className="mb-5 text-2xl font-bold">NEW HOT TOPIC</h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative h-[300px] w-full object-cover">
            <Image
              src={`https:${latestPosts.items[0].fields.thumbnailImage.fields.file.url}`}
              alt="Latest post image"
              fill
              className="rounded-xl"
            />
          </div>
          <div className="p-5 text-xl flex flex-col justify-between">
            <h2 className="overflow-hidden rounded-lg border border-gray-200 shadow-lg p-2">
              {latestPosts.items[0].fields.title}
            </h2>
            <p className="mt-4">{latestPosts.items[0].fields.preview}</p>
            <div className="rounded-full px-4 py-2 text-sm bg-slate-400 mt-4">
              {latestPosts.items[0].fields.blogCategory.map(
                (category, index) => (
                  <p key={index}>{category.fields.title}</p>
                )
              )}
            </div>
            <Link
              href={`/blog/${latestPosts.items[0].fields.slug}`}
              className="flex items-center font-medium text-white rounded-xl hover:bg-slate-600 mt-4"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Category */}
      <section className="p-10">
        <h2 className="mb-5 text-2xl font-bold">POPULAR CATEGORY</h2>
        <div className="flex flex-wrap gap-10 justify-center">
          {postByCategory?.items.map((post, index) => (
            <article
              key={index}
              className="flex flex-col sm:flex-row items-center w-full sm:w-[45%] lg:w-[30%] p-5"
            >
              <div className="w-32 h-32 relative">
                <Image
                  src={`https:${post.fields.image.fields.file.url}`}
                  alt="Blog Category Image"
                  width={128}
                  height={128}
                  className="rounded-xl"
                />
              </div>
              <div className="font-bold text-center sm:text-left mt-4 sm:mt-0 sm:ml-4">
                <h2>{post.fields.title}</h2>
                <p className="mt-2">{post.fields.preview}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
