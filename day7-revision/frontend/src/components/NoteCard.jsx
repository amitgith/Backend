import React from "react";
import { PencilLine, Trash2 } from "lucide-react";

const NoteCard = ({ note, deleteNote, noteForUpdate }) => {
  return (
    <div className="group relative flex flex-col justify-between w-full sm:w-[30%] md:w-[23%] p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1">
      {/* Note Content Area */}
      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-semibold text-slate-800 line-clamp-1 group-hover:text-amber-600 transition-colors duration-200">
          {note.title}
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed">
          {note.description.length > 40
            ? `${note.description.substring(0, 40)}...`
            : note.description}
        </p>
      </div>

      {/* Action Buttons Area */}
      <div className="flex items-center justify-between gap-2 mt-5 pt-3 border-t border-slate-50">
        {/* Update Button */}
        <button
          onClick={() => noteForUpdate(note)}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-700 rounded-lg text-xs font-medium cursor-pointer transition-colors duration-200"
        >
          <PencilLine className="w-3.5 h-3.5" />
          Edit
        </button>

        {/* Delete Button */}
        <button
          onClick={() => deleteNote(note._id)}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-lg text-xs font-medium cursor-pointer transition-colors duration-200"
        >
          <Trash2 className="w-3.5 h-3.5" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
