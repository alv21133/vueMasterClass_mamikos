<template>
  <div class="threadsShow">
    <div class="col-large push-top">
      <h1 class="text-center">{{ thread.title }}</h1>
      <PostList :posts="post"></PostList>
    </div>
  </div>
</template>

<script>
import sourceData from "@/data";
import PostList from "@/components/PostList";
export default {
  props: {
    id: {
      required: true,
      type: String,
    },
  },

  components: {
    PostList,
  },

  data() {
    return {
      thread: sourceData.threads[this.id],
    };
  },

  computed: {
    post() {
      //const postIds = Object.values(this.thread.posts);
      return Object.values(sourceData.posts['-KsjWehQ--apjDBwSBCZ']);
    },
  },

  mounted() {
    console.log(this.post);
  },
};
</script>

<style></style>
