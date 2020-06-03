<template>
  <div>
    <h1>Welcome to the Forum</h1>
    <CategoryList :categories="categories"></CategoryList>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import CategoryList from "@/components/CategoryList";
export default {
  computed: {
    categories() {
      return Object.values(this.$store.state.categories);
    },
  },
  methods: {
    ...mapActions(["fetchAllCategories", "fetchForums"]),
  },

  created() {
    this.fetchAllCategories().then((categories) => {
      categories.forEach((category) =>
        this.fetchForums({ ids: Object.keys(category.forums) })
      );
    });
  },

  components: {
    CategoryList,
  },
};
</script>
