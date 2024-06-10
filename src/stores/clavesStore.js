import {defineStore} from "pinia";

export const clavesStore = defineStore('claves', () => {
    const url = import.meta.env.VITE_API_URL;

    return { url }
})