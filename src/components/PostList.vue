<template>
  <div class="post-list">
    <postlistItem
      v-for="(post, rq) in posts"
      :posts="post"
      :key="rq"
    ></postlistItem>
  </div>
</template>

<script>
import postlistItem from "./PostListitem";
export default {
  components: {
    postlistItem,
  },

  props: {
    posts: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style></style>
