import Link from "next/link";
import Image from "next/image";
import { getContentfulData } from "@/utils/contentful-data";

export default async function CategoriesSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const posts = (await getContentfulData({
    contentType: "blogPost",
  })) as unknown as {
    items: [
      {
        fields: {
          title: string;
          preview: string;
          slug: string;
          thumbnailImage: { fields: { file: { url: string } } };
          blogCategory: [{ fields: { slug: string } }];
        };
      }
    ];
  };
  const filteredPosts = posts?.items.filter((posts) => {
    return posts?.fields?.blogCategory.some(
      (category) => category.fields.slug === slug
    );
  });

  console.log(filteredPosts);

  return (
    <section className="bg-white py-20 px-4 sm:px-8">
      <h1 className="text-3xl text-black font-semibold text-center mb-6">
        Posts in {slug} Category
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts?.map((post, index) => {
          console.log(post.fields.title);
          return (
            <article
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full h-64">
                <Image
                  src={`https:${post.fields.thumbnailImage.fields.file.url}`}
                  alt="Thumbnail image for post"
                  layout="fill"
                  className="object-cover rounded-t-xl"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {post.fields.title}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {post.fields.preview}
                </p>
                <Link
                  href={`/blog/${post.fields.slug}`}
                  className="inline-block mt-4 text-blue-500 hover:underline"
                >
                  Read More
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
