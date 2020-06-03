<template>
  <div v-if="posts && user" class="post">
    <div class="user-info">
      <a href="#" class="user-name">{{ user.name }}</a>

      <a href="#">
        <img class="avatar-large" :src="user.avatar" alt="user" />
      </a>
      <p class="desktop-only text-small">{{ userThreadsCount }} threads</p>
      <p class="desktop-only text-small">{{ userPostCount }} posts</p>
    </div>

    <div class="post-content">
      <div v-if="!editing">
        {{ posts.text }}
      </div>
      <template v-if="!editing">
        <a
          @click.prevent="editing = true"
          href="#"
          style="margin-left: auto;"
          class="link-unstyled"
          title="Make a change"
          ><i class="fa fa-pencil"></i
        ></a>
      </template>
      <div v-else>
        <PostEditor
          :post="posts"
          @save="editing = false"
          @cancel="editing = false"
        />
      </div>
    </div>

    <div class="post-date text-faded">
      <div v-if="posts.edited" class="edition-info">edited</div>
      <AppDate :timestamp="posts.publishedAt"></AppDate>
    </div>
  </div>
</template>
<script>
import sourceDate from "@/data";
import PostEditor from "./PostEditor";
export default {
  props: {
    posts: {
      required: true,
      type: Object,
    },
  },
  components: {
    PostEditor,
  },

  data() {
    return {
      editing: false,
    };
  },
  computed: {
    user() {
      return sourceDate.users[this.posts.userId];
    },
    userPostCount() {
      return this.$store.getters.userPostsCount(this.posts.userId);
    },
    userThreadsCount() {
      return this.$store.getters.userThreadsCount(this.posts.userId);
    },
  },
};
</script>

<style></style>
