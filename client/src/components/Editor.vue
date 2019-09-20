<template>
  <div class="editor">
    <div class="editor__notification">
      {{ isSaved ? "Saved" : "Not Saved" }}
    </div>
    <input type="text" v-model="inputTitle" />
    <textarea v-model="inputText" />
    <div class="editor__buttons">
      <button v-if="!isSaved" class="editor__saveButton" @click="saveNote">
        <img :src="saveIcon" />
      </button>
      <button class="editor__deleteButton" @click="deleteNote">
        <img :src="deleteIcon" />
      </button>
    </div>
  </div>
</template>

<script>
import saveIcon from "../assets/save.svg";
import deleteIcon from "../assets/delete.svg";

export default {
  name: "Editor",
  data() {
    return {
      isSaved: false,
      saveInterval: {},
      saveIcon,
      deleteIcon,
    };
  },
  methods: {
    saveNote: function() {
      if (
        !this.isSaved &&
        (this.inputTitle !== this.selectedNote.title ||
          this.inputText !== this.selectedNote.text)
      ) {
        this.$store.dispatch("saveNote");
      }
      this.isSaved = true;
    },
    deleteNote: function() {
      const id = this.selectedNote.id;
      this.$store.dispatch("deleteNote", id);
    },
  },
  mounted: function() {
    this.saveInterval = setInterval(this.saveNote, 5000);
  },
  computed: {
    selectedNote() {
      return this.$store.getters.selectedNote;
    },
    inputTitle: {
      get() {
        return this.$store.state.inputTitle;
      },
      set(value) {
        this.$store.dispatch("setInputTitle", value);
      },
    },
    inputText: {
      get() {
        return this.$store.state.inputText;
      },
      set(value) {
        this.$store.dispatch("setInputText", value);
      },
    },
  },
  watch: {
    inputTitle: function() {
      this.isSaved = false;
    },
    inputText: function() {
      this.isSaved = false;
    },
    selectedNote: function(newNote) {
      this.inputTitle = newNote.title;
      this.inputText = newNote.text;
    },
  },
};
</script>

<style>
.editor {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.editor__notification {
  background-color: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  top: 25px;
  color: #ccc;
  font-size: 12px;
  text-transform: uppercase;
}
.editor input[type="text"] {
  padding: 50px 50px 0px 50px;
  background-color: #eee;
  outline: none;
  border: none;
  font-size: 36px;
  font-weight: 600;
}
.editor textarea {
  background-color: #eee;
  flex: 1;
  line-height: 1.5em;
  font-size: 16px;
  outline: none;
  border: none;
  padding: 10px 50px 50px 50px;
}
.editor__buttons {
  position: absolute;
  bottom: 25px;
  right: 25px;
}
.editor__buttons button {
  background-color: #222;
  border-radius: 10px;
  margin-left: 10px;
  padding: 5px 15px;
  outline: none;
}
.editor__buttons button:hover {
  cursor: pointer;
}
</style>
