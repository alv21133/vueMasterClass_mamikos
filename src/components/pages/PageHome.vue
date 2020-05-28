<template>
  <div>
    <!-- <div v-for="(thread, q) in threads" :key="q" class="col-large push-top">
      <h1 class="text-center">{{ thread.title }}</h1>
      <div class="post-list">
        <div v-for="(postId, r) in thread.posts" :key="r" class="post">
          <div class="user-info">
            <a href="#" class="user-name">{{
              users[posts[postId].userId].name
            }}</a>

            <a href="#">
              <img
                class="avatar-large"
                :src="users[posts[postId].userId].avatar"
                alt=""
              />
            </a>

            <p class="desktop-only text-small">107 posts</p>
          </div>

          <div class="post-content">
            <div>
              {{ posts[postId].text }}
            </div>
          </div>

          <div class="post-date text-faded">
            {{ posts[postId].publishedAt }}
          </div>
        </div>
      </div>
    </div> -->
    <h1>Welcome to the Forum</h1>
    <Threadslist :threads="threads"></Threadslist>
  </div>
</template>

<script>
import sourceDate from "@/data";
import Threadslist from "@/components/ThreadsList";
console.log(sourceDate);

export default { 
  data() {
    return {
      threads: Object.values(sourceDate.threads),
      posts: sourceDate.posts,
      users: sourceDate.users,
    };
  },
  components: {
    Threadslist,
  },
};
</script>
