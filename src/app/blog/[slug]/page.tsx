import { getSingleBlogPost } from "@/utils/old";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import Image from "next/image";

export default async function blogCategories1({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = (await getSingleBlogPost(slug)) as unknown as {
    items: [
      {
        fields: {
          title: string;
          content: Document;
          thumbnailImage: { fields: { file: { url: string } } };
        };
      }
    ];
  };

  return (
    <section className="mt-24">
      {/* Header dengan Thumbnail */}
      <div className="relative w-full h-[300px] md:h-[500px]">
        <Image
          src={`https:${post?.items[0].fields.thumbnailImage.fields.file.url}`}
          alt="Thumbnail for blog post"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
            {post?.items[0].fields.title}
          </h1>
        </div>
      </div>

      {/* Konten Blog */}
      <div className="p-4 md:p-8 lg:p-16 bg-white">
        <article className="text-black max-w-4xl mx-auto">
          {documentToReactComponents(post?.items[0].fields.content, {
            renderNode: {
              "embedded-asset-block": (node) => (
                <div className="my-8">
                  <Image
                    src={`https:${node.data.target.fields.file.url}`}
                    alt={node.data.target.fields.title}
                    width={800}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
              ),
            },
          })}
        </article>
      </div>
    </section>
  );
}
