import { commonApi } from "./commonApi"
import { serverURL } from "./serverURL";

//1.add resumes details to the server-post-reqBody
export const addVehicleAPI=async(reqbody)=>{
    return await commonApi('POST',`${serverURL}/Vehicles`,reqbody)
}

//2.get api call
export const getAllVehiclesAPI = async () => {
    return await commonApi('GET', `${serverURL}/Vehicles`, "")
}

//3.delete vehicle - DELETE
export const deleteVehicleAPI = async (id) => {
    return await commonApi('DELETE', `${serverURL}/Vehicles/${id}`, "")
}

//4.get single vehicle - GET
export const getSingleVehicleAPI = async (id) => {
    return await commonApi('GET', `${serverURL}/Vehicles/${id}`, "")
}

//5.update vehicle - PUT
export const updateVehicleAPI = async (id, reqBody) => {
    return await commonApi('PUT', `${serverURL}/Vehicles/${id}`, reqBody)
}






//..........................................................//
