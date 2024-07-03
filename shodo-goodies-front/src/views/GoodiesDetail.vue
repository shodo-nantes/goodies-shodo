<template>
    <div class="goodies-details">
        <h2 class="h2-description" @click="redirectToCatalogue">
            {{ redirectLabel }}
        </h2>
        <div class="case-description">
            <img class="goody--image" :src="image" :alt="goody.alt" />
            <div class="group-text-description">
                <div>
                    <h2 class="h2-titre-description">{{ goody.name }}</h2>
                </div>
                <div>
                    <p class="p-text-description">{{ goody.detail }}</p>
                </div>
                <div>
                    <center>
                        <p class="p-text-sign-in">Pour dire que vous êtes intéressé par ce goodies, veuillez vous connecter</p>
                        <a style="text-decoration:none" href="Description-sign-in.html" ><div class="sign-in"><p>Sign in</p></div></a>
                    </center>
                </div>
            </div>
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