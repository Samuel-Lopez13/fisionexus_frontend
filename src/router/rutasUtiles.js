import router from '@/router/index.js'

export const CerrarSesion = () => {
   router.push({ name: 'login' })
   localStorage.removeItem(import.meta.env.VITE_CREDENCIALES)
   localStorage.removeItem(import.meta.env.VITE_USUARIO)
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

export const irInterrogatorio = () =>{
   router.push({name: 'Interrogatorio'})
}

export const irExpediente = () => {
   router.push({name: 'Expediente'})
}

export const irMetricas = () => {
   router.push({ name: 'Metricas' })
}

export const irAjustes = () => {
   router.push({ name: 'Ajustes' })
}