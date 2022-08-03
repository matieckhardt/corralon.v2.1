import axios from "axios";

const URL_BASE =  "https://devops.corralonbianchi.com.ar/api";

export const getAllClientes = async() => {
  try {
    return await axios.get(`${URL_BASE}/clientes/list`)
  } catch (error) {
    throw new Error("Hubo un error al traer la lista de productos");
    
  }
}
export const createCliente = async(obj: any)=>{
  try {
    return await axios.post(`${URL_BASE}/clientes/create`,obj)
  } catch (error) {
    throw new Error("Hubo un error al crear el clientes");
  }
}
export const updateCliente = async(obj: any)=>{
  try {
    return await axios.put(`${URL_BASE}/clientes/edit/${obj._id}`,obj)
  } catch (error) {
    throw new Error("Hubo un error al crear el clientes");
  }
}

export const deleteClienteDB = async(obj:any) => {
  try {
   return await axios.delete(`${URL_BASE}/clientes/delete/${obj._id}`)
  } catch (error) {
    throw new Error("Hubo un error al crear el clientes");
  }
}