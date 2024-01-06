

import { createContext, useContext, useState } from "react";
import { apiClient } from "../api/ApiClient";
import {excecuteBasicAuthenticationService} from '../api/AutheticationApiService'

const AuthContext = createContext()
export const useAuth= ()=>useContext(AuthContext)

export default function AuthProvider({children}) {
    const[isAuthenticated,setAuthenticated] = useState(false)
    const[token,setToken] = useState(null)
    
    async function login(username,password) {
        const baToken = 'Basic '+window.btoa(username+':'+password)
        // const baToken = 'Basic '+window.btoa(username+':'+password)


        try {
            const response = await excecuteBasicAuthenticationService(baToken)

            if (response.status == 200) {
                setAuthenticated(true)
                setToken(baToken)
                apiClient.interceptors.request.use(
                    (config) => {
                        config.headers.Authorization=baToken
                        return config 
                    }
                )

                return true
            }else{
                
                logout()
                return false
            }
            
        } catch (error) {
            console.log(error)
            logout()
            return false
        }
        
    }
    function logout(){
        setAuthenticated(false)
        setToken(null)
      
    }

    return (
        <AuthContext.Provider value ={{isAuthenticated,login,logout,token}}>
            {children}
        </AuthContext.Provider>

    )
    
}