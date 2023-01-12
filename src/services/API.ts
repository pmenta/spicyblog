import axios from "axios";

export const API = axios.create({
 baseURL: "https://www.tabnews.com.br/api/v1"
})