import axios from "axios";

const URL_BASE =  "https://devops.corralonbianchi.com.ar/api";

export const getAllProductos = async() => {
    try {
      return await axios.get(`${URL_BASE}/productos/list`)
    } catch (error) {
      throw new Error("Hubo un error al traer la lista de productos");
      
    }
  }