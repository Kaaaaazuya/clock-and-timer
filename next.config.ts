import type { NextConfig } from "next";
import "./src/env.js";
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

// see: https://github.com/vanilla-extract-css/vanilla-extract/issues/1367
// turbopack 未対応
const withVanillaExtract = createVanillaExtractPlugin();

const config: NextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
	},
	transpilePackages: ["geist"],
	images: {
		domains: ["lh3.googleusercontent.com"],
	},
};

export default withVanillaExtract(config);
