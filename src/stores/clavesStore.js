import {defineStore} from "pinia";

export const clavesStore = defineStore('claves', {
    state:()=>({
        jwt: import.meta.env.VITE_API_URL
    }),
    actions:{

    }
    /*const url = import.meta.env.VITE_API_URL;

    return { url }*/
})