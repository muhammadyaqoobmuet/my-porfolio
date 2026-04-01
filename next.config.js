module.exports = {
  images: {
    unoptimized: true, // Required for Netlify compatibility to avoid _ipx HTTP 500 errors
    domains: [
      "i.scdn.co", // Spotify Album Art
      "pbs.twimg.com", // Twitter Profile Picture
      "api.microlink.io", // Microlink Image Preview
      "avatars.githubusercontent.com", // GitHub avatars
      "zgcfthkjlo.ufs.sh", // New optimized project images
    ],
  },
  webpack: (config, { dev, isServer }) => {
    if (isServer) {
      require("./scripts/generate-sitemap");
    }

    return config;
  },
  async redirects() {
    return [
      {
        source: "/boxshadows",
        destination: "#boxshadows",
        permanent: true,
      },
    ];
  },
};
