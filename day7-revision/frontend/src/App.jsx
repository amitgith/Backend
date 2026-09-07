import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import NoteCard from "./components/NoteCard";
import { PlusCircle, CheckCircle } from "lucide-react";

const App = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      description: "",
    },
  });
  // update to update data
  const [updateNoteId, setUpdateNoteId] = useState(null);
  // for all notes usestate
  const [allNotes, setAllNotes] = useState([]);
  const formSubmit = async (data) => {
    try {
      // console.log(data);
      if (updateNoteId) {
        // api call
        const res = await axios.put(
          `http://localhost:3000/notes/${updateNoteId}`,
          data,
        );
        toast.success("Note updated successfully!");
        getAllNotesApi();
        reset({
          title: "",
          description: "",
        });
        setUpdateNoteId(null);
      } else {
        // api call
        const res = await axios.post(
          "http://localhost:3000/notes/create",
          data,
        );
        // console.log(res.data);
        toast.success("Note created successfully!");
        getAllNotesApi();
        reset();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // get all notes api
  const getAllNotesApi = async () => {
    try {
      const res = await axios.get("http://localhost:3000/notes/allnotes");
      // console.log(res);
      setAllNotes(res.data.data);
    } catch (error) {
      console.log("error in get all notes api", error);
    }
  };
  useEffect(() => {
    getAllNotesApi();
  }, []);
  // delte note api
  const deleteNote = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/notes/${id}`);
      // console.log(res);
      getAllNotesApi();
      toast.success("Note delete successfully!");
    } catch (error) {
      console.log("error in delete note api", error);
    }
  };
  // note update
  const noteForUpdate = (note) => {
    // console.log(note);
    setUpdateNoteId(note._id);
    reset({
      title: note.title,
      description: note.description,
    });
  };
  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col antialiased">
      {/* Professional Header Banner */}
      <header className="bg-white border-b border-slate-100 px-6 py-4 sticky top-0 z-10 shadow-sm backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-extrabold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-tight">
            Notebook Studio
          </h1>
          <span className="text-xs font-semibold px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full">
            {allNotes.length} {allNotes.length === 1 ? "Note" : "Notes"}
          </span>
        </div>
      </header>

      {/* Main Responsive Split Layout */}
      <main className="max-w-7xl w-full mx-auto p-4 md:p-6 flex flex-col md:flex-row gap-6 lg:gap-8 flex-1 items-start">
        {/* Sticky Left Form Panel */}
        <section className="w-full md:w-87.5 lg:w-100 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm md:sticky md:top-24">
          <div className="mb-4">
            <h2 className="text-lg font-bold text-slate-800">
              {updateNoteId ? "Modify Note" : "Create New Note"}
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Capture your quick thoughts and details instantly.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(formSubmit)}
            className="flex flex-col gap-4"
          >
            {/* Title Field Input */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-500 ml-1">
                Title
              </label>
              <input
                {...register("title", {
                  required: "Title is required",
                  minLength: {
                    value: 3,
                    message: "Title must be at least 3 characters",
                  },
                  maxLength: {
                    value: 10,
                    message: "Title must not exceed 10 characters",
                  },
                })}
                className={`p-3 text-sm rounded-xl border outline-none bg-slate-50/50 focus:bg-white focus:ring-2 transition-all ${
                  errors.title
                    ? "border-rose-300 focus:ring-rose-100 focus:border-rose-500"
                    : "border-slate-200 focus:ring-blue-100 focus:border-blue-500"
                }`}
                type="text"
                placeholder="e.g., Ideas, Groceries..."
              />
              {errors.title && (
                <p className="text-xs font-medium text-rose-500 mt-0.5 ml-1">
                  {errors.title.message}
                </p>
              )}
            </div>

            {/* Description Field Textarea */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-500 ml-1">
                Description
              </label>
              <textarea
                {...register("description", {
                  required: "Description is required",
                  minLength: {
                    value: 8,
                    message: "Description must be at least 8 characters",
                  },
                  maxLength: {
                    value: 50,
                    message: "Description must not exceed 50 characters",
                  },
                })}
                rows={4}
                className={`p-3 text-sm rounded-xl border outline-none bg-slate-50/50 focus:bg-white focus:ring-2 resize-none transition-all ${
                  errors.description
                    ? "border-rose-300 focus:ring-rose-100 focus:border-rose-500"
                    : "border-slate-200 focus:ring-blue-100 focus:border-blue-500"
                }`}
                placeholder="Write a clear summary of your note..."
              />
              {errors.description && (
                <p className="text-xs font-medium text-rose-500 mt-0.5 ml-1">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Smart Action Button */}
            <button
              type="submit"
              className={`w-full mt-2 p-3 text-sm font-semibold text-white rounded-xl cursor-pointer flex items-center justify-center gap-2 shadow-sm transition-all duration-200 ${
                updateNoteId
                  ? "bg-amber-600 hover:bg-amber-700 active:scale-[0.99] shadow-amber-100"
                  : "bg-blue-600 hover:bg-blue-700 active:scale-[0.99] shadow-blue-100"
              }`}
            >
              {updateNoteId ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  Update Note
                </>
              ) : (
                <>
                  <PlusCircle className="w-4 h-4" />
                  Add Note
                </>
              )}
            </button>
          </form>
        </section>

        {/* Grid Display Area for Existing Notes */}
        <section className="flex-1 w-full">
          {allNotes.length === 0 ? (
            <div className="w-full flex flex-col items-center justify-center py-20 px-4 border border-dashed border-slate-200 rounded-2xl bg-white/50 text-center">
              <p className="text-slate-400 font-medium text-sm">
                No notes available yet.
              </p>
              <p className="text-xs text-slate-300 mt-1">
                Use the panel on the left to pin down your first entry!
              </p>
            </div>
          ) : (
            <div className="flex flex-wrap gap-4 w-full">
              {allNotes.map((val) => (
                <NoteCard
                  key={val._id}
                  note={val}
                  deleteNote={deleteNote}
                  noteForUpdate={noteForUpdate}
                />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default App;
