import axios from "axios";
axios.defaults.baseURL =
  process.env.NODE_ENV === "development"
    ? `http://${process.env.NEXT_PUBLIC_PUBLIC_URL}` + "/api"
    : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` + "/api";

const back = axios.create();

export default back;
