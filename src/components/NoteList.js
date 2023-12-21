// src/components/NoteList.js
import React from 'react';
import Note from './Note';

const NoteList = ({ notes, onDeleteNote, onEditNote }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          onDeleteNote={onDeleteNote}
          onEditNote={onEditNote}
        />
      ))}
    </div>
  );
};

export default NoteList;
