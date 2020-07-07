const prod = process.env.NODE_ENV === "production";

const urls = {
  baseUrl: prod ? "https://utils.fyi" : "http://localhost:3000",
  pages: {
    index: "/",
    utils: {
      dev: {
        uuid: "/utils/dev/uuid",
      },
    },
  },
};

export default urls;
