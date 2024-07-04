<script setup>
import { useRoute } from 'vue-router'
import cars_data from '../data/cars_data.json'

const route = useRoute()
const car = cars_data.find(c => c.id === Number(route.params.id))

</script>
<template>
    <div class="car_info">
        <div class="container">
            <div class="car_info_content">
                <RouterLink :to="{ name: 'car_list' }"><button class="back_btn">&#8592; Back</button></RouterLink>
                <div class="car_info_card" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                    <img class="car_info_card_img" :src="car.img" alt="car_img">
                    <div class="car_info_card_text">
                        <h1 class="car_info_card_name">{{ car.name }}</h1>
                        <p class="car_info_card_description">{{ car.description }}</p>
                        <p class="car_info_card_founder"><strong>Founder/s:</strong> {{ car.founder }}</p>
                        <p class="car_info_card_founded"><strong>Founded:</strong> {{ car.founded }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.car_info .car_info_content {
    padding-block: 30px 60px;
}

.car_info .car_info_content .back_btn {
    padding: 10px;
    border: none;
    font-size: var(--fs-sm);
    border-radius: 5px;
    margin-bottom: 20px;
    cursor: pointer;
}

.car_info .car_info_content .car_info_card {
    background-color: var(--clr-light);
    border-radius: 5px;
    padding: 20px;
}

.car_info .car_info_content .car_info_card .car_info_card_img {
    height: 200px;
    object-fit: cover;
    margin-bottom: 20px;
    border-radius: 3px;
}

.car_info .car_info_content .car_info_card .car_info_card_text {
    display: grid;
    row-gap: 20px;
}

.car_info .car_info_content .car_info_card .car_info_card_text .car_info_card_name {
    font-size: var(--fs-lg);
    font-family: var(--ff-header);
}

.car_info .car_info_content .car_info_card .car_info_card_text .car_info_card_description {
    text-align: justify;
}
</style>