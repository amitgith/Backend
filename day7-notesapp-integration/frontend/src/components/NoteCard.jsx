import React from "react";

const NoteCard = ({ note, deleteNote, noteForUpdate }) => {
  return (
    <div className="w-[30%] border border-black p-4 rounded-xl flex flex-col gap-4">
      <h1>{note.title}</h1>
      <p className="text-xs">
        {note.description.length > 10
          ? note.description.substring(0, 10)
          : note.description}
      </p>
      <div className="flex justify-between">
        <button
          onClick={() => noteForUpdate(note)}
          className="p-2 bg-yellow-600 text-white rounded hover:cursor-pointer"
        >
          Update
        </button>
        <button
          onClick={() => deleteNote(note._id)}
          className="p-2 bg-red-600 text-white rounded hover:cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
