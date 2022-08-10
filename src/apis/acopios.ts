import axios from "axios"

const URL_BASE =  "https://devops.corralonbianchi.com.ar/api";
// const URL_BASE = "http://localhost:4000/api"


export const getAllAcopios = async() => {
    try {
      return await axios.get(`${URL_BASE}/acopio/list`)
    } catch (error) {
      throw new Error("Hubo un error al traer la lista de acopios");
      
    }
  }