<script setup>

</script>

<template>
  <div class="layout flex">
    <section class="w-3/12">
      <div class="left__container flex flex-col items-center gap-4 text-center">
        <h1 class="text-xl font-bold m-0">
          Nuevo usuario
        </h1>
        <svg class="w-36 h-36 text-gray-700" viewBox="0 0 146 146" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M73 73C84.598 73 94 63.598 94 52C94 40.402 84.598 31 73 31C61.402 31 52 40.402 52 52C52 63.598 61.402 73 73 73Z"
            stroke="#758CA3" stroke-width="4.5" />
          <path d="M114.784 129C113.67 108.76 107.473 94 72.9993 94C38.5265 94 32.3294 108.76 31.2153 129"
                stroke="#758CA3" stroke-width="4.5" stroke-linecap="round" />
          <path
            d="M38 12.3647C48.2961 6.40879 60.2502 3 73 3C111.66 3 143 34.34 143 73C143 111.66 111.66 143 73 143C34.34 143 3 111.66 3 73C3 60.2502 6.40879 48.2961 12.3647 38"
            stroke="#758CA3" stroke-width="6" stroke-linecap="round" />
        </svg>
        <svg class="w-64 h-64" viewBox="0 0 250 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M197.582 0H0V300H250V43.152L197.582 0Z" fill="#FFD890" fill-opacity="0.5" />
          <path d="M196.701 44.1913L196.576 1.0387L248.995 44.1913H196.701Z" fill="#FF9839" fill-opacity="0.5" />
          <foreignObject x="10" y="50" width="100%" height="100%">
            <textarea class="svgtext w-full" placeholder="Notas internas"></textarea>
          </foreignObject>
        </svg>
      </div>
    </section>
    <section class="layout__right w-9/12">
      <header>
        <h1 class="text-principal text-xl mb-2">Información general</h1>
      </header>
      <form>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label for="first_name"
                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre(s)*</label>
            <input type="text" id="first_name"
                   class="input-primary "
                   required />
          </div>
          <div>
            <label for="last_name"
                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellidos*</label>
            <input type="text" id="last_name"
                   class="input-primary"
                   required />
          </div>

          <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de
              nacimiento*</label>
            <input type="date" class="input-primary" placeholder="Select date">
          </div>

          <div class="">
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an
              option</label>
            <select id="countries" class="input-primary">
              <option selected value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
            </select>
          </div>

          <div>
            <label for="marital_status" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estado
              Civil*</label>
            <input type="text" id="marital_status"
                   class="input-primary"
                   required />
          </div>

          <div>
            <label for="occupation"
                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ocupación*</label>
            <input type="text" id="occupation"
                   class="input-primary"
                   required />
          </div>

          <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Teléfono*</label>
            <input type="tel" id="phone"
                   class="input-primary"
                   required />
          </div>

          <div>
            <label for="institution"
                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Institución*</label>
            <input type="text" id="institution"
                   class="input-primary"
                   required />
          </div>
        </div>
        <div class="flex gap-6">
          <div class="mb-6 basis-3/4">
            <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Domicilio</label>
            <input type="text" id="address"
                   class="input-primary"
                   placeholder="1234 Calle Principal" required />
          </div>
          <div class="mb-6 basis-1/4">
            <label for="postal-code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Código
              Postal</label>
            <input type="text" id="postal-code"
                   class="input-primary"
                   placeholder="00000" required />
          </div>
        </div>
        <button type="submit"
                class="button-primary">
          Enviar
        </button>
      </form>


    </section>
  </div>
</template>


<style scoped>

.svgtext {
  width: 80%;
  height: 80%;
  background-color: transparent;
  margin-right: 20px;
  outline: none;
  border: none;
  resize: none;
  scrollbar-width: thin;
  box-shadow: none;
}
</style>