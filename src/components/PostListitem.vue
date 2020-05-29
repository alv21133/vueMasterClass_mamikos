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

    <div
      class="post-date text-faded"
      :title=" posts.publishedAt  | humanFriendlyDate"
    >
      {{ posts.publishedAt | diffForHumans }}
    </div>
  </div>
</template>
<script>
import sourceDate from "@/data";
import moment from "moment";
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
  filters: {
    humanFriendlyDate(date) {
      return moment.unix(date).format("MMMM Do YYYY, h:mm:ss a");
    },
    diffForHumans(date) {
      return moment.unix(date).fromNow();
    },
  },
};
</script>

<style></style>
