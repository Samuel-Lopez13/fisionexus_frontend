<script setup>

</script>

<template>
  <div class="flex flex-col gap-2 text-sm">
    <!--Categoría-->
    <section class="rounded-sm border shadow">
      <details open class="group">
        <summary
          class="flex items-center w-full text-sm text-left rtl:text-right text-black bg-gray-100 px-6 py-3 telefono:text-center cursor-pointer">
          Categoría
          <svg class="ml-auto fill-current opacity-75 w-4 h-4 transition-transform transform group-open:rotate-90"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </summary>
        <div class="px-6 py-3">
          <input type="text"
                 class=" input-primary resize-none"
                 placeholder="Ingrese la categoría" />
        </div>
      </details>
    </section>
    <!--Diagnóstico previo y terapeutica empleada-->
    <section class="rounded-sm border shadow">
      <details open class="group">
        <summary
          class="flex items-center w-full text-sm text-left rtl:text-right text-black bg-gray-100 px-6 py-3 telefono:text-center cursor-pointer">
          Diagnóstico previo del médico, terapéutica empleada y tratamientos afínes
          <svg class="ml-auto fill-current opacity-75 w-4 h-4 transition-transform transform group-open:rotate-90"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </summary>
        <div class="px-6 py-3 text-gray-500 flex flex-col gap-3">
          <div>
            <label for="" class="block mb-2">Diagnóstico previo del médico</label>
            <textarea
              class=" input-primary resize-none"
              placeholder="Ingrese el diagnóstico previo del médico"
            ></textarea>
          </div>
          <div>
            <label for="" class="block mb-2">Terapéutica empleada y tratamientos afines</label>
            <textarea
              class=" input-primary resize-none"
              placeholder="Ingrese la terapéutica empleada y tratamientos afines"
            ></textarea>
          </div>
        </div>
      </details>
    </section>
    <!--Diagnóstico funcional-->
    <section class="rounded-sm border shadow">
      <details open class="group">
        <summary
          class="flex items-center w-full text-sm text-left rtl:text-right text-black bg-gray-100 px-6 py-3 telefono:text-center cursor-pointer">
          Diagnóstico funcional
          <svg class="ml-auto fill-current opacity-75 w-4 h-4 transition-transform transform group-open:rotate-90"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </summary>
        <div class="px-6 py-3">
          <textarea
            class=" input-primary resize-none"
            placeholder="Ingrese el diagnóstico funcional"
          ></textarea>
        </div>
      </details>
    </section>
    <!--Padecimiento actual-->
    <section class="rounded-sm border shadow">
      <details open class="group">
        <summary
          class="flex items-center w-full text-sm text-left rtl:text-right text-black bg-gray-100 px-6 py-3 telefono:text-center cursor-pointer">
          Padecimiento actual
          <svg class="ml-auto fill-current opacity-75 w-4 h-4 transition-transform transform group-open:rotate-90"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </summary>
        <div class="px-6 py-3">
          <textarea
            class=" input-primary resize-none"
            placeholder="Ingrese el padecimiento actual"
          ></textarea>
        </div>
      </details>
    </section>
    <!--Diagnósticos previo
    <section class="rounded-sm border shadow">
      <details class="group">
        <summary
          class="flex items-center w-full text-sm text-left rtl:text-right text-black bg-gray-100 px-6 py-3 telefono:text-center cursor-pointer">
          Diagnósticos previos
          <svg class="ml-auto fill-current opacity-75 w-4 h-4 transition-transform transform group-open:rotate-90"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </summary>
        <div class="px-6 py-3">
          <textarea
            class=" input-primary resize-none"
            placeholder="Ingrese los diagnósticos previos"
          ></textarea>
        </div>
      </details>
    </section>
    -->
    <!--Inspección general y específica-->
    <section class="rounded-sm border shadow">
      <details open class="group">
        <summary
          class="flex items-center w-full text-sm text-left rtl:text-right text-black bg-gray-100 px-6 py-3 telefono:text-center cursor-pointer">
          Inspección general y específica
          <svg class="ml-auto fill-current opacity-75 w-4 h-4 transition-transform transform group-open:rotate-90"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </summary>
        <div class="px-6 py-3">
          <textarea
            class=" input-primary resize-none"
            placeholder="Ingrese la inspección general y específica"
          ></textarea>
        </div>
      </details>
    </section>
    <!--Palpación, sensibilidad...-->
    <section class="rounded-sm border shadow">
      <details open class="group">
        <summary
          class="flex items-center w-full text-sm text-left rtl:text-right text-black bg-gray-100 px-6 py-3 telefono:text-center cursor-pointer">
          Palpación, sensibilidad y medidas antropométricas
          <svg class="ml-auto fill-current opacity-75 w-4 h-4 transition-transform transform group-open:rotate-90"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </summary>
        <div class="px-6 py-3">
          <textarea
            class=" input-primary resize-none"
            placeholder="Ingrese la palpación, sensibilidad y medidas antropométricas"
          ></textarea>
        </div>
      </details>
    </section>
    <!--Movilidad, fuerza muscular...-->
    <section class="rounded-sm border shadow">
      <details open class="group">
        <summary
          class="flex items-center w-full text-sm text-left rtl:text-right text-black bg-gray-100 px-6 py-3 telefono:text-center cursor-pointer">
          Movilidad, fuerza muscular y reflejos
          <svg class="ml-auto fill-current opacity-75 w-4 h-4 transition-transform transform group-open:rotate-90"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </summary>
        <div class="px-6 py-3">
          <textarea
            class=" input-primary resize-none"
            placeholder="Ingrese la movilidad, fuerza muscular y reflejos"
          ></textarea>
        </div>
      </details>
    </section>
    <!--Pruebas especiales y...-->
    <section class="rounded-sm border shadow">
      <details open class="group">
        <summary
          class="flex items-center w-full text-sm text-left rtl:text-right text-black bg-gray-100 px-6 py-3 telefono:text-center cursor-pointer">
          Pruebas especiales y estudios complementarios
          <svg class="ml-auto fill-current opacity-75 w-4 h-4 transition-transform transform group-open:rotate-90"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </summary>
        <div class="px-6 py-3">
          <textarea
            class=" input-primary resize-none"
            placeholder="Ingrese las pruebas especiales y estudios complementarios"
          ></textarea>
        </div>
      </details>
    </section>
    <!--Diagnóstico nosológico...-->
    <section class="rounded-sm border shadow">
      <details open class="group">
        <summary
          class="flex items-center w-full text-sm text-left rtl:text-right text-black bg-gray-100 px-6 py-3 telefono:text-center cursor-pointer">
          Diagnóstico nosológico
          <svg class="ml-auto fill-current opacity-75 w-4 h-4 transition-transform transform group-open:rotate-90"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </summary>
        <div class="px-6 py-3">
          <textarea
            class=" input-primary resize-none"
            placeholder="Ingrese el diagnóstico nosológico"
          ></textarea>
        </div>
      </details>
    </section>
    <!--Objetivos-->
    <section class="rounded-sm border shadow">
      <details open class="group">
        <summary
          class="flex items-center w-full text-sm text-left rtl:text-right text-black bg-gray-100 px-6 py-3 telefono:text-center cursor-pointer">
          Objetivos
          <svg class="ml-auto fill-current opacity-75 w-4 h-4 transition-transform transform group-open:rotate-90"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </summary>
        <div class="px-6 py-3 text-gray-500 flex flex-col gap-3">
          <div>
            <label for="" class="block mb-2">Corto plazo</label>
            <textarea
              class=" input-primary resize-none"
              placeholder="Ingrese los objetivos a corto plazo"
            ></textarea>
          </div>
          <div>
            <label for="" class="block mb-2">Mediano plazo</label>
            <textarea
              class=" input-primary resize-none"
              placeholder="Ingrese los objetivos a mediano plazo"
            ></textarea>
          </div>
          <div>
            <label for="" class="block mb-2">Largo plazo</label>
            <textarea
              class=" input-primary resize-none"
              placeholder="Ingrese los objetivos a largo plazo"
            ></textarea>
          </div>
        </div>
      </details>
    </section>
    <!--Tratamiento fisioterapéutico...-->
    <section class="rounded-sm border shadow">
      <details open class="group">
        <summary
          class="flex items-center w-full text-sm text-left rtl:text-right text-black bg-gray-100 px-6 py-3 telefono:text-center cursor-pointer">
          Tratamiento fisioterapéutico
          <svg class="ml-auto fill-current opacity-75 w-4 h-4 transition-transform transform group-open:rotate-90"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </summary>
        <div class="px-6 py-3">
          <textarea
            class=" input-primary resize-none"
            placeholder="Ingrese el tratamiento fisioterapéutico"
          ></textarea>
        </div>
      </details>
    </section>
    <!--Sugerencias y recomendaciones-->
    <section class="rounded-sm border shadow">
      <details open class="group">
        <summary
          class="flex items-center w-full text-sm text-left rtl:text-right text-black bg-gray-100 px-6 py-3 telefono:text-center cursor-pointer">
          Sugerencias y recomendaciones
          <svg class="ml-auto fill-current opacity-75 w-4 h-4 transition-transform transform group-open:rotate-90"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </summary>
        <div class="px-6 py-3">
          <textarea
            class=" input-primary resize-none"
            placeholder="Ingrese las sugerencias y recomendaciones"
          ></textarea>
        </div>
      </details>
    </section>
    <!--Pronósticos y recomendaciones-->
    <section class="rounded-sm border shadow">
      <details open class="group">
        <summary
          class="flex items-center w-full text-sm text-left rtl:text-right text-black bg-gray-100 px-6 py-3 telefono:text-center cursor-pointer">
          Pronósticos y recomendaciones
          <svg class="ml-auto fill-current opacity-75 w-4 h-4 transition-transform transform group-open:rotate-90"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </summary>
        <div class="px-6 py-3">
          <textarea
            class=" input-primary resize-none"
            placeholder="Ingrese los pronósticos y recomendaciones"
          ></textarea>
        </div>
      </details>
    </section>
    <!--Firma y refiere-->
    <section class="px-6 py-3 text-black">
      <div class="flex gap-6 telefono:flex-wrap telefono:gap-1">
        <div class="mb-6 basis-2/4 telefono:basis-full">
          <label class="block mb-2 text-sm font-medium">Refiere <span
            class="text-blue-600">*</span></label>
          <input type="text"
                 class="input-primary"
                 placeholder="Ingrese su nombre" required />
        </div>
        <div class="mb-6 basis-2/4 telefono:basis-full">
          <label class="block mb-2 text-sm font-medium">Cédula profesional
            <span class="text-blue-600">*</span></label>
          <input type="text"
                 class="input-primary"
                 placeholder="Ingrese la cédula profesional"
                 maxlength="5"
                 required />
        </div>
      </div>
    </section>
  </div>
</template>
