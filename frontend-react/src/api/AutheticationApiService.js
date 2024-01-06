import { apiClient } from "./ApiClient";
export const excecuteBasicAuthenticationService = (token)=>apiClient.get('/basicauth',{
    headers:{
        Authorization:token
    }
})
