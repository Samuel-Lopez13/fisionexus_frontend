<script setup>

</script>

<template>
  <div class="flex flex-col gap-2 ">
    <!--Categoría-->
    <section>
      <details class="question py-2 border border-gray-200 rounded-sm group p-5 text-principal">
        <summary class="flex items-center cursor-pointer">
          Categoría
          <svg class="ml-auto fill-current opacity-75 w-4 h-4 transition-transform transform group-open:rotate-90"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </summary>
        <div class="mt-4 leading-normal text-md ">
          <textarea
            class=" input-primary resize-none"
            placeholder="Ingrese la categoría"
          ></textarea>
        </div>
      </details>
    </section>
    <!--Diagnóstico previo-->
    <section>
      <details class="question py-2 border border-gray-200 group p-5 text-principal">
        <summary class="flex items-center cursor-pointer">
          Diagnóstico previo del médico
          <svg class="ml-auto fill-current opacity-75 w-4 h-4 transition-transform transform group-open:rotate-90"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </summary>
        <div class="mt-4 leading-normal text-md ">
          <textarea
            class=" input-primary resize-none"
            placeholder="Ingrese el diagnóstico previo del médico"
          ></textarea>
        </div>
        <label for="" class="mt-4 block">Terapéutica empleada y tratamientos afines</label>
        <textarea
          class=" input-primary resize-none"
          placeholder="Ingrese la terapéutica empleada y tratamientos afines"
        ></textarea>
      </details>
    </section>
    <!--Diagnóstico funcional-->
    <section>
      <details class="question py-2 border border-gray-200 group p-5 text-principal">
        <summary class="flex items-center cursor-pointer">
          Diagnóstico funcional
          <svg class="ml-auto fill-current opacity-75 w-4 h-4 transition-transform transform group-open:rotate-90"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </summary>
        <div class="mt-4 leading-normal text-md ">
          <textarea
            class=" input-primary resize-none"
            placeholder="Ingrese el diagnóstico funcional"
          ></textarea>
        </div>
      </details>
    </section>
    <!--Padecimiento actual-->
    <section>
      <details class="question py-2 border border-gray-200 group p-5 text-principal">
        <summary class="flex items-center cursor-pointer">
          Padecimiento actual
          <svg class="ml-auto fill-current opacity-75 w-4 h-4 transition-transform transform group-open:rotate-90"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </summary>
        <div class="mt-4 leading-normal text-md ">
          <textarea
            class=" input-primary resize-none"
            placeholder="Ingrese el padecimiento actual"
          ></textarea>
        </div>
      </details>
    </section>
    <!--Diagnóstico previo-->
    <section>
      <details class="question py-2 border border-gray-200 group p-5 text-principal">
        <summary class="flex items-center cursor-pointer">
          Diagnósticos previos
          <svg class="ml-auto fill-current opacity-75 w-4 h-4 transition-transform transform group-open:rotate-90"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </summary>
        <div class="mt-4 leading-normal text-md ">
          <textarea
            class=" input-primary resize-none"
            placeholder="Ingrese los diagnósticos previos"
          ></textarea>
        </div>
      </details>
    </section>
    <!--Inspección general y específica-->
    <section>
      <details class="question py-2 border border-gray-200 group p-5 text-principal">
        <summary class="flex items-center cursor-pointer">
          Inspección general y específica
          <svg class="ml-auto fill-current opacity-75 w-4 h-4 transition-transform transform group-open:rotate-90"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </summary>
        <div class="mt-4 leading-normal text-md ">
          <textarea
            class=" input-primary resize-none"
            placeholder="Ingrese la inspección general y específica"
          ></textarea>
        </div>
      </details>
    </section>
    <!--Palpación, sensibilidad...-->
    <section>
      <details class="question py-2 border border-gray-200 group p-5 text-principal">
        <summary class="flex items-center cursor-pointer">
          Palpación, sensibilidad y medidas antropométricas
          <svg class="ml-auto fill-current opacity-75 w-4 h-4 transition-transform transform group-open:rotate-90"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </summary>
        <div class="mt-4 leading-normal text-md ">
          <textarea
            class=" input-primary resize-none"
            placeholder="Ingrese la palpación, sensibilidad y medidas antropométricas"
          ></textarea>
        </div>
      </details>
    </section>
    <!--Movilidad, fuerza muscular...-->
    <section>
      <details class="question py-2 border border-gray-200 group p-5 text-principal">
        <summary class="flex items-center cursor-pointer">
          Movilidad, fuerza muscular y reflejos
          <svg class="ml-auto fill-current opacity-75 w-4 h-4 transition-transform transform group-open:rotate-90"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </summary>
        <div class="mt-4 leading-normal text-md ">
          <textarea
            class=" input-primary resize-none"
            placeholder="Ingrese la movilidad, fuerza muscular y reflejos"
          ></textarea>
        </div>
      </details>
    </section>
    <!--Pruebas especiales y...-->
    <section>
      <details class="question py-2 border border-gray-200 group p-5 text-principal">
        <summary class="flex items-center cursor-pointer">
          Pruebas especiales y estudios complementarios
          <svg class="ml-auto fill-current opacity-75 w-4 h-4 transition-transform transform group-open:rotate-90"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </summary>
        <div class="mt-4 leading-normal text-md ">
          <textarea
            class=" input-primary resize-none"
            placeholder="Ingrese las pruebas especiales y estudios complementarios"
          ></textarea>
        </div>
      </details>
    </section>
    <!--Diagnóstico nosológico...-->
    <section>
      <details class="question py-2 border border-gray-200 group p-5 text-principal">
        <summary class="flex items-center cursor-pointer">
          Diagnóstico nosológico
          <svg class="ml-auto fill-current opacity-75 w-4 h-4 transition-transform transform group-open:rotate-90"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </summary>
        <div class="mt-4 leading-normal text-md ">
          <textarea
            class=" input-primary resize-none"
            placeholder="Ingrese el diagnóstico nosológico"
          ></textarea>
        </div>
      </details>
    </section>
    <!--Objetivos-->
    <section>
      <details class="question py-2 border border-gray-200 group p-5 text-principal">
        <summary class="flex items-center cursor-pointer">
          Objetivos
          <svg class="ml-auto fill-current opacity-75 w-4 h-4 transition-transform transform group-open:rotate-90"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </summary>
        <div>
          <label for="" class="mt-4 block">Corto plazo</label>
          <textarea
            class=" input-primary resize-none"
            placeholder="Ingrese los objetivos a corto plazo"
          ></textarea>
        </div>
        <div>
          <label for="" class="mt-4 block">Mediano plazo</label>
          <textarea
            class=" input-primary resize-none"
            placeholder="Ingrese los objetivos a mediano plazo"
          ></textarea>
        </div>
        <div>
          <label for="" class="mt-4 block">Largo plazo</label>
          <textarea
            class=" input-primary resize-none"
            placeholder="Ingrese los objetivos a largo plazo"
          ></textarea>
        </div>
      </details>
    </section>
    <!--Tratamiento fisioterapéutico...-->
    <section>
      <details class="question py-2 border border-gray-200 group p-5 text-principal">
        <summary class="flex items-center cursor-pointer">
          Tratamiento fisioterapéutico
          <svg class="ml-auto fill-current opacity-75 w-4 h-4 transition-transform transform group-open:rotate-90"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </summary>
        <div class="mt-4 leading-normal text-md ">
          <textarea
            class=" input-primary resize-none"
            placeholder="Ingrese el tratamiento fisioterapéutico"
          ></textarea>
        </div>
      </details>
    </section>
    <!--Sugerencias y recomendaciones-->
    <section>
      <details class="question py-2 border border-gray-200 group p-5 text-principal">
        <summary class="flex items-center cursor-pointer">
          Sugerencias y recomendaciones
          <svg class="ml-auto fill-current opacity-75 w-4 h-4 transition-transform transform group-open:rotate-90"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </summary>
        <div class="mt-4 leading-normal text-md ">
          <textarea
            class=" input-primary resize-none"
            placeholder="Ingrese las sugerencias y recomendaciones"
          ></textarea>
        </div>
      </details>
    </section>
    <!--Pronósticos y recomendaciones-->
    <section>
      <details class="question py-2 border border-gray-200 group p-5 text-principal">
        <summary class="flex items-center cursor-pointer">
          Pronósticos y recomendaciones
          <svg class="ml-auto fill-current opacity-75 w-4 h-4 transition-transform transform group-open:rotate-90"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </summary>
        <div class="mt-4 leading-normal text-md ">
          <textarea
            class=" input-primary resize-none"
            placeholder="Ingrese los pronósticos y recomendaciones"
          ></textarea>
        </div>
      </details>
    </section>
    <!--Pronósticos y recomendaciones-->
    <section class="py-2 group p-1 text-principal">
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
