import { Product } from "@/types/payload-types";
import { COMPANY_NAME, PRODUCT_CATEGORIES } from "@/constants";
import { Metadata } from "next";

export const getValidUrls = (images: Product["images"]) =>
  images
    .map(({ image }) => (typeof image === "string" ? image : image.url))
    .filter(Boolean) as string[];

export const getProductLabel = (category: Product["category"]) =>
  PRODUCT_CATEGORIES.find(({ value }) => value === category)?.label;

export function constructMetadata({
  title = `${COMPANY_NAME.titleCase} - the marketplace for digital assets`,
  description = `${COMPANY_NAME.titleCase} is an open-source marketplace for high-quality digital goods.`,
  image = "/thumbnail.png",
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@joshtriedcoding",
    },
    icons,
    metadataBase: new URL("https://digitalhippo.up.railway.app"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
