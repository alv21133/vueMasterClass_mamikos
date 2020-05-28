<template>
  <div class="col-full">
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/pages/PageHome.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
