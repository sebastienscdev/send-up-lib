<template>
  <div id="suCard" class="mb-4">
    <div
      v-for="(item, index) in list"
      :key="index"
      class="card scale-in-center mt-4"
      :style="style.customWidth"
    >
      <div class="card-horizontal" :style="style.customHeight">
        <div @click="checkAndEmit(item)" class="card-horizontal-content">
          <v-avatar v-if="item.isAvatar" id="avatar-culture">
            <v-img
              :lazy-src="'/images/img_default_actus.png'"
              :src="item.img"
            ></v-img>
          </v-avatar>
          <div class="card-body">
            <slot name="change-attribut" :item="item">
              <h6 v-if="item.isAvatar" class="card-title ml-2">{{ item.text }}</h6>
              <h6 v-else class="card-title">{{ item.text }}</h6>
            </slot>
            <slot name="change-culture" :test="item"> </slot>
            <p v-if="item.accountNumber" class="account-number">
              {{ item.account }}
            </p>
            <slot
              name="informations"
              :info="{ item: item, index: index }"
            ></slot>
          </div>
        </div>
        <!--        CHECKBOX      -->
        <div v-if="item.isCheckbox" class="checkbox">
          <input
            type="checkbox"
            v-model="item.checked"
            name="validation"
            value=""
            @change="emit(item)"
          />
        </div>
        <!--        SWITCH      -->
        <v-list-item-action v-if="item.isSwitch">
          <v-switch class="pr-2" inset color="#65c6bb" v-model="item.checked" @change="emit(item)"></v-switch>
          <v-icon
            @click="checkAndEmit(item)"
            v-if="item.checked"
            class="validation-icon"
            small
          >
          $iconeCheckWhite
          </v-icon>
        </v-list-item-action>

        <!--        IS EDITABLE AND DELETABLE     -->
        <div
          class="combo-content-modification"
          v-if="item.isEditable && item.isDeletable"
        >
          <div class="d-inline-flex">
            <div class="logo-action" @click="$emit('edit')">
              <v-icon class="combo logo-modify"> $iconeModify </v-icon>
            </div>
            <div class="separate"></div>
            <div class="logo-action" @click="$emit('delete')">
              <v-icon class="combo logo-delete"> $iconeTrash </v-icon>
            </div>
          </div>
        </div>
        <!--        IS EDITABLE     -->
        <div class="content-modification mr" v-else-if="item.isEditable">
          <div>
            <v-icon class="logo-modify"> $iconeModify </v-icon>
          </div>
          <v-icon v-if="item.checked" class="validation-icon" small>
            $iconeCheckWhite
          </v-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SendUpCard",
  data() {
    return {
      style: {
        customWidth: "width: 100%",
        customHeight: "height: 75px",
        padding: "padding: 0"
      }
    };
  },
  props: {
    list: {}
  },
  methods: {
    emit(item) {
      if (item.subcategoryList) {
        this.$emit("choice", item.checked);
      } else {
        this.$emit("choice", item);
      }
    },
    checkAndEmit(item) {
      item.checked = !item.checked;
      if (item.subcategoryList) {
        this.$emit("choice", item.checked);
      } else {
        this.$emit("choice", item);
      }
    }
  },
};
</script>