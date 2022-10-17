<template>
    <template v-if="slice.primary.indent_title.length">
        <PrismicText :field="slice.primary.indent_title" wrapper="h2" />
    </template>
    <PrismicRichText :field="slice.primary.tekst" wrapper="div" class="text" />
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue';
export default {
    props: getSliceComponentProps()
}
</script>