<template>
    <div class="loader"></div>
    <p>Laden</p>
</template>

<style scoped>
.loader {
    border: 12px solid #424242;
    border-radius: 50%;
    border-top: 12px solid #ce6831;
    width: 75px;
    height: 75px;
    -webkit-animation: spin 2s linear infinite;
    /* Safari */
    animation: spin 2s linear infinite;
    margin: 2rem auto;
    box-shadow: 0px 0px 8px 5px rgba(0, 0, 0, 0.7);
}

p {
    text-align: center;
}

/* Safari */
@-webkit-keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
