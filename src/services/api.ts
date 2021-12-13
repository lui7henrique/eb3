import axios from "axios";

export const api = axios.create({
  baseURL: "https://io.adafruit.com/api/v2/Gustavo2/feeds",
});
