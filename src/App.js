// src/App.js
import React, { useState, useEffect } from 'react';
import NoteList from './components/NoteList';
import CreateNote from './components/CreateNote';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  const addNote = (newNote) => {
    const updatedNotes = [...notes, { ...newNote, id: Date.now() }];
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const deleteNote = (noteId) => {
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const editNote = (noteId, editedNote) => {
    const updatedNotes = notes.map((note) =>
      note.id === noteId ? { ...note, ...editedNote } : note
    );
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  return (
    <div className="app-container">
      <h1>React Keep Clone</h1>
      <CreateNote onAddNote={addNote} />
      <NoteList notes={notes} onDeleteNote={deleteNote} onEditNote={editNote} />
    </div>
  );
};

export default App;
