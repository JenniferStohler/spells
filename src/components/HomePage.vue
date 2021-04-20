<template>
  <div class="spell">
    <h1></h1>
    <p>A list of all your {{ state.test }} active and inactive spells!</p>
    <button class="btn btn-success" @click="getSpells()">Get Spells</button>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "HomePage",
  setup() {
    const state = reactive({
      test: "test",
    });
    return {
      state,
      getSpells() {
        console.log("button works");
      },
    };
  },
};
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #050505;
}
</style>
