import axios from "axios";

export default axios.create({
  baseURL: "https://script.google.com/macros/s/AKfycbw93MUVv7YNnzu-XqAMgR61HX_EdXXRyI4qxbrkeL-pRywQWTcy8utsaHd6rsn8TiMPBg/",
  headers: {
    "Content-type": "application/json"
  }
});