import axios from "axios";

const API_URL="www.themealdb.com/api/json/v1/1/filter.php?a=indian";
export const RecipeApi=()=>{
  return axios.get(`${API_URL}`);
}