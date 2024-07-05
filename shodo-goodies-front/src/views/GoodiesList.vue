<template>
    <div>
        <div class="catalogue">
            <h2>{{ catalogueLabel }}</h2>
        </div>
        <div class="liste-goodies">
            <GoodiesVue v-for="goody in goodies" :key="goody.id" :goody="goody" />
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { goodies } from './goodiesFixture';
import GoodiesVue from './GoodiesVue.vue';

export default defineComponent({
    name: 'GoodiesList',
    components: {
        GoodiesVue,
    },
    setup() {
        const title = 'Shodo Goodies';

        return {
            title,
            catalogueLabel: 'Catalogue',
            contactLabel: 'Contact',
            goodies,
        };
    },
});
</script>