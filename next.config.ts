/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Экспорт в статический HTML
  images: {
    unoptimized: true, // Отключает оптимизацию изображений (GitHub Pages не поддерживает)
  },
  basePath: "/portfolio", // Укажи название твоего репо (см. пункт 3)
  assetPrefix: "/portfolio",
};

module.exports = nextConfig;
