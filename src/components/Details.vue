
<template>
  <div class="details-component" v-if="state.spell">
    <img :src="state.spell.description" alt="" />
    <h3>{{ state.spell.name }}</h3>
  </div>
</template>

<script>
import { computed, reactive } from "vue";
import { AppState } from "../AppState";
export default {
  name: "DetailsComponent",
  setup() {
    const state = reactive({
      spell: computed(() => AppState.activeSpell),
    });
    return {
      state,
    };
  },
  components: {},
};
</script>

<style lang="scss" scoped>
</style>