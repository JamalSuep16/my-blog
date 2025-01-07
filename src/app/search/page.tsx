// "use client";
// import { Post, searchPostByTitle } from "@/utils/contentful-data";
// import Image from "next/image";
// import Link from "next/link";
// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function SearchPage() {
//   const searchParams = useSearchParams();
//   const query = searchParams.get("q");
//   const [results, setResults] = useState<Post[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchResults = async () => {
//       if (query) {
//         const posts = (await searchPostByTitle(query)) as unknown as Post[];
//         setResults(posts || []);
//       }
//       setLoading(false);
//     };

//     fetchResults();
//   }, [query]);

//   console.log(results);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <section className="">
//       {results.map((post) => (
//         <article
//           key={post.fields.slug as string}
//           className="bg-white px-5 md:px-10 py-10 grid grid-cols-1 md:flex gap-10"
//         >
//           <div className="relative w-full md:w-[800px] h-[250px] md:h-[450px]">
//             <Image
//               src={`https:${post.fields.blogImage.fields.file.url}`}
//               alt="bike image"
//               fill
//               className="object-cover rounded-lg"
//             />
//           </div>

//           <div>
//             <h2 className="font-extrabold text-[25px]">{post.fields.title}</h2>
//             <p className="font-medium my-2 pb-1 text-sm md:text-base">
//               {post.fields.description}
//             </p>
//             <span className="font-medium bg-gray-300 p-2 px-4 rounded-full">
//               {post.fields.categories.fields.name}
//             </span>

//             <Link
//               className="flex hover:bg-gray-300 rounded-[4px] w-fit text-black p-2 gap-8 font-bold mt-5"
//               href={`/blog/${post.fields.slug}`}
//             >
//               Detail Motor
//               <Image
//                 src="/arrow-right.svg"
//                 height={15}
//                 width={15}
//                 alt="arrow logo"
//               />
//             </Link>
//           </div>
//         </article>
//       ))}
//     </section>
//   );
// }
