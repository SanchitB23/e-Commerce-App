import { Product } from "@/types/payload-types";
import { PRODUCT_CATEGORIES } from "@/constants";

export const getValidUrls = (images: Product["images"]) =>
  images
    .map(({ image }) => (typeof image === "string" ? image : image.url))
    .filter(Boolean) as string[];

export const getProductLabel = (category: Product["category"]) =>
  PRODUCT_CATEGORIES.find(({ value }) => value === category)?.label;
