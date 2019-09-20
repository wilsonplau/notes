<template>
  <div class="wrapper">
    <sidebar />
    <editor />
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import Editor from "./Editor";

export default {
  name: "App",
  components: {
    Sidebar,
    Editor,
  },
  created() {
    this.$store.dispatch("getNotes");
  },
};
</script>

<style src="../reset.css"></style>
<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
div,
input {
  box-sizing: border-box;
}
.wrapper {
  display: grid;
  grid-template-columns: 300px 1fr;
}
</style>
