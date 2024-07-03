<template>
    <div>
        <h2 class="title" @click="redirectToCatalogue">
            {{ redirectLabel }}
        </h2>
        <div>
            <h1>{{ title }}</h1>
            <p>{{ goody.name }}</p>
            <p>{{ goody.title }}</p>
            <p>{{ goody.detail }}</p>
            <img class="goody--image" :src="image" :alt="goody.alt" />
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { goodies } from './goodiesFixture';


export default defineComponent({
    name: 'GoodiesDetail',
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
<style lang="scss" scoped>
.title {
    display: flex;
    flex: 1;
    cursor: pointer;  
}
</style>