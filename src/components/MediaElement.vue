<template>
  <div class="media">
    <img src="//placehold.it/75x75" class="mr-3" alt="Spell" />
    <div class="media-body">
      <h5 class="mt-0">{{ spell.name }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "MediaElement",
  props: {
    spell: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {};
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.media {
  cursor: pointer;
  &:hover {
    outline: 1px solid grey;
  }
}
</style>