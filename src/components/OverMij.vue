<template>
    <div id="overmij" class="over-mij-bg">
        <div class="container">
            <div class="grid">
                <img src="../assets/schilderij_klein.png" alt="Ik op de motor en foto van mijn 3d printer">
                <div class="papier">

                    <p>Ik heb altijd al een passie gehad met webdesign en desktoppublishing. Als zins ik een kleine
                        man
                        was. Toen maakte ik al website en flyers voor familie, vrienden en buren.
                    </p>
                    <p>Na jaren lang op de vrachtwagen gezeten te hebben vond ik tijd om mijn passie achteraan te
                        gaan.
                    </p>
                    <p>Heb via het STAP-budget een opleiding Web Development gevolgd. Na deze succesvol afgerond te
                        hebben,
                        heb ik mij verder verdiept in het maken van website's</p>

                </div>
                <img src="../assets/schilderij_groot.png" alt="Ik met mijn vrachtwagen.">
            </div>
        </div>
    </div>
    <div class="over-mij-bg-footer"></div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.over-mij-bg {
    background: url(@/assets/mij_bg_top.png);
    background-repeat: repeat;
    min-height: 978px;
    margin-top: -10px;
}

.over-mij-bg-footer {
    background: url(@/assets/mij_bg_footer_groot.png);
    background-repeat: repeat-x;
    min-height: 315px;
    margin-top: -250px;
    z-index: 50;
    position: relative;
}

img {
    max-width: 100%;
}

.grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    z-index: 99;
    position: relative;
    padding-top: 6rem;
    justify-items: center;
    grid-template-areas:
        'fotok text'
        'fotog text';

    &>img:nth-child(1) {
        grid-area: fotok;
    }

    &>img:nth-child(3) {
        grid-area: fotog;

    }
}


@media (max-width:870px) {
    .grid {
        grid-template-columns: 1fr;
        padding-top: 2rem;
        grid-template-areas:
            'fotok'
            'text'
            'fotog';
    }

    .papier {
        margin-inline: 0.5rem;
    }
}

.papier {
    grid-area: text;
    background: url(@/assets/papier.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom right;
    padding: 2rem;
    box-shadow: 0 0 25px 2px #000;
    transform: rotate(-2deg);
    margin-right: 1rem;

    p {
        margin-bottom: 1rem;
        font-size: 1.5rem;
        color: #000;
        font-family: 'Gloria Hallelujah', cursive;
    }
}

@media (max-width:540px) {
    .papier {
        transform: rotate(0deg);
    }
}
</style>