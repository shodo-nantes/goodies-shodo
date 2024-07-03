<template>
    <div>
        <h2 class="title"> Retour au catalogue</h2>
        <div>
            <h1>{{ title }}</h1>
            <p>{{ goody.name }}</p>
            <p>{{ goody.title }}</p>
            <p>{{ goody.detail }}</p>
            <img class="goody--image" :src="goody.image" :alt="goody.alt" />
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { goodies } from './goodiesFixture';


export default defineComponent({
    name: 'GoodiesDetail',
    setup() {
        const id = parseInt(useRoute().params.id as string);

        const goody = goodies.find((goody) => goody.id === id)!;

        return {
            title: `Détail du goody ${goody.name}`,
            goody,
        };
        
        
    },
    
    
});

</script>
<style lang="scss" scoped>
.title {
    width: 10em;
    display: flex;
    flex: 1;
    cursor: pointer;  
}
</style>