import {defineStore} from "pinia";
import moment from 'moment'

export const clavesStore = defineStore('claves', {
    state: () => ({
        modificacionCita: false,
        //vigencia: '2024-07-10T06:50:00', // Fecha y hora objetivo
        //timeoutId: null,
        vigencias: [], // Lista de fechas y horas objetivo
        timeoutIds: [],
    }),
    actions: {
        programarEjecucion(vigencia) {
            /*const now = new Date().toISOString();

            const diferencia = moment.duration(moment(this.vigencia).diff(now)).asMilliseconds();

            if (diferencia > 0) {
                this.clearTimeoutId(); // Limpia cualquier temporizador existente
                const timeoutId = setTimeout(() => {
                    this.executeMethod();
                }, diferencia);

                this.timeoutId = timeoutId;
            }*/
            const now = moment().toISOString();

            const diferencia = moment.duration(moment(vigencia).diff(now)).asMilliseconds();

            if (diferencia > 0) {
                const timeoutId = setTimeout(() => {
                    this.executeMethod(vigencia);
                }, diferencia);

                this.timeoutIds[vigencia] = timeoutId;
            }
        },
        executeMethod(vigencia) {
            this.modificacionCita = true;
            /*this.clearTimeoutId();*/
            this.clearTimeoutId(vigencia);
        },
        clearTimeoutId(vigencia) {
            /*if (this.timeoutId) {
                clearTimeout(this.timeoutId);
                this.timeoutId = null;
            }*/
            const timeoutId = this.timeoutIds[vigencia];
            if (timeoutId) {
                clearTimeout(timeoutId);
                delete this.timeoutIds[vigencia];
            }
        },
        setVigencia(vigencia) {
            //this.vigencia = vigencia;
            this.vigencias.push(vigencia);
        }
    }
})