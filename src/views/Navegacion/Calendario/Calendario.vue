<script setup>
import { ref } from 'vue';
import CardCita from '@/components/InicioComponents/CardCita.vue'
import TablaUsuarios from '@/components/CalendarioComponents/TablaUsuarios.vue'
let calendar = ref(null);
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let citas = ref([
    new Date(year, month, 22),
    new Date(year, month, 24),
    new Date(year, month, 26),
    new Date(year, month, 31)
])
let attributes = ref([
    {
        key: 'today',
        highlight: {
            color: 'blue',
            fillMode: 'solid',
            contentClass: 'italic',
        },
        dates: new Date(),
    },
    {
        highlight: {
            color: 'blue',
            fillMode: 'light',
        },
        dates: citas.value
    },
    /*{
        key: 'Any',
        color:'white',
        // Attribute type definitions
        content: false,   // Boolean, String, Object
        highlight: false,  // Boolean, String, Object
        //dot: true,       // Boolean, String, Object
        //bar: true,         Boolean, String, Object
        popover:
            {
            label: 'Ayuda',
            visibility: 'focus'
            }, // Only objects allowed
        // Your custom data object for later access, if needed
        customData: { },
        // We also need some dates to know where to display the attribute
        // We use a single date here, but it could also be an array of dates,
        //  a date range or a complex date pattern.
        dates: new Date(year, month, 3),
        // Think of `order` like `z-index`
        order: 0
    },*/
]);

const hoy = () =>{
    calendar.value.move(new Date());
}

const diaSeleccionado = (day) => {
    const date = new Date(day.date);
    const formattedDate = `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()}`;
    console.log('Fecha seleccionada:', formattedDate);
    console.log(citas.value)
    // Aquí puedes agregar la lógica que necesites ejecutar al hacer clic en una fecha
};

</script>

<template>
    <div class="w-full text-center">
        <h1 class="mb-4 text-3xl font-semibold text-blue-600 md:text-5xl lg:text-4xl">CALENDARIO</h1>
    </div>
    <div class="flex gap-3 telefono:flex-col">
        <div class="w-1/2 telefono:w-full">
            <v-calendar ref="calendar" :attributes="attributes" expanded rows="2" @dayclick="diaSeleccionado">
                <template #footer>
                    <div class="w-full px-4 pb-3">
                        <button
                            class="bg-blue-600 hover:bg-blue-700 text-white w-full px-3 py-1 rounded-sm"
                            @click="hoy">
                            Hoy
                        </button>
                    </div>
                </template>
            </v-calendar>
        </div>
        <div class="w-1/2 telefono:w-full">
            <h1 class="text-gray-500 font-semibold">Citas de la fecha seleccionada</h1>
            <div class="style_scroll flex gap-4 w-12/12 overflow-x-auto py-2">
                <CardCita/>
            </div>
            <h1 class="text-gray-500 font-semibold">Pacientes nuevos de la fecha seleccionada</h1>
            <TablaUsuarios/>
        </div>
    </div>
</template>
