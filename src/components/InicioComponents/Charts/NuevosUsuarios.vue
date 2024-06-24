<script setup>
import ApexCharts from 'apexcharts'

import { onMounted, ref } from 'vue'

const chartRef = ref(null)

onMounted(() => {
    initializeChart()
})

const initializeChart = () => {
    const options = {
        chart: {
            height: '100%',
            maxWidth: '100%',
            type: 'area',
            fontFamily: 'Inter, sans-serif',
            dropShadow: {
                enabled: false
            },
            toolbar: {
                show: false
            }
        },
        tooltip: {
            enabled: true,
            x: {
                show: false
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                opacityFrom: 0.55,
                opacityTo: 0,
                shade: '#1C64F2',
                gradientToColors: ['#1C64F2']
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 5
        },
        grid: {
            show: false,
            strokeDashArray: 4,
            padding: {
                left: 2,
                right: 2,
                top: 0
            }
        },
        series: [
            {
                name: 'New users',
                data: [6500, 6418, 6456, 6526, 6356, 6456, 6400],
                color: '#1A56DB'
            }
        ],
        xaxis: {
            categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        yaxis: {
            show: false
        }
    }

    if (chartRef.value && typeof ApexCharts !== 'undefined') {
        let chart = new ApexCharts(chartRef.value, options)
        chart.render()
    }
}
</script>

<template>
    <div class="max-w-sm w-full bg-white rounded-lg shadow border p-6 md:p-6 tablet:w-[300px] laptop:w-[300px]">
        <div class="flex justify-between mb-1">
            <div>
                <h5 class="leading-none text-2xl font-bold text-gray-900 pb-2">100</h5>
                <p class="text-base font-normal text-gray-500">Usuarios esta semana</p>
            </div>
            <div class="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 text-center">
                12%
                <svg class="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 10 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M5 13V1m0 0L1 5m4-4 4 4" />
                </svg>
            </div>
        </div>
        <div ref="chartRef" class="mb-3"></div>

        <div class="grid grid-cols-1 items-center border-gray-200 border-t justify-between">
            <div class="flex justify-between items-center pt-5">
                <!-- Button -->
                <button
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="usuariosdropdown"
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
                <div id="usuariosdropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
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
