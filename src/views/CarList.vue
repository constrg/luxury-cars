<script setup>
import { ref, computed, watch } from 'vue'
import CarCard from '../components/CarCard.vue'
import cars_data from '../data/cars_data.json'

const cars = ref(cars_data)
const currentPage = ref(1)
const carsPerPage = 5;
const search = ref("")

const searchHandler = computed((search, () => {
    return cars.value = cars_data.filter(c => c.name.toLowerCase().includes(search.value.toLowerCase()))
}))

const paginatedCars = computed(() => {
    const startIndex = (currentPage.value - 1) * carsPerPage
    return cars.value.slice(startIndex, startIndex + carsPerPage)
})

const totalPages = computed(() => Math.ceil(cars.value.length / carsPerPage))

const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++
    }
}

const previousPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--
    }
}
</script>
<template>
    <div class="car_list">
        <div class="container">
            <div class="car_list_content">
                <header class="car_list_content_header">
                    <RouterLink :to="{ name: 'home' }">
                        <h1 class="car_list_content_title">LUXURY CARS</h1>
                    </RouterLink>
                    <input v-model.trim="search" class="search" type="text" placeholder="Search Car Name...">
                </header>
                <div class="car_list_card">
                    <template v-for="car in paginatedCars" v-if="searchHandler.length > 0" :key="car.id">
                        <CarCard :car="car" />
                    </template>
                    <template v-else>
                        <h1 class="no_result_found">No Result Found</h1>
                    </template>
                </div>
                <div class="pagination">
                    <div class="pagination_content">
                        <button class="pagination_btn" @click="previousPage" :disabled="currentPage === 1">Previous
                            Page</button>
                        <span class="page_no">{{ currentPage }}</span>
                        <button class="pagination_btn" @click="nextPage" :disabled="currentPage === totalPages">Next
                            Page</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.car_list_content {
    padding-block: 30px 60px;
}

.car_list_content .car_list_content_header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
}

.car_list_content .car_list_content_header .car_list_content_title {
    font-size: var(--fs-lg);
    font-family: 'a4speed';
    background: linear-gradient(to right, var(--clr-light), var(--clr-gray));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px var(--clr-light);
}

.car_list_content .car_list_content_header .search {
    padding: 10px;
    width: 100%;
    max-width: 400px;
    border-radius: 5px;
    border: none;
    font-size: var(--fs-base);
    outline: none;
}

.car_list_content .car_list_card {
    display: grid;
    gap: 20px;
    width: 100%;
    margin-bottom: 20px;
}

.car_list_content .car_list_card .no_result_found {
    color: var(--clr-light);
    font-size: var(--fs-lg);
    text-align: center;
}

.pagination .pagination_content {
    display: flex;
    align-items: center;
    gap: 20px;
}

.pagination .pagination_content .page_no {
    color: var(--clr-light);
    font-family: 'a4speed';
}

.pagination .pagination_content .pagination_btn {
    padding: 5px;
    border: none;
    border-radius: 5px;
    font-size: var(--fs-sm);
    cursor: pointer;
}
</style>