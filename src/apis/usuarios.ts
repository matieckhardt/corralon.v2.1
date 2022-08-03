import axios from "axios";

const URL_BASE =  "https://devops.corralonbianchi.com.ar/api";

export const getAllUsuarios = async() => {
  try {
    return await axios.get(`${URL_BASE}/users/list`)
  } catch (error) {
    throw new Error("Hubo un error al traer la lista de productos");
    
  }
}
export const createUsuario = async(obj: any)=>{
  try {
    return await axios.post(`${URL_BASE}/users/create`,obj)
  } catch (error) {
    throw new Error("Hubo un error al crear el users");
  }
}
export const updateUsuario = async(obj: any)=>{
  try {
    return await axios.put(`${URL_BASE}/users/edit/${obj._id}`,obj)
  } catch (error) {
    throw new Error("Hubo un error al crear el users");
  }
}

export const deleteUsuarioDB = async(obj:any) => {
  try {
   return await axios.delete(`${URL_BASE}/users/delete/${obj._id}`)
  } catch (error) {
    throw new Error("Hubo un error al crear el users");
  }
}