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
      <button class="btn-blue">Submit post</button>
      <button v-if="isUpdate" @click.prevent="cancel" class="btn btn-ghost">
        Cancel
      </button>
      <button class="btn-blue">
        {{ isUpdate ? "Update" : "Submit post" }}
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      text: this.post ? this.post.text : "",
    };
  },
  props: {
    threadId: {
      required: false,
    },
    post: {
      type: Object,
      validator: (obj) => {
        const keyIsValid = typeof obj[".key"] === "string";
        const textIsValid = typeof obj.text === "string";
        const valid = keyIsValid && textIsValid;
        if (!textIsValid) {
          console.error(
            "😳 The post prop object must include a `text` attribute."
          );
        }
        if (!keyIsValid) {
          console.error(
            "😳 The post prop object must include a `.key` attribute."
          );
        }
        return valid;
      },
    },
  },
  methods: {
    save() {
      this.persist().then((post) => {
        this.$emit("save", { post });
      });

      // let post = {
      //   text: this.text,
      //   publishedAt: Math.floor(Date.now() / 100),
      //   threadId: this.threadId,
      //   userId: "jUjmgCurRRdzayqbRMO7aTG9X1G2",
      // };

      // this.text = "";
      // this.$emit("save", { post });
      // this.$store.dispatch("createPost", post);
    },
    cancel() {
      this.$emit("cancel");
    },

    create() {
      const post = {
        text: this.text,
        threadId: this.threadId,
      };
      this.text = "";
      return this.$store.dispatch("createPost", post);
    },
    update() {
      const payload = {
        id: this.post[".key"],
        text: this.text,
      };
      return this.$store.dispatch("updatePost", payload);
    },

    persist() {
      return this.isUpdate ? this.update() : this.create();
    },
  },

  computed: {
    isUpdate() {
      return !!this.post;
    },
  },
};
</script>

<style></style>
