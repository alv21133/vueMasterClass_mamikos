<template>
  <div class="threadsShow">
    <div class="col-large push-top">
      <h1 class="text-center">{{ thread.title }}</h1>
      <PostList :posts="postUser"></PostList>
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
    postUser() {
      const postIds = Object.values(this.thread.posts);
      return Object.values(sourceData.posts).filter((post) =>
        postIds.includes(post[".key"])
      );
    },
  },

  mounted() {
    console.log(this.post);
  },
};
</script>

<style></style>
