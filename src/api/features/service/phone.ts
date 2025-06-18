import { api } from "../..";

export const getPhones = () => api.get("/phone")

export const createPhone = (body: any) => api.post("/phone", body)

export const deletePhone = (id: any) => api.delete(`/phone/${id}`)

export const updatePhone = ({id,body}:{id:any,body:any}) => api.put(`/phone/${id}`,body)