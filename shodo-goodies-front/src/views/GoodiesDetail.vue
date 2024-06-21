<template>
    <div>
        <h2>{{ title }}</h2>
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
            title: `Détail du goody ${goody.name}`
        };
    },
});
</script>