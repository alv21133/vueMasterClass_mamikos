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
      <PostEditor @save="addPost" :threadId="id"></PostEditor>
    </div>
  </div>
</template>

<script>
import sourceData from "@/data";
import PostList from "@/components/PostList";
import PostEditor from "@/components/PostEditor";
export default {
  data() {
    return {
      thread: sourceData.threads[this.id],
      newPostTest: "",
    };
  },
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
    postUser() {
      const postIds = Object.values(this.thread.posts);
      return Object.values(sourceData.posts).filter((post) =>
        postIds.includes(post[".key"])
      );
    },
  },
  methods: {
    addPost(mypost) {
      const post = mypost.post;
      const postId = mypost.post[".key"];
      this.$set(sourceData.posts, postId, post);
      this.$set(this.thread.posts, postId, postId);
      this.$set(sourceData.users[post.userId].posts, postId, postId);
    },
  },
};
</script>

<style></style>
