// src/components/CreateNote.js
import React, { useState } from 'react';
import '../styles/CreateNote.css';

const CreateNote = ({ onAddNote }) => {
  const [newNote, setNewNote] = useState({ title: '', content: '', color: '#ffffff' });

  const handleInputChange = (e) => {
    setNewNote({
      ...newNote,
      [e.target.name]: e.target.value,
    });
  };

  const handleColorChange = (color) => {
    setNewNote({
      ...newNote,
      color: color,
    });
  };

  const handleAddNote = () => {
    onAddNote(newNote);
    setNewNote({ title: '', content: '', color: '#ffffff' });
  };

  return (
    <div className="create-note">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={newNote.title}
        onChange={handleInputChange}
      />
      <textarea
        name="content"
        placeholder="Content"
        value={newNote.content}
        onChange={handleInputChange}
      ></textarea>
      <input
        type="color"
        name="color"
        value={newNote.color}
        onChange={(e) => handleColorChange(e.target.value)}
      />
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
};

export default CreateNote;
