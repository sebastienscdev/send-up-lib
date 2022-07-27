<template>
    <v-container id="regular-cards" fluid tag="section">
        <base-v-component heading="Buttons" introduction="la librairie comprend plusieurs styles de boutons prédéfinis, chacun servant son propre objectif sémantique, avec quelques extras ajoutés pour plus de contrôle." />
        <div class="py-3" />
        <p class="font-weight-bold mb-2">Exemple de boutons</p>
        <div class="d-flex justify-space-between">
            <div class="d-flex flex-column align-start">
                <p class="mb-1">Large primary button</p>
                <SuButton :title="'primary'" class="primary large mb-2"></SuButton>
                <p class="mb-1">Primary button</p>
                <SuButton :title="'primary'" class="mb-2"></SuButton>
                <p class="mb-1">Small primary button</p>
                <SuButton :title="'primary'" class="small mb-2"></SuButton>
                <p class="mb-1">X-Small primary button</p>
                <SuButton :title="'primary'" class="x-small mb-2"></SuButton>
            </div>
            <div class="d-flex flex-column align-start">
                <p class="mb-1">Large primary button</p>
                <SuButton :title="'primary'" class="outline-btn large mb-2"></SuButton>
                <p class="mb-1">Primary button</p>
                <SuButton :title="'primary'" class="outline-btn mb-2"></SuButton>
                <p class="mb-1">Small primary button</p>
                <SuButton :title="'primary'" class="outline-btn small mb-2"></SuButton>
                <p class="mb-1">X-Small primary button</p>
                <SuButton :title="'primary'" class="outline-btn x-small mb-2"></SuButton>
            </div>
        </div>
    </v-container>
</template>

<script>
import SuButton from '@/views/dashboard/component/SuButton.vue'

export default {
    components: {
        SuButton,
    },
    data() {
        return {};
    },
}
</script>
