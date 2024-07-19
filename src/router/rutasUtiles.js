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

export const irInterrogatorio = (id) => {
   router.push({ name: 'Interrogatorio', params: { id: id } })
}

export const irExpediente = (id) => {
   router.push({ name: 'Expediente', params: { id: id } })
}

export const irMetricas = () => {
   router.push({ name: 'Metricas' })
}

export const irAjustes = () => {
   router.push({ name: 'Ajustes' })
}

export const irEditarPaciente = (id) => {
   router.push({ name: 'EditarPaciente', params: { id: id } })
}

export const irNotFound = () => {
   router.push({ name: 'NotFound' })
}

export const irFisioterapeutas = () =>{
   router.push({ name: 'Fisioterapeutas' })
}

export const irDiagnostico = (id) => {
   router.push({ name: 'Diagnostico', params: { id: id } })
}

export const irDiagnosticos = (id) => {
   router.push({ name: 'Diagnosticos', params: { id: id } })
}
