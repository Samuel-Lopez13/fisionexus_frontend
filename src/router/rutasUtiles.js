import router from '@/router/index.js'

export const CerrarSesion = () => {
   router.push({ name: 'login' })
   localStorage.removeItem(import.meta.env.VITE_CREDENCIALES)
}

export const irInicio = () => {
   router.push({ name: 'Inicio' })
}

export const irPacientes = () => {
   router.push({ name: 'Pacientes' })
}

export const irAgregarPacientes = () => {
   router.push({ name: 'AgregarPaciente' })
}

export const irMetricas = () => {
   router.push({ name: 'Metricas' })
}

export const irAjustes = () => {
   router.push({ name: 'Ajustes' })
}