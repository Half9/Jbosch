<template>
    <figure>
        <a :href="'#' + slice.id">
            <img :src="slice.primary.image.url.substring(0, slice.primary.image.url.lastIndexOf('?'))"
                :alt="slice.primary.image.alt">
            <div class="icon">
                <img src="@/assets/icons/vergroot.svg" alt="Vergroot plaatje" />
            </div>
        </a>


        <a :id="slice.id" href="#" onclick="window.history.go(-1); return false;" class="lightbox">
            <span
                :style="{'background-image': 'url(' + slice.primary.image.url.substring(0, slice.primary.image.url.lastIndexOf('?')) + ')',}">
            </span>
        </a>
    </figure>
</template>

<script setup>
import { getSliceComponentProps } from '@prismicio/vue';
defineProps(getSliceComponentProps())
</script>

<style scoped lang="scss">
figure {
    position: relative;

    .icon {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        z-index: 98;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 1rem;
        border-radius: 1rem;

        @media (max-width: 600px) {
            padding: .5rem;
            border-radius: .5rem;
            bottom: .5rem;
            right: .5rem;
        }

        img[src*="svg"] {
            height: 2rem;
            filter: invert(100%) sepia(99%) saturate(0%) hue-rotate(127deg) brightness(108%) contrast(101%);

            @media (max-width: 600px) {
                height: 1.5rem;
            }
        }
    }
}

.lightbox {
    display: none;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 1em;
    background: rgba(0, 0, 0, 0.8);

    @media (max-width: 600px) {
        padding: 0.3rem;
    }

    &:target {
        display: block;
    }

    span {
        display: block;
        width: 100%;
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }
}
</style>