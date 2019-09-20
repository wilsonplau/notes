import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    notes: [],
    selectedId: 0,
    inputTitle: "",
    inputText: "",
    filterText: "",
  },
  getters: {
    selectedNote: (state) => {
      return state.notes.find((note) => note.id === state.selectedId);
    },
    filteredNotes: (state) => {
      return state.notes.filter(
        (note) =>
          state.filterText === "" ||
          note.text.toLowerCase().includes(state.filterText.toLowerCase()) ||
          note.title.toLowerCase().includes(state.filterText.toLowerCase())
      );
    },
  },
  mutations: {
    addNote(state, note) {
      state.notes.push(note);
    },
    setNotes(state, notes) {
      state.notes = notes;
    },
    selectNote(state, id) {
      state.selectedId = id;
    },
    setInputTitle(state, title) {
      state.inputTitle = title;
    },
    setInputText(state, text) {
      state.inputText = text;
    },
    setFilterText(state, text) {
      state.filterText = text;
    },
  },
  actions: {
    getNotes({ commit }) {
      axios.get(`/api/notes`).then((response) => {
        commit("setNotes", response.data);
        commit("selectNote", response.data[0].id);
      });
    },
    createNote({ commit }) {
      axios.post(`/api/notes`).then((response) => {
        commit("addNote", response.data[0]);
        commit("selectNote", response.data[0].id);
      });
    },
    saveNote({ state, commit }) {
      const note = { title: state.inputTitle, text: state.inputText };
      axios.patch(`/api/notes/${state.selectedId}`, note).then((response) => {
        commit("setNotes", response.data);
      });
    },
    deleteNote({ commit }, id) {
      axios.delete(`/api/notes/${id}`).then((response) => {
        commit("setNotes", response.data);
        commit("selectNote", response.data[0].id);
      });
    },
    setSelected({ commit }, id) {
      commit("selectNote", id);
    },
    setInputTitle({ commit }, title) {
      commit("setInputTitle", title);
    },
    setInputText({ commit }, text) {
      commit("setInputText", text);
    },
    setFilterText({ commit }, text) {
      commit("setFilterText", text);
    },
  },
});
