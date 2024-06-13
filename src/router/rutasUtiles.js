import router from '@/router/index.js'

export const irInicio = () =>{
  router.push({name:'Inicio'})
}

export const irPacientes = () =>{
  router.push({name:'Pacientes'})
}

export const irAgregarPacientes = () =>{
  router.push({name:'AgregarPaciente'})
}

export const irMetricas = () =>{
  router.push({name:'Metricas'})
}