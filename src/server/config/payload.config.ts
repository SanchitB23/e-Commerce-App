import { buildConfig } from "payload/config";
// @ts-ignore
import { webpackBundler } from "@payloadcms/bundler-webpack";
// @ts-ignore
import { mongooseAdapter } from "@payloadcms/db-mongodb";
// @ts-ignore
import { slateEditor } from "@payloadcms/richtext-slate";
import path from "path";
import dotenv from "dotenv";
import { Media, Orders, ProductFiles, Products, Users } from "../db";
import { COMPANY_NAME } from "../../constants";

dotenv.config({
  path: path.resolve(__dirname, "../../../.env"),
});

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
  collections: [Users, Products, Media, ProductFiles, Orders],
  routes: {
    admin: "/sell",
  },
  admin: {
    user: "users",
    bundler: webpackBundler(),
    meta: {
      titleSuffix: `- ${COMPANY_NAME.titleCase}`,
      favicon: "/favicon.ico",
      ogImage: "/thumbnail.jpg",
    },
  },
  rateLimit: {
    max: 2000,
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGODB_URL!,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, "../../types/payload-types.ts"),
  },
});
