

<script>
export default {
  name: "SpellElement",
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