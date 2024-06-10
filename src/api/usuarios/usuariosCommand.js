import {sinAutorizationJSON} from "@/api/headers.js";
import axios from "axios";

export const usuarioCommand = {

    /*Login*/
    login: async (username, contrasena) => {
        try{
            const JSON = {
                username: username,
                contraseña: contrasena
            }

            const [data, config] = sinAutorizationJSON(JSON)
            const response = await axios.post(import.meta.env.VITE_API_URL + "/User/Login", data, config)

            return response.data
        } catch (error){
            console.error(error)
        }
    }

}