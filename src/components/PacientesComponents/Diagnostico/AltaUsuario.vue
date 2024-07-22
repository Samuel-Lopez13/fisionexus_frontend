<script setup>

</script>

<template>
    <div class="flex flex-col gap-2 text-sm">
        <div class="text-red-400 text-center">Antes de finalizar, deberas rellar los ultimos campos</div>
        <!--Diagnostico Inicial-->
        <section class="rounded-sm border shadow">
            <details open class="group">
                <summary
                    class="flex items-center w-full text-sm text-left rtl:text-right text-black bg-gray-100 px-6 py-3 telefono:text-center cursor-pointer">
                    Diagnostico inicial
                    <svg class="ml-auto fill-current opacity-75 w-4 h-4 transition-transform transform group-open:rotate-90"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                    </svg>
                </summary>
                <div class="px-6 py-3">
                    <input type="text"
                           class=" input-primary resize-none"
                           placeholder="Ingrese el diagnostico inicial"/>
                </div>
            </details>
        </section>
        <!--Diagnostico final-->
        <section class="rounded-sm border shadow">
            <details open class="group">
                <summary
                    class="flex items-center w-full text-sm text-left rtl:text-right text-black bg-gray-100 px-6 py-3 telefono:text-center cursor-pointer">
                    Diagnostico final
                    <svg class="ml-auto fill-current opacity-75 w-4 h-4 transition-transform transform group-open:rotate-90"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                    </svg>
                </summary>
                <div class="px-6 py-3">
                    <input type="text"
                           class=" input-primary resize-none"
                           placeholder="Ingrese el diagnostico final" />
                </div>
            </details>
        </section>
        <!--Frecuencia de tratamiento-->
        <section class="rounded-sm border shadow">
            <details open class="group">
                <summary
                    class="flex items-center w-full text-sm text-left rtl:text-right text-black bg-gray-100 px-6 py-3 telefono:text-center cursor-pointer">
                    Frecuencia de tratamiento
                    <svg class="ml-auto fill-current opacity-75 w-4 h-4 transition-transform transform group-open:rotate-90"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                    </svg>
                </summary>
                <div class="px-6 py-3">
                    <input type="text"
                           class=" input-primary resize-none"
                           placeholder="Ingrese la frecuencia de tratamiento" />
                </div>
            </details>
        </section>
        <!--Motivo de alta de servicio-->
        <section class="rounded-sm border shadow">
            <details open class="group">
                <summary
                    class="flex items-center w-full text-sm text-left rtl:text-right text-black bg-gray-100 px-6 py-3 telefono:text-center cursor-pointer">
                    Motivo de alta de servicio
                    <svg class="ml-auto fill-current opacity-75 w-4 h-4 transition-transform transform group-open:rotate-90"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                    </svg>
                </summary>
                <div class="px-6 py-3">
                    <input type="text"
                           class=" input-primary resize-none"
                           placeholder="Ingrese el motivo del alta" />
                </div>
            </details>
        </section>
    </div>
</template>

<style scoped>

</style>