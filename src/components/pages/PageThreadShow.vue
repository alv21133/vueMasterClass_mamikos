<template>
  <div class="threadsShow">
    <div class="col-large push-top">
      <h1 class="text-center">{{ thread.title }}</h1>
      <p>
        By <a href="#" class="link-unstyled">Robin</a>,
        <AppDate :timestamp="thread.publishedAt" />.
        <span
          style="float:right; margin-top: 2px;"
          class="hide-mobile text-faded text-small"
          >3 replies by 3 contributors</span
        >
      </p>
      <PostList :posts="postUser"></PostList>
      <PostEditor :threadId="id"></PostEditor>
    </div>
  </div>
</template>

<script>
import PostList from "@/components/PostList";
import PostEditor from "@/components/PostEditor";
export default {
  props: {
    id: {
      required: true,
      type: String,
    },
  },

  components: {
    PostList,
    PostEditor,
  },

  computed: {
    thread() {
      return this.$store.state.threads[this.id];
    },
    postUser() {
      const postIds = Object.values(this.thread.posts);
      return Object.values(this.$store.state.posts).filter((post) =>
        postIds.includes(post[".key"])
      );
    },
  },
};
</script>
