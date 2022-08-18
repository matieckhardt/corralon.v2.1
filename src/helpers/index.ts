
export const addTokenCredential = (token:any) => localStorage.setItem("accessToken", token);

export const getTokenCredencial = () => localStorage.getItem('accessToken');

export const logoutTokenCredential = () => localStorage.removeItem("accessToken");

export const setTotalPrice = (arg1:Number, arg2:Number) => Number(arg1) * Number(arg2) 