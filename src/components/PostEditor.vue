<template>
  <form @submit.prevent="save">
    <div class="form-group">
      <textarea
        cols="30"
        rows="10"
        class="form-input"
        v-model="text"
      ></textarea>
    </div>
    <div class="form-actions">
      <button class="btn-blue">Submit Post</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
  props: {
    threadId: {
      required: true,
    },
  },
  methods: {
    save() {
      console.log(this.text);

      const postId = "greatpost" + Math.random();
      let post = {
        text: this.text,
        publishedAt: Math.floor(Date.now() / 100),
        threadId: this.threadId,
        userId: "jUjmgCurRRdzayqbRMO7aTG9X1G2",
        ".key": postId,
      };

      this.text = "";
      this.$emit("save", { post });
    },
  },
};
</script>

<style></style>
