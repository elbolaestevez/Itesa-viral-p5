import axios from "axios";
axios.defaults.baseURL = process.env.NEXT_PUBLIC_PUBLIC_URL + "/api";

const back = axios.create();

export default back;
