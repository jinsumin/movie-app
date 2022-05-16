const API_KEY = "25bd72df962ed94d3e026d32caf241fa";

module.exports = {
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://jinsumin.github.io/movie-app"
      : "",

  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-blog/:path*",
        permanent: false,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};
