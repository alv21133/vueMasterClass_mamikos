<template>
  <div class="col-full push-top">
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/pages/PageHome.vue";
import asyncDataStatus from "@/mixins/asyncDataStatus";
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  mixins: [asyncDataStatus],

  mounted() {
    this.asyncDataStatus_fetched();
  },
};
</script>
