import axios from "axios"

const URL_BASE =  "https://devops.corralonbianchi.com.ar/api";

export const getAllRubros = async() => {
    try {
        return await axios.get(`${URL_BASE}/rubros/list`)
      } catch (error) {
        throw new Error("Hubo un error al traer la lista de rubros");
        
      }
}