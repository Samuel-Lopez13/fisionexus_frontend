import { apiUrl, sinAutorizationJSON } from '@/api/headers.js'
import axios from "axios";
import { irInicio } from '@/router/rutasUtiles.js'

export const usuarioCommand = {

    /*Login*/
    login: async (username, contrasena) => {
        try{
            const JSON = {
                username: username,
                contraseña: contrasena
            }

            const [data, config] = sinAutorizationJSON(JSON)
            const response = await axios.post(apiUrl + "/Usuario/Login", data, config)

            //Se agrega la credencial al localStorage
            localStorage.setItem(import.meta.env.VITE_CREDENCIALES, response.data.accessToken)
            localStorage.setItem(import.meta.env.VITE_USUARIO, response.data.user.username)

            //Te redirecciona al Dashboard
            irInicio()

            return null
        } catch (error){
            if(error.response.status === 400){
                return "Rellena los campos solicitados"
            } else if (error.response.status === 404){
                return "Nombre de usuario y/o contraseña incorrectos"
            }
        }
    }

}