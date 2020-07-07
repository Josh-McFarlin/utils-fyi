const prod = process.env.NODE_ENV === "production";

const urls = {
  baseUrl: prod ? "https://utils.fyi" : "http://localhost:3000",
  pages: {
    index: "/",
  },
};

export default urls;
