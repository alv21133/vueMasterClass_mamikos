<template>
  <div>
    <h1>Welcome to the Forum</h1>
    <CategoryList :categories="categories"></CategoryList>
  </div>
</template>

<script>
import sourceDate from "@/data";
import CategoryList from "@/components/CategoryList";
console.log(sourceDate);

export default {
  data() {
    return {
      categories: Object.values(sourceDate.categories),
      posts: sourceDate.posts,
      users: sourceDate.users,
    };
  },
  components: {
    CategoryList,
  },
};
</script>
