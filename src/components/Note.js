// src/components/Note.js
import React, { useState } from 'react';
import '../styles/Notes.css';

const Note = ({ note, onDeleteNote, onEditNote }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedNote, setEditedNote] = useState({ title: note.title, content: note.content });

  const handleDelete = () => {
    onDeleteNote(note.id);
  };

  const handleEditToggle = () => {
    setEditing(!isEditing);
  };

  const handleEditSave = () => {
    onEditNote(note.id, editedNote);
    setEditing(false);
  };

  const handleInputChange = (e) => {
    setEditedNote({
      ...editedNote,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="note" style={{ backgroundColor: note.color }}>
      {isEditing ? (
        <>
          <input
            type="text"
            name="title"
            value={editedNote.title}
            onChange={handleInputChange}
          />
          <textarea
            name="content"
            value={editedNote.content}
            onChange={handleInputChange}
          ></textarea>
          <button onClick={handleEditSave}>Save</button>
        </>
      ) : (
        <>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleEditToggle}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Note;
