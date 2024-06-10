import {CREDENCIALES} from "@/api/constantesGlobales.js";

const sinAutorizationJSON = (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    return [data, config];
}

const autorization = () => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem(CREDENCIALES)}`
        },
    };
    return config;
}

const autorizationJSON = (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem(CREDENCIALES)}`
        },
    };

    return [data, config];
}

// Exporta las funciones de configuración para que puedan ser llamadas desde otros módulos
export { autorization, autorizationJSON, sinAutorizationJSON };