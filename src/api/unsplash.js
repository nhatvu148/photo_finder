import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID b18f6bc268bea873509b118bf7875c051545fb31d9166642c7103b5a31afca94"
  }
});
