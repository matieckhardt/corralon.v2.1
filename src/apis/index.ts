import axios from "axios";

const URL_BASE =  "https://devops.corralonbianchi.com.ar/api";

export const authLogin = async (obj?: any) => {
  try {
    return await axios.post(`${URL_BASE}signin`, obj)
  } catch (error) {
    throw new Error("Usuario no registrado");
  }
};

/// PROVEEDORES
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
export const deleteProveedorDB = async(obj:any) => {
  try {
   return await axios.delete(`${URL_BASE}/proveedores/delete/${obj._id}`)
  } catch (error) {
    throw new Error("Hubo un error al crear el proveedores");
  }
}
///MATERIALES
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
export const deleteMaterialDB = async(obj:any) => {
  try {
   return await axios.delete(`${URL_BASE}/materiales/delete/${obj._id}`)
  } catch (error) {
    throw new Error("Hubo un error al crear el materiales");
  }
}
///USUARIOS
export const getAllUsuarios = async() => {
  try {
    return await axios.get(`${URL_BASE}/users/list`)
  } catch (error) {
    throw new Error("Hubo un error al traer la lista de Usuarios");
    
  }
}
export const createUsuario = async(obj: any)=>{
  try {
    return await axios.post(`${URL_BASE}/users/create`,obj)
  } catch (error) {
    throw new Error("Hubo un error al crear el Usuarios");
  }
}
export const deleteUsuarioDB = async(obj:any) => {
  try {
   return await axios.delete(`${URL_BASE}/users/delete/${obj._id}`)
  } catch (error) {
    throw new Error("Hubo un error al crear el Usuarios");
  }
}