const { locales, defaultLocale } = require("./lang");

module.exports = {
  poweredByHeader: false,
  i18n: {
    locales,
    defaultLocale,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "s-maxage=1, stale-while-revalidate",
          },
        ],
      },
    ];
  },
};
