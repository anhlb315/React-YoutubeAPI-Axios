import axios from "axios";

const KEY = "AIzaSyD54ndSxXlYbOON8rKPQJNf81Z5dnrCZDs";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    key: KEY,
    type: "video",
  },
});
