const express = require("express");
const apiRouter = express.Router();
const {
  getAllNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
} = require("../../models/notes.js");

apiRouter.get("/notes", async (req, res) => {
  const notes = await getAllNotes();
  res.send(notes);
});

apiRouter.get("/notes/:id", async (req, res) => {
  const note = await getNote(req.params.id);
  res.send(note);
});

apiRouter.post("/notes", async (req, res) => {
  const newNote = { title: "", text: "" };
  const note = await createNote(newNote);
  res.send(note);
});

apiRouter.patch("/notes/:id", async (req, res) => {
  const update = {
    id: req.params.id,
    title: req.body.title,
    text: req.body.text,
  };
  await updateNote(update);
  const notes = await getAllNotes();
  res.send(notes);
});

apiRouter.delete("/notes/:id", async (req, res) => {
  await deleteNote(req.params.id);
  const notes = await getAllNotes();
  res.send(notes);
});

module.exports = apiRouter;
