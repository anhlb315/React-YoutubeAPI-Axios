import axios from "axios";
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Uq-YVYynC1-GUYmC1f-DqsUl83aj62Bl8zLsyjOZ0Sg",
  },
});
