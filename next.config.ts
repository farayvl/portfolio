/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // 🔴 Добавляет слэш в конце путей (исправляет 404)
};

module.exports = nextConfig;
