<script setup>
import { RouterLink } from 'vue-router'
const { car } = defineProps(['car'])
</script>

<template>
    <RouterLink :to="`/car_info/${car.id}`">
        <div class="car_card" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
            <div class="car_card_content">
                <div class="car_card_info">
                    <h1 class="car_card_info_name">{{ car.name }}</h1>
                    <p class="car_card_info_tap_to_view_info">Click to view info</p>
                </div>
                <img class="car_card_img" :src="car.img" alt="car_img">
            </div>
        </div>
    </RouterLink>
</template>


<style scoped>
.car_card {
    background-color: var(--clr-light);
    width: 100%;
    height: auto;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 5px;
    cursor: pointer;
}

.car_card .car_card_content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}

.car_card .car_card_content .car_card_info {
    padding: 20px;
    z-index: 999;
}

.car_card .car_card_content .car_card_info .car_card_info_name {
    margin-bottom: 10px;
    font-size: var(--fs-lg);
    color: #fff;
    font-family: 'a4speed';
}

.car_card .car_card_content .car_card_info .car_card_info_tap_to_view_info {
    font-size: var(--fs-sm);
    background-color: var(--clr-green);
    border-radius: 20px;
    color: var(--clr-light);
    padding: 5px;
    width: 100%;
    max-width: 120px;
    text-align: center;
}


.car_card .car_card_content .car_card_img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    position: absolute;
    right: 0;
    filter: grayscale(100%) brightness(40%) blur(1px);
    transition: all 1s;
}

.car_card:hover {

    box-shadow: rgba(255, 255, 255, 0.24) 0px 3px 8px;
    border: 1px solid #5a5a5a;
}

.car_card:hover .car_card_img {
    filter: unset;
}
</style>