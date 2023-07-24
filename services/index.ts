import axios from "axios";
const https = require("https");

const baseURL = process.env.NEXT_PUBLIC_BASE_URL_V1;

const instance = axios.create({
  baseURL,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

export { instance as http };
