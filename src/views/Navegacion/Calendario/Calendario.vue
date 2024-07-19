<script setup>
import { ref } from 'vue';
let calendar = ref(null);
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
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
        dates: [
            new Date(year, month, 17),
            new Date(year, month, 13)
        ]
    },
    {
        key: 'Any',
        color:'white',
        // Attribute type definitions
        content: false,   // Boolean, String, Object
        highlight: false,  // Boolean, String, Object
        dot: true,       // Boolean, String, Object
        //bar: true,         Boolean, String, Object
        popover:
            {
            label: 'todo.description',
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
    },
]);

const hoy = () =>{
    calendar.value.move(new Date());
}

</script>

<template>
    <div class="w-1/2">
        <v-calendar ref="calendar" :attributes="attributes" expanded rows="2">
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
</template>
