import { getAllCategories, getPostsByCategory } from "@/utils/contentful-data";
import Link from "next/link";

export default async function CategoryPage() {
  const posts = await getAllCategories();
  return (
    <>
      <section className="bg-slate-900">
        <div className="p-10">
          {posts?.map((item) => {
            return (
              <article key={item.slug} className="p-5">
                <div>
                  <h2 className="text-white font-bold text-5xl">
                    {item.title}
                  </h2>
                  <p>{item.description}</p>
                </div>
                <Link href={`/categories/${item.slug}`}>Read More</Link>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
