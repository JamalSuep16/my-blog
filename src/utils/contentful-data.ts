import Categories from "@/app/categories/page";
import * as contentful from "contentful";
import { title } from "process";

const client = contentful.createClient({
  space: "obp236ywaup6",
  environment: "master", // defaults to 'master' if not set
  accessToken: "BVoN6Xnyr8WtIIKrsKjhVOIJtrRlDqgmMre0xDt1xAw",
});

//Get both blog post and hero section entries
export async function getAllEntries() {
  try {
    const data = await client.getEntries({});
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getAllBlogPost() {
  try {
    const data = await client.getEntries({
      content_type: "blogPost",
    });

    return data.items.map((post) => {
      let thumbnailUrl = post?.fields?.thumbnailImage?.fields?.file.url;

      if (!thumbnailUrl) {
        thumbnailUrl = "//id.pinterest.com/pin/118430665233596343/";
      }

      return {
        title: post.fields.title,
        slug: post.fields.slug,
        content: post.fields.content,
        thumbnailImage: `https:${thumbnailUrl}`,
        categories: post.fields.categories,
        preview: post.fields.preview,
      };
    });
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getAllHeroSection() {}

export async function getSingleBlogPost(slug: string) {
  try {
    const res = await client.getEntries({
      content_type: "blogPost",
      "fields.slug": slug,
    });
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getPostsByTitle(keywoard: string) {
  try {
    const res = await client.getEntries({
      content_type: "blogPost",
      "fields.title[match]": keywoard,
    });
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getPostsByCategory() {}

// client.getEntries()
// .then((response) => console.log(response.items))
// .catch(console.error)

export async function getLatestPosts() {
  try {
    const res = await client.getEntries({
      content_type: "blogPost",
      limit: 1,
    });

    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
}
