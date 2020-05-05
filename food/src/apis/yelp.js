import axios from "axios";

const API_KEY = "ObfWXVkyA5pHVAgreEkn4D5AFbqhGjrkKD_G0ivQZ4pkKulLOdLW35zKrhtSUVyPynYrOkYcRyGYzGhWSFM3mkJMwL1-xQGzVBIGiZ-T2HANsCVoPzwl6HTheWKwXnYx"

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer ${API_KEY}`
  }
});