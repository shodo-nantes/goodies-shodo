<template>
    <div class="goodies-details">
        <h2 class="goodies-details--redirection" @click="redirectToCatalogue">
            {{ redirectLabel }}
        </h2>
        <GoodiesInfo :goody="goody" />       
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { goodies } from './goodiesFixture';
import GoodiesInfo from './GoodiesInfo.vue';


export default defineComponent({
    name: 'GoodiesDetails',
    components: {
        GoodiesInfo,
    },
    setup() {
        const id = parseInt(useRoute().params.id as string);
        const router = useRouter();


        const goody = goodies.find((goody) => goody.id === id)!;
        
        const redirectToCatalogue = () => {
            router.push({ name: 'goodies-list' });
        };

        return {
            title: `Détail du goody ${goody.name}`,
            goody,
            redirectLabel: "<- Retour au catalogue",
            redirectToCatalogue
        };
    },
});
</script>