<script setup>
</script>
<template>
    <div class="home">
        <div class="container">
            <div class="home_content" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                <div class="home_content_text">
                    <h1 class="home_content_title">LUXURY CARS</h1>
                    <p class="home_content_p">A luxury car is a car that provides above-average to high-end levels of
                        comfort, features, and equipment. Often, more expensive materials and surface finishes are used, and
                        buyers expect better build quality.</p>
                    <RouterLink :to="{ name: 'car_list' }"><button class="explore_btn">Explore &#8594;</button></RouterLink>
                    <div class="box"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.box {
    width: 100%;
    height: 250px;
    position: absolute;
    bottom: 30px;
    left: -20px;
    background: rgba(255, 255, 255, 0.17);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    clip-path: polygon(3% 6%, 100% 14%, 90% 93%, 6% 89%);
    z-index: -1;
}

.home {
    background-image: url('../assets/images/bg.jpg');
    background-size: cover;
    background-position: center;
    min-height: 100vh;
}

.home .home_content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    min-height: 100vh;
    padding-block: 0 60px;
    position: relative;
    z-index: 999;
}


.home .home_content .home_content_text .home_content_title {
    font-size: var(--fs-xl);
    font-family: var(--ff-header);
    background: linear-gradient(to right, var(--clr-light), var(--clr-gray));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px var(--clr-light);
}

.home .home_content .home_content_text .home_content_p {
    color: var(--clr-light-gray);
    width: 100%;
    max-width: 700px;
    margin-bottom: 20px;
}

.home .home_content .home_content_text .explore_btn {
    padding: 15px 30px;
    font-size: var(--fs-md);
    border: none;
    clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
    color: var(--clr-light);
    background-color: var(--clr-green);
    font-family: var(--ff-header);
    cursor: pointer;
    transition: all .3s;
    position: relative;
    text-align: center;
    border-radius: 5px;
}

.home .home_content .home_content_text .explore_btn:hover {
    letter-spacing: 1px;
}
</style>
