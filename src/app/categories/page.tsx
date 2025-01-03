import { getAllCategories, getPostsByCategory } from "@/utils/contentful-data";
import Image from "next/image";
import Link from "next/link";

export default async function CategoryPage() {
  const posts = await getAllCategories();
  return (
    <>
      <section>
        <div className="p-10 gap-5">
          {posts?.map((item) => {
            return (
              <article key={item.slug} className="">
                <div>
                  <h2>{item.title}</h2>
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
