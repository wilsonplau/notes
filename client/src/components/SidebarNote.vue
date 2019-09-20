<template>
  <div class="sidebar__note" @click="() => setSelected(note.id)">
    <h1>{{ note.title }}</h1>
    <p>{{ note.text }}</p>
    <small>{{ lastUpdated }}</small>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "SidebarNote",
  props: ["note"],
  methods: {
    setSelected: function(index) {
      this.$store.dispatch("saveNote");
      this.$store.dispatch("setSelected", index);
    },
  },
  computed: {
    lastUpdated: function() {
      const updatedAt = moment(this.note.updated_at);
      return updatedAt.fromNow();
    },
  },
};
</script>

<style>
.sidebar__note {
  border-bottom: 1px solid #ddd;
  padding: 25px;
  display: flex;
  flex-direction: column;
}
.sidebar__note:hover {
  cursor: pointer;
  background-color: #f0f0f0;
}
.sidebar__note h1 {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
}
.sidebar__note p {
  line-height: 1.2em;
  font-size: 14px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.sidebar__note small {
  margin-top: 15px;
  font-size: 12px;
  color: #aaa;
  align-self: flex-end;
}
</style>
