/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  experimental: {
    optimizeUniversalDefaults: true,
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("first-child", "&:first-child");
      addVariant("last-child", "&:last-child");
    },
  ],
  important: true,
  content: ["./index.php"],
  corePlugins: {
    preflight: false,
  },
};
