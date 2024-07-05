<template>
    <header class="header">
        <img class="header--logo" src="@/assets/logo-shodo.png" alt="logo shodo">
        <div class="header--title">
            <h1>{{ title }}</h1>
        </div>
        <div class="header--contact">
            <a href="contact.html">
                <h2>{{ contactLabel }}</h2>
            </a>
        </div>
    </header>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'HeaderVue',
    setup() {
        const title = 'Shodo Goodies';

        return {
            title,
            contactLabel: 'Contact',
        };
    },
});
</script>