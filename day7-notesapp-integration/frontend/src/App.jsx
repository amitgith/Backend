import React, { useEffect, useState } from "react";
import axios from "axios";
import NoteCard from "./components/NoteCard";
const App = () => {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
  });
  const [allNotes, setAllNotes] = useState([]);
  const [updateNoteId, setUpdateNoteId] = useState(null);
  const handleChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (updateNoteId) {
      // api call
      let res = await axios.put(
        `http://localhost:3000/notes/${updateNoteId}`,
        formValues,
      );
      console.log(res);
      getAllNotes();
      setUpdateNoteId(null);
    } else {
      // api call
      let res = await axios.post(
        "http://localhost:3000/notes/create",
        formValues,
      );
      console.log(res);
      getAllNotes();
    }

    console.log(formValues);
    setFormValues({
      title: "",
      description: "",
    });
  };

  let getAllNotes = async () => {
    try {
      let res = await axios.get("http://localhost:3000/notes/allNotes");
      setAllNotes(res.data.data);
    } catch (error) {
      console.log("error in get all notes api", error);
    }
  };
  useEffect(() => {
    getAllNotes();
  }, []);

  const deleteNote = async (id) => {
    try {
      let res = await axios.delete(`http://localhost:3000/notes/${id}`);
      console.log(res);
      getAllNotes();
    } catch (error) {
      console.log("error in delete note", error);
    }
  };
  const noteForUpdate = (note) => {
    console.log(note);
    setUpdateNoteId(note._id);
    setFormValues({
      title: note.title,
      description: note.description,
    });
  };

  return (
    <div className="h-screen p-5 flex flex-col gap-5">
      <h1 className="text-3xl font-semibold">Notes App</h1>
      <form
        onSubmit={handleSubmit}
        className="w-70 border border-black p-4 rounded-xl flex flex-col gap-5"
      >
        <input
          onChange={handleChange}
          name="title"
          value={formValues.title}
          className="p-2 outline-none text-xl rounded border border-black"
          type="text"
          placeholder="Title"
        />
        <input
          onChange={handleChange}
          name="description"
          value={formValues.description}
          className="p-2 outline-none text-xl rounded border border-black"
          type="text"
          placeholder="Description"
          
          minLength={10}
          required
        />
        <button className="bg-blue-600 text-white p-2 rounded hover:cursor-pointer">
          {updateNoteId ? "Update note" : "Add note"}
        </button>
      </form>

      <div className="flex gap-4 ">
        {allNotes.map((val) => (
          <NoteCard
            key={val._id}
            note={val}
            deleteNote={deleteNote}
            noteForUpdate={noteForUpdate}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
