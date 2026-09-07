const NoteCard = ({ note, deleteNote }) => {
  return (
    <div className="p-2 flex flex-col gap-3 w-[20%] border border-black rounded">
      <h1 className="text-xl">{note.title}</h1>
      <p className="text-sm">
        {note.description.length > 20
          ? note.description.substring(0, 20)
          : note.description}
      </p>
      <div className="flex justify-between">
        <button className="bg-yellow-600 rounded p-2 text-white cursor-pointer text-sm ">
          Update
        </button>
        <button
          onClick={() => deleteNote(note._id)}
          className="bg-red-600 rounded p-2 text-white cursor-pointer text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
