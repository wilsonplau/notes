const Knex = require("knex");
const config = require("./knexfile.js");
const knex = Knex(config);

const getAllNotes = () => {
  return knex("notes").orderBy("updated_at", "desc");
};
const getNote = (id) => {
  return knex("notes").where({ id });
};
const createNote = ({ title, text }) => {
  return knex("notes")
    .returning(["title", "text", "id", "updated_at"])
    .insert({ title, text });
};
const updateNote = ({ id, title, text }) => {
  return knex("notes")
    .where("id", id)
    .returning(["title", "text"])
    .update({ title, text, updated_at: knex.fn.now() });
};
const deleteNote = (id) => {
  return knex("notes")
    .where("id", id)
    .del();
};

module.exports = {
  getNote,
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
};
