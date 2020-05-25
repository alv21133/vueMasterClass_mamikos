<template>
  <div class="hello">
    <h1>Welcome to the Forum</h1>
    <div v-for="(item, q) in threads" :key="q">
      <h2>{{ item.title }}</h2> 
      <div v-for="postId in item.posts" :key="postId">
        <p>{{users[posts[postId].userId].name}}</p>
        <p>{{posts[postId].text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import sourceDate from "@/data";
console.log(sourceDate);

export default {
  name: "HelloWorld",

  data() {
    return {
      threads: sourceDate.threads,
      posts: sourceDate.posts,
      users: sourceDate.users,
    };
  },
};
</script>
