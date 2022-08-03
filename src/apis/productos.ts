import axios from "axios";

const URL_BASE =  "https://devops.corralonbianchi.com.ar/api";
// const URL_BASE = "http://localhost:4000/api"

export const getAllProductos = async() => {
    try {
      return await axios.get(`${URL_BASE}/productos/list`)
    } catch (error) {
      throw new Error("Hubo un error al traer la lista de productos");
      
    }
  }

export const createProduct = async(obj:any) => {
  try {
    return await axios.post(`${URL_BASE}/productos/create`, obj)
  } catch (error) {
    throw new Error("Hubo un error no se pudo crear el producto");
  }
}  