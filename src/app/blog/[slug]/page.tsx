import { getSingleBlogPost } from "@/utils/contentful-data";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

export default async function blogCategories1({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = await getSingleBlogPost(slug);
  console.log(post?.items[0].fields.title);
  return (
    <>
      <section className="">
        <div className="relative w-full h-[300px] mt-24">
          <Image
            src={`https:${post?.items[0].fields.thumbnailImage.fields.file.url}`}
            alt="Latest post image"
            fill
          />
        </div>
        <div className="mt-10 ml-10 mr-64 font-bold">
          <h2 className="text-5xl">{post?.items[0].fields.title}</h2>
          {documentToReactComponents(post?.items[0].fields.content)}
        </div>
      </section>
    </>
  );
}
