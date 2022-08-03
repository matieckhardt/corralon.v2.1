import axios from "axios";

const URL_BASE = process.env.REACT_APP_API_URL;

export const authLogin = async (obj?: any) => {
  try {
    return await axios.post(`${URL_BASE}/signin`, obj)
  } catch (error) {
    throw new Error("Usuario no registrado");
  }
};

export const getAllProveedores = async() => {
  try {
    return await axios.get(`${URL_BASE}/proveedores/list`)
  } catch (error) {
    throw new Error("Hubo un error al traer la lista de proveedores");
    
  }
}

export const createProveedor = async(obj: any)=>{
  try {
    return await axios.post(`${URL_BASE}/proveedores/create`,obj)
  } catch (error) {
    throw new Error("Hubo un error al crear el proveedores");
  }
}
export const updateProveedorer = async(obj: any)=>{
  try {
    return await axios.put(`${URL_BASE}/proveedores/edit/${obj._id}`,obj)
  } catch (error) {
    throw new Error("Hubo un error al crear el proveedores");
  }
}

export const deleteProveedorDB = async(obj:any) => {
  try {
   return await axios.delete(`${URL_BASE}/proveedores/delete/${obj._id}`)
  } catch (error) {
    throw new Error("Hubo un error al crear el proveedores");
  }
}