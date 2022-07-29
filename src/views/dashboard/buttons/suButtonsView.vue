<template>
  <v-container id="regular-cards" fluid tag="section">
    <base-v-component heading="Buttons"
      introduction="la librairie comprend plusieurs styles de boutons prédéfinis, chacun servant son propre objectif sémantique, avec quelques extras ajoutés pour plus de contrôle." />
    <div class="py-3" />
    <v-card>
      <v-card-title class="py-1 d-flex justify-space-between">
        <p class="su_lib--title mb-0">Exemple de boutons standard</p>
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
          <template v-slot:activator="{ on, attrs }">

            <v-btn color="#69c5ba" elevation="0" rounded dark v-bind="attrs" v-on="on">
              Voir le code
            </v-btn>
          </template>
          <v-card>
            <v-toolbar dark color="primary">
              <v-btn icon dark @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>Settings</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-list three-line subheader>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-subtitle class="mb-1">
                    <div id='container'>
                      <span id="result" v-html="marked">
                      </span>
                      <v-icon @click="testingCodeToCopy" class="result_icon" color="error">
                        mdi-content-copy
                      </v-icon>
                    </div>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
          </v-card>
        </v-dialog>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <div class="d-flex justify-space-between">
          <div class="d-flex flex-column align-start">
            <p class="su_lib--legend mb-1">Large primary button</p>
            <SuButton :title="'primary'" :class="{primary :'primary'}" class="large mb-2"></SuButton>
            <p class="su_lib--legend mb-1">Medium primary button</p>
            <SuButton :title="'primary'" :class="{primary :'primary'}" class="medium mb-2"></SuButton>
            <p class="su_lib--legend mb-1">Primary button</p>
            <SuButton :title="'primary'" :class="{primary :'primary'}" class="mb-2"></SuButton>
            <p class="su_lib--legend mb-1">Small primary button</p>
            <SuButton :title="'primary'" :class="{primary :'primary'}" class="small mb-2"></SuButton>
            <p class="su_lib--legend mb-1">X-Small primary button</p>
            <SuButton :title="'primary'" :class="{primary :'primary'}" class="x-small mb-2"></SuButton>
          </div>
          <div class="d-flex flex-column align-start">
            <p class="su_lib--legend mb-1">Large primary outline button</p>
            <SuButton :title="'primary'" :class="{primary :'primary'}" class="outline-btn large mb-2"></SuButton>
            <p class="su_lib--legend mb-1">Medium primary outline button</p>
            <SuButton :title="'primary'" :class="{primary :'primary'}" class="outline-btn medium mb-2"></SuButton>
            <p class="su_lib--legend mb-1">Primary outline button</p>
            <SuButton :title="'primary'" :class="{primary :'primary'}" class="outline-btn mb-2"></SuButton>
            <p class="su_lib--legend mb-1">Small primary outline button</p>
            <SuButton :title="'primary'" :class="{primary :'primary'}" class="outline-btn small mb-2"></SuButton>
            <p class="su_lib--legend mb-1">X-Small primary outline button</p>
            <SuButton :title="'primary'" :class="{primary :'primary'}" class="outline-btn x-small mb-2"></SuButton>
          </div>
        </div>
      </v-card-text>
    </v-card>
    <v-card>
      <v-card-title class="py-1 d-flex justify-space-between">
        <p class="su_lib--title mb-0">Exemple de boutons avec la class disabled</p>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <div class="d-flex justify-space-between">
          <div class="d-flex flex-column align-start">
            <p class="su_lib--legend mb-1">Large primary button</p>
            <SuButton :title="'primary'" :class="{primary :'primary', disabled :'disabled'}" class="large mb-2">
            </SuButton>
            <p class="su_lib--legend mb-1">Medium primary button</p>
            <SuButton :title="'primary'" :class="{primary :'primary', disabled :'disabled'}" class="medium mb-2">
            </SuButton>
            <p class="su_lib--legend mb-1">Primary button</p>
            <SuButton :title="'primary'" :class="{primary :'primary', disabled :'disabled'}" class="mb-2"></SuButton>
            <p class="su_lib--legend mb-1">Small primary button</p>
            <SuButton :title="'primary'" :class="{primary :'primary', disabled :'disabled'}" class="small mb-2">
            </SuButton>
            <p class="su_lib--legend mb-1">X-Small primary button</p>
            <SuButton :title="'primary'" :class="{primary :'primary', disabled :'disabled'}" class="x-small mb-2">
            </SuButton>
          </div>
          <div class="d-flex flex-column align-start">
            <p class="su_lib--legend mb-1">Large primary outline button</p>
            <SuButton :title="'primary'" :class="{disabled :'disabled'}" class="outline-btn large mb-2"></SuButton>
            <p class="su_lib--legend mb-1">Medium primary outline button</p>
            <SuButton :title="'primary'" :class="{disabled :'disabled'}" class="outline-btn medium mb-2"></SuButton>
            <p class="su_lib--legend mb-1">Primary outline button</p>
            <SuButton :title="'primary'" :class="{disabled :'disabled'}" class="outline-btn mb-2"></SuButton>
            <p class="su_lib--legend mb-1">Small primary outline button</p>
            <SuButton :title="'primary'" :class="{disabled :'disabled'}" class="outline-btn small mb-2"></SuButton>
            <p class="su_lib--legend mb-1">X-Small primary outline button</p>
            <SuButton :title="'primary'" :class="{disabled :'disabled'}" class="outline-btn x-small mb-2"></SuButton>
          </div>
        </div>
      </v-card-text>
    </v-card>
    <v-snackbar v-model="snackbar" color="#69c5ba" top>
      <p class="mb-0 text-center">{{ text }}</p>
    </v-snackbar>
  </v-container>
</template>

<script>
  import SuButton from '@/views/dashboard/component/SuButton.vue'
  import {
    marked
  } from 'marked'
  import axios from 'axios'

  export default {
    components: {
      SuButton,
    },
    data() {
      return {
        dialog: false,
        message: '',
        snackbar: false,
        text: `Votre code est bien copié`,
      };
    },
    computed: {
      marked() {
        return marked(this.message);
      }
    },
    methods: {
      async fetchdata() {
        const res = await axios.get(
          'https://s3-eu-west-1.amazonaws.com/statics.send-up.net/Public/seb-test/suButtonCode.md');
        this.message = res.data;
        console.log('test =', this.message = res.data)
      },

      testingCodeToCopy() {
        const text = document.querySelector('#result code').innerText.replace('`', "").replace(new RegExp('^html'), '')
        navigator.clipboard.writeText(text).then((data) => {
          this.snackbar = true;
        }).catch((err) => {
          console.log(err);
          alert('Oops, impossible de copier');
        });
      },
    },
    mounted() {
      this.fetchdata();
    }
  };

</script>

<style lang="scss">
  #result {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 20px;
    width: 100%;
    background: rgb(227, 227, 227);
    border-radius: 17px;
  }

  pre {
    font-size: 1em;
    width: 100%;
  }

  .result_icon {
    position: absolute !important;
    top: 32px;
    right: 40px;
  }

  .v-application code {
    background-color: transparent !important;
    color: currentColor;
  }

</style>
