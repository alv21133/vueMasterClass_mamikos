<template>
  <div class="col-full push-top">
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
