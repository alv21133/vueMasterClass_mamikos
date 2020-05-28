<template>
  <div class="post">
    <div class="user-info">
      <a href="#" class="user-name">{{ user.name }}</a>

      <a href="#">
        <img class="avatar-large" :src="user.avatar" alt="user" />
      </a>

      <p class="desktop-only text-small">{{ userPostCount }} posts</p>
    </div>

    <div class="post-content">
      <div>
        {{ posts.text }}
      </div>
    </div>

    <div class="post-date text-faded">
      {{ posts.publishedAt }}
    </div>
  </div>
</template>
<script>
import sourceDate from "@/data";
export default {
  props: {
    posts: {
      required: true,
      type: Object,
    },
  },
  computed: {
    user() {
      return sourceDate.users[this.posts.userId];
    },
    userPostCount() {
      return Object.keys(this.user.posts).length;
    },
  },
};
</script>

<style></style>
