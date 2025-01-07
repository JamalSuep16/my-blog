import * as contentful from "contentful";

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "obp236ywaup6",
  environment: process.env.CONTENTFUL_ENVIRONMENT || "master", // defaults to 'master' if not set
  accessToken:
    process.env.CONTENTFUL_ACCESS_TOKEN ||
    "BVoN6Xnyr8WtIIKrsKjhVOIJtrRlDqgmMre0xDt1xAw",
});

export async function getContentfulData({
  contentType,
  limit,
  fieldsPopular,
  fieldsSlug,
}: {
  contentType: string;
  limit?: number;
  fieldsPopular?: boolean;
  fieldsSlug?: string;
}) {
  try {
    const data = await client.getEntries({
      content_type: contentType,
      limit: limit,
      "fields.popular": fieldsPopular,
      "fields.slug": fieldsSlug,
    });
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// getContentfulData({ contentType: "blogPost" });
// getContentfulData({ contentType: "blogCategory" });
// getContentfulData({ contentType: "heroSection" });
