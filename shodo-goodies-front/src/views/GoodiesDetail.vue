<template>
    <div class="goodies-details">
        <h2 class="goodies-details--redirection" @click="redirectToCatalogue">
            {{ redirectLabel }}
        </h2>
        <div class="goodies-details--content">
            <img class="goodies-details--content--image" :src="image" :alt="goody.alt" />
            <div class="goodies-details--content--description">
                <h2 class="goodies-details--content--description--name">{{ goody.name }}</h2>
                <p class="goodies-details--content--description--detail">{{ goody.detail }}</p>
                <GoodiesSignIn />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { goodies } from './goodiesFixture';
import GoodiesSignIn from "./GoodiesSignIn.vue";


export default defineComponent({
    name: 'GoodiesDetail',
    components: {
        GoodiesSignIn: GoodiesSignIn,
    },
    setup() {
        const id = parseInt(useRoute().params.id as string);
        const router = useRouter();

        const goody = goodies.find((goody) => goody.id === id)!;
        const image = `/src/assets/${goody.image}`;
        const redirectToCatalogue = () => {
            router.push({ name: 'goodies-list' });
        };

        return {
            title: `Détail du goody ${goody.name}`,
            goody,
            image,
            redirectLabel: "<- Retour au catalogue",
            redirectToCatalogue
        };
    },
});
</script>