<template>
    <div>
        <div class="catalogue">
            <h2>Catalogue</h2>
        </div>
        <div class="liste-goodies">
            <a v-for="goody in goodies" :key="goody.id" class="liste-goodies--goody" href="Description.html" :title="goody.title">
                <img class="goody--image" :src="goody.image" :alt="goody.alt">
                <span class="goody--text">{{ goody.name }}</span>
            </a>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { goodies } from './goodiesFixture';

export default defineComponent({
    name: 'GoodiesList',
    setup() {
        const title = 'Shodo Goodies';

        return {
            title,
            contactLabel: 'Contact',
            goodies
        };
    },
});
</script>