<template>
    <div class="goodies-info">
        <img class="goodies-info--image" :src="image" :alt="goody.alt" />
        <div class="goodies-info--description">
            <h2 class="goodies-info--description--name">{{ goody.name }}</h2>
            <p class="goodies-info--description--detail">{{ goody.detail }}</p>
            <GoodiesSignIn/>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import GoodiesSignIn from "./GoodiesSignIn.vue";
import type { Goodies } from './Goodies';

export default defineComponent({
    name: 'GoodiesInfo',
    components: {
        GoodiesSignIn,
    },
    props: {
        goody: {
            type: Object as PropType<Goodies>,
            required: true,
        }
    },
    setup(props) {
        const image = `/src/assets/${props.goody.image}`;
        return {image}
    }
});

</script>