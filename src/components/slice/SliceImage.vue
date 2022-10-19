<template>
    <div class="image">
        <a :href="'#' + slice.id">
            <figure>
                <img :src="slice.primary.image.url.substring(0, slice.primary.image.url.lastIndexOf('?'))"
                    :alt="slice.primary.image.alt">
                <PrismicText v-if="slice.primary.caption.length > 0" :field="slice.primary.caption"
                    wrapper="figcaption" />
            </figure>

            <div class="icon">
                <img src="@/assets/icons/vergroot.svg" alt="Vergroot plaatje" />
            </div>
        </a>
    </div>


    <a :id="slice.id" href="#" onclick="window.history.go(-1); return false;" class="lightbox">
        <span
            :style="{'background-image': 'url(' + slice.primary.image.url.substring(0, slice.primary.image.url.lastIndexOf('?')) + ')',}">
        </span>
    </a>

</template>

<script setup>
import { getSliceComponentProps } from '@prismicio/vue';
defineProps(getSliceComponentProps())
</script>

<style scoped lang="scss">
.image {
    position: relative;
    margin-bottom: 3rem;

    figure {
        width: 100%;
        max-height: 600px;
        overflow-y: hidden;
        text-align: center;
        margin-block: 6rem;

        @media (max-width: 600px) {
            margin-block: 2rem;
        }

        img {
            max-width: 100%;
        }

        figcaption {
            position: absolute;
            height: 2rem;
            left: 0;
            bottom: 0;
            right: 0;
            font-weight: 400;
            font-size: .9rem;
            letter-spacing: .02rem;
            color: #FFF;
            font-style: italic;
            transform: translateY(2.5rem);
        }
    }

    .icon {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
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