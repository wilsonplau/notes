<template>
  <div class="sidebar">
    <div class="sidebar__top">
      <h1>NOTES</h1>
      <button @click="createNote">+</button>
    </div>
    <input
      class="sidebar__search"
      type="text"
      v-model="filterText"
      placeholder="Search for a note..."
    />
    <div class="sidebar__bottom">
      <sidebar-note v-for="note in notes" :note="note" :key="note.id" />
    </div>
  </div>
</template>

<script>
import SidebarNote from "./SidebarNote";

export default {
  name: "Sidebar",
  components: {
    SidebarNote,
  },
  methods: {
    createNote: function() {
      this.$store.dispatch("saveNote");
      this.$store.dispatch("createNote");
    },
  },
  computed: {
    notes() {
      return this.$store.getters.filteredNotes;
    },
    filterText: {
      get() {
        return this.$store.state.filterText;
      },
      set(value) {
        this.$store.dispatch("setFilterText", value);
      },
    },
  },
};
</script>

<style scoped>
.sidebar {
  border-right: 1px solid #ddd;
}
.sidebar__search {
  outline: none;
  border: none;
  background-color: #5f5f5f;
  width: 100%;
  padding: 10px;
  color: white;
  font-size: 14px;
}
.sidebar__search::placeholder {
  color: #ddd;
}
.sidebar__top {
  border: 1px solid black;
  background-color: black;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.sidebar h1 {
  color: white;
  letter-spacing: 0.1em;
  font-weight: 600;
}
.sidebar button {
  border-radius: 5px;
  font-weight: 500;
  font-size: 18px;
  background-color: white;
  align-self: flex-end;
  border: none;
  outline: none;
}
.sidebar button:hover {
  cursor: pointer;
}
.sidebar__bottom {
  display: relative;
  height: calc(100vh - 83px);
  overflow: scroll;
}
::-webkit-scrollbar {
  display: none;
}
</style>
