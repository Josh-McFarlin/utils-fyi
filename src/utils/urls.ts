const prod = process.env.NODE_ENV === "production";

const urls = {
  baseUrl: prod ? "https://utils.fyi" : "httplocalhost:3000",
  pages: {
    index: "/",
  },
};

export default urls;
