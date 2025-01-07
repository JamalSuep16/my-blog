import { getContentfulData } from "@/utils/contentful-data";
import Link from "next/link";

export default async function CategoryPage() {
  const posts = (await getContentfulData({
    contentType: "blogCategory",
  })) as unknown as {
    items: [
      {
        fields: {
          title: string;
          description: string;
          slug: string;
        };
      }
    ];
  };

  return (
    <>
      <section className="bg-slate-900">
        <div className="p-10">
          {posts?.items?.map((item) => {
            return (
              <article key={item.fields.slug} className="p-5">
                <div>
                  <h2 className="text-white font-bold text-5xl">
                    {item.fields.title}
                  </h2>
                  <p>{item.fields.description}</p>
                </div>
                <Link href={`/categories/${item.fields.slug}`}>Read More</Link>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
