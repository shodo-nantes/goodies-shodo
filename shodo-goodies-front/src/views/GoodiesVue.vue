<template>
    <div :key="goody.id" class="goody" :title="goody.title" @click="redirectToGoodies">
        <img class="goody--image" :src="goody.image" :alt="goody.alt">
        <span class="goody--text">{{ goody.name }}</span>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { Goodies } from './Goodies';
import router from '@/router';

export default defineComponent({
    name: 'GoodiesVue',
    props: {
        goody: {
            type: Object as PropType<Goodies>,
            required: true,
        },
    },
    setup(props) {
        const redirectToGoodies = () => {
            router.push({ name: 'goodies-detail', params: { id: props.goody.id }});
        }

        return {    
            redirectToGoodies
        }
    }
});
</script>
<style lang="scss" scoped>
.goody {
    margin: 1rem;
    box-sizing: border-box;
    max-width: 450px;
    min-width: 300px;
    background: #FFFFFF;
    border: 0.5px solid #A7A7A7;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    flex: 1;
    cursor: pointer;

    &--image {
        flex: 1;
    }

    &--text {
        display: flex;
        height: 2rem;
        align-items: center;
        margin-left: 0.5rem;
    }    
}
</style>