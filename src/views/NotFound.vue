<template>
    <div class="not_found">
        <div class="container">
            <div class="not_found_content">
                <h1 class="not_found_content_title">Not Found</h1>
            </div>
        </div>
    </div>
</template>
<style scoped>
.not_found .not_found_content {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.not_found .not_found_content .not_found_content_title {
    font-size: var(--fs-xl);
    color: var(--clr-light);
    text-align: center;
}
</style>