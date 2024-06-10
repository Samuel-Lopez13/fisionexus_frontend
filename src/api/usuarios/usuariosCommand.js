//import {clavesStore} from "@/stores/clavesStore.js";
import {sinAutorizationJSON} from "@/api/headers.js";
import axios from "axios";

//const store = clavesStore()

export const usuarioCommand = {

    /*Login*/
    login: async (username, contrasena) => {
        try{
            const JSON = {
                username: username,
                contraseña: contrasena
            }

            const [data, config] = sinAutorizationJSON(JSON)
            const response = await axios.post("https://fisiolabs-backend.onrender.com/User/Login", data, config)

            return response.data
        } catch (error){
            console.error(error)
        }
    }

}