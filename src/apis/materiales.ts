import axios from "axios";

const URL_BASE =  "https://devops.corralonbianchi.com.ar/api";
//const URL_BASE =  "http://localhost:4000/api";

export const getAllMateriales = async() => {
  try {
    return await axios.get(`${URL_BASE}/materiales/list`)
  } catch (error) {
    throw new Error("Hubo un error al traer la lista de materiales");
    
  }
}

export const createMaterial = async(obj: any)=>{
  try {
    return await axios.post(`${URL_BASE}/materiales/create`,obj)
  } catch (error) {
    throw new Error("Hubo un error al crear el materiales");
  }
}
export const updateMaterial = async(obj: any)=>{
  try {
    return await axios.put(`${URL_BASE}/materiales/edit/${obj._id}`,obj)
  } catch (error) {
    throw new Error("Hubo un error al crear el materiales");
  }
}

export const deleteMaterialDB = async(obj:any) => {
  try {
   return await axios.delete(`${URL_BASE}/materiales/delete/${obj._id}`)
  } catch (error) {
    throw new Error("Hubo un error al crear el materiales");
  }
}