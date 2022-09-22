<template>
    <div class="container">
        <div class="bg">
            <img src="../assets/project_bg.png">
        </div>
        <div id="projecten" class="content">
            <h2>Projecten</h2>
            <div class="project">
                <h3>Fox and Waterman</h3>
                <div class="text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi quo beatae aliquid suscipit,
                        officia non earum minima nemo enim nobis cupiditate ut in, atque iusto ad deleniti! Consequatur,
                        voluptatem?</p>
                    <div class="icons">
                        <img src="../assets/icons/html5.svg" alt="HTML 5 icon">
                        <img src="../assets/icons/css3-alt.svg" alt="CSS 3 icon">
                        <img src="../assets/icons/js.svg" alt="Javascript icon">
                        <a class="link" href="#" target="_blank">Bekijk de website</a>
                    </div>
                </div>
                <div class="project-img">
                    <img src="../assets/projects/project_fox.png" alt="Website Fox and Waterman">
                </div>
            </div>
            <div class="project">
                <h3>Fox and Waterman</h3>
                <div class="text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi quo beatae aliquid suscipit,
                        officia non earum minima nemo enim nobis cupiditate ut in, atque iusto ad deleniti! Consequatur,
                        voluptatem?</p>
                    <div class="icons">
                        <img src="../assets/icons/html5.svg" alt="HTML 5 icon">
                        <img src="../assets/icons/css3-alt.svg" alt="CSS 3 icon">
                        <img src="../assets/icons/js.svg" alt="Javascript icon">
                        <a class="link" href="#" target="_blank">Bekijk de website</a>
                    </div>
                </div>
                <div class="project-img">
                    <img src="../assets/projects/project_fox.png" alt="Website Fox and Waterman">
                </div>
            </div>
            <div class="project">
                <h3>Fox and Waterman</h3>
                <div class="text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi quo beatae aliquid suscipit,
                        officia non earum minima nemo enim nobis cupiditate ut in, atque iusto ad deleniti! Consequatur,
                        voluptatem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi quo beatae aliquid
                        suscipit,</p>
                    <p>
                        officia non earum minima nemo enim nobis cupiditate ut in, atque iusto ad deleniti! Consequatur,
                        voluptatem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi quo beatae aliquid
                        suscipit,
                        officia non earum minima nemo enim nobis cupiditate ut in, atque iusto ad deleniti! Consequatur,
                        voluptatem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi quo beatae aliquid
                        suscipit,
                        officia non earum minima nemo enim nobis cupiditate ut in, atque iusto ad deleniti! Consequatur,
                        voluptatem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi quo beatae aliquid
                        suscipit,
                    </p>

                    <div class="icons">
                        <img src="../assets/icons/html5.svg" alt="HTML 5 icon">
                        <img src="../assets/icons/css3-alt.svg" alt="CSS 3 icon">
                        <img src="../assets/icons/js.svg" alt="Javascript icon">
                        <a class="link" href="#" target="_blank">Bekijk de website</a>
                    </div>
                </div>
                <div class="project-img">
                    <img src="../assets/projects/project_fox.png" alt="Website Fox and Waterman">
                </div>
            </div>
            <div class="project">
                <h3>Fox and Waterman</h3>
                <div class="text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quasi quo beatae aliquid suscipit,
                        officia non earum minima nemo enim nobis cupiditate ut in, atque iusto ad deleniti! Consequatur,
                        voluptatem?</p>
                    <div class="icons">
                        <img src="../assets/icons/html5.svg" alt="HTML 5 icon">
                        <img src="../assets/icons/css3-alt.svg" alt="CSS 3 icon">
                        <img src="../assets/icons/js.svg" alt="Javascript icon">
                        <a class="link" href="#" target="_blank">Bekijk de website</a>
                    </div>
                </div>
                <div class="project-img">
                    <img src="../assets/projects/project_fox.png" alt="Website Fox and Waterman">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
h2 {
    font-size: 2.5rem;
    letter-spacing: .4rem;
    padding: 4rem 0 5rem 0;
}

h3 {
    font-size: 2rem;
    letter-spacing: .3rem;
    grid-area: title;

}

p {
    line-height: 1.6rem;
}

.container {
    position: relative;
}

.bg {
    position: absolute;
    top: -22px;
    right: 60%;
}

@media (max-width: 1200px) {
    .bg {
        right: 50%;
    }
}

@media (max-width: 870px) {
    .bg {
        right: 20%;
    }
}

.content {
    position: relative;
    z-index: 99;
}

.project {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1rem;
    grid-template-areas:
        'title img'
        'text img';
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 1rem;
    padding: 1.5rem;
    margin-bottom: 2rem;
}

@media (max-width: 870px) {
    .project {
        padding: 1rem;
    }
}

@media (max-width: 750px) {
    .project {
        grid-template-columns: 1fr;
        grid-template-areas:
            'title'
            'img'
            'text';

        img {
            max-width: 100%;
        }
    }
}

.project-img {
    grid-area: img;
    text-align: center;
}

.text {
    grid-area: text;
    display: flex;
    flex-direction: column;

    p {
        line-height: 1.7rem;
        padding-bottom: .5rem;
    }
}

.icons {
    display: flex;
    gap: 1rem;
    margin-top: auto;
    padding-top: 2rem;
    align-items: center;

    img[src*="svg"] {
        height: 2.5rem;
        filter: invert(100%) sepia(99%) saturate(0%) hue-rotate(127deg) brightness(108%) contrast(101%);
    }
}

.link {
    color: #FFF;
    text-decoration: none;
    border: 1px solid #FFF;
    padding: .4rem .6rem;
    margin-left: auto;

    &:hover {
        background-color: #FFF;
        color: var(--bg);
        font-weight: 500;
    }
}
</style>