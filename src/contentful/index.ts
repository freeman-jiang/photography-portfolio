import { createClient } from "contentful";

const accessToken = process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN;
const space = process.env.CONTENTFUL_SPACE_ID;

if (!accessToken) {
  throw new Error(
    "CONTENTFUL_DELIVERY_ACCESS_TOKEN environment variable is not set"
  );
}

if (!space) {
  throw new Error("CONTENTFUL_SPACE_ID environment variable is not set");
}

export const client = createClient({
  accessToken,
  space,
});
