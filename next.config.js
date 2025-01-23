/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // pdfjsを動作させるためにcanvasを外部モジュールとして設定
    config.externals = [
      ...config.externals,
      { canvas: "canvas" }
    ];
    return config;
  },
};

module.exports = nextConfig;
