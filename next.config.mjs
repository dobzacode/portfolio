import nextIntl from "next-intl/plugin";

// Your existing Next.js configuration
const nextConfig = {
  reactStrictMode: true,
 
};


const withNextIntl = nextIntl("./i18n.ts");

export default withNextIntl(nextConfig);