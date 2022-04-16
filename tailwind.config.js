module.exports = {
  // purge: ["./index.html", "./src/**/*.{jsx}"],
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  // content: [],
  theme: {
    container: {
      center: true,
    },
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(16, minmax(0, 1fr))",

        // Complex site-specific column configuration
        footer: "200px minmax(900px, 1fr) 100px",
      },
    },
  },
  plugins: [],
};
