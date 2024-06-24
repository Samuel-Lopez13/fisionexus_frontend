<script setup>
import ApexCharts from 'apexcharts'

import {onMounted, ref} from 'vue'

const chartCitas = ref(null)

onMounted(() => {
    initializeChart()
})

const initializeChart = () => {
    if (chartCitas.value && typeof ApexCharts !== 'undefined') {
        const chart = new ApexCharts(chartCitas.value, getChartOptions())
        chart.render()
    }
}

const getChartOptions = () => {
    return {
        series: [52.8, 26.8, 20.4],
        colors: ["#1C64F2", "#ffbe0b", "#e63946"],
        chart: {
            height: 330,
            width: "100%",
            type: "pie",
        },
        stroke: {
            colors: ["white"],
            lineCap: "",
        },
        plotOptions: {
            pie: {
                labels: {
                    show: true,
                },
                size: "100%",
                dataLabels: {
                    offset: -25
                }
            },
        },
        labels: ["Concluidas", "Inasistidas", "Canceladas"],
        dataLabels: {
            enabled: true,
            style: {
                fontFamily: "Inter, sans-serif",
            },
        },
        legend: {
            position: "bottom",
            fontFamily: "Inter, sans-serif",
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return value + "%"
                },
            },
        },
        xaxis: {
            labels: {
                formatter: function (value) {
                    return value + "%"
                },
            },
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
        },
    }
}
</script>

<template>
    <div class="max-w-sm w-full tablet:w-[300px] laptop:w-[300px] bg-white rounded-lg rounded border shadow p-6">
        <div class="flex justify-between items-start w-full">
            <div class="flex-col items-center">
                <div class="flex items-center mb-2">
                    <h5 class="text-xl font-bold leading-none text-gray-900 me-1">Estados de las
                        citas</h5>
                </div>
            </div>
        </div>

        <!-- Line Chart -->
        <div class="pb-4" ref="chartCitas"></div>

        <div class="grid grid-cols-1 items-center border-gray-200 border-t justify-between">
            <div class="flex justify-between items-center pt-4">
                <!-- Button -->
                <button
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="citasdropdown"
                    data-dropdown-placement="bottom"
                    class="text-sm font-medium text-gray-500 hover:text-gray-900 text-center inline-flex items-center"
                    type="button">
                    Ultimos 7 Días
                    <svg class="w-2.5 m-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="m1 1 4 4 4-4" />
                    </svg>
                </button>
                <!-- Dropdown menu -->
                <div id="citasdropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                    <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
                        <li>
                            <div class="block px-4 py-2 hover:bg-gray-100">Ayer</div>
                        </li>
                        <li>
                            <div class="block px-4 py-2 hover:bg-gray-100">Hoy</div>
                        </li>
                        <li>
                            <div class="block px-4 py-2 hover:bg-gray-100">Ultimos 7 Días</div>
                        </li>
                        <li>
                            <div class="block px-4 py-2 hover:bg-gray-100">Ultimos 30 Días</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>