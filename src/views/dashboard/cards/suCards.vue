<template>
  <v-container id="regular-cards" fluid tag="section">
    <base-v-component heading="Cards" introduction="Une card est un conteneur de contenu flexible et extensible. Il comprend des options, une grande variété de contenus. des props sont disponibles pour les cards et permettent de personnaliser en fonction de vos besoins." />
    <div class="py-3" />
    <div class="mb-10">
      <p class="font-weight-bold">Exemple de card avec checkbox</p>
      <send-up-card :list="isCheckbox">
      </send-up-card>
    </div>

    <div class="mb-10">
      <p class="font-weight-bold">Exemple de card avec switch</p>
      <send-up-card :list="isSwitch">
      </send-up-card>
    </div>
    
    <div class="mb-10">
      <p class="font-weight-bold">Exemple de card avec icone</p>
      <send-up-card :list="isEditable">
      </send-up-card>
    </div>
    
    <div class="mb-10">
      <p class="font-weight-bold">Exemple de card avec image</p>
      <send-up-card :list="isAvatar">
      </send-up-card>
    </div>
  </v-container>
</template>

<script>

import SendUpCard from '@/views/dashboard/component/SendUpCard'

  export default {
    components: {
      SendUpCard
    },
     data() {
    return {
      isCheckbox: [
        {
          id: "checkbox",
          text: "Votre texte ici",
          isCheckbox: true,
          isSwitch: false,
          isEditable: false,
          isAvatar: false,
        },
      ],
      isAvatar: [
        {
          id: "avatar",
          text: "Votre texte ici",
          isCheckbox: false,
          isSwitch: false,
          isEditable: false,
          isAvatar: true,
        },
      ],
      isSwitch: [
        {
          id: "switch",
          text: "Votre text ici",
          isCheckbox: false,
          isSwitch: true,
          isEditable: false,
          isAvatar: false,
        },
      ],
      isEditable: [
        {
          id: "editable",
          text: "Votre text ici",
          isCheckbox: false,
          isSwitch: false,
          isEditable: true,
          isAvatar: false,
        },
      ],
    };
  },
  }

</script>
