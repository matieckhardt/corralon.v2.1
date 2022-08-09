import axios from "axios"


// const URL_BASE =  "https://devops.corralonbianchi.com.ar/api";
const URL_BASE = "http://localhost:4000/api"

export const getAllCompras = async() => {
    try {
      return await axios.get(`${URL_BASE}/compras`)
    } catch (error) {
      throw new Error("Hubo un error no se pudo recuperar las compras");
    }
  }  