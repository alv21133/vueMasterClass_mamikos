<template>
  <div class="thread-list">
    <h2 class="list-title">Threads</h2>
    <ThreadListItem
      v-for="(thread, ll) in threads"
      :thread="thread"
      :id="ll"
      :key="ll"
    ></ThreadListItem>
  </div>
</template>

<script>
import ThreadListItem from "./TreadsListitem";
export default {
  name: "threadsList",
  components: {
    ThreadListItem,
  },

  props: {
    threads: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style></style>
