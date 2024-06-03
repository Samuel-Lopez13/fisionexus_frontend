/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                'telefono': {'max': '767px'},  // Ancho maximo de 767px
                'tablet': {'min': '768px', 'max': '1023px'}, // Ancho mínimo de 768px y máximo de 1023px
                'laptop': {'min': '1024px', 'max': '1919px'}, // Ancho minimo de 1024px
                'desktop': '1920px'
            },
            boxShadow: {
                'basic': '0 4px 6px rgba(0, 0, 0, 0.1)', // Define tu propio estilo de box-shadow
            },
            backgroundColor: {
                'fondo': '#F9FAFD',
                'principal': '#0062FF',
                'pHover': '#0078FF',
            },
            colors:{
                'principal': '#0062FF'
            },
            fontSize:{
                'normal': '32px'
            },
            fontFamily:{
                'poppins': 'Poppins'
            },
            borderWidth: {
                'principal': '.5px', // Define el ancho del borde principal
            },
            borderColor: {
                'principal': 'rgba(0, 0, 0, 0.11)', // Define el color del borde principal
            },
        },
    },
    plugins: [],
}

