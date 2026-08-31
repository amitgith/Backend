import { useState } from "react";
import axios from "axios";
const App = () => {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
  });
  const handleChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // api call
    let res = await axios.post(
      "http://localhost:3000/notes/create",
      formValues,
    );
    console.log(res);

    console.log(formValues);
    setFormValues({
      title: "",
      description: "",
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
          minlength={10}
          required
        />
        <button className="bg-blue-600 text-white p-2 rounded hover:cursor-pointer">
          Add note
        </button>
      </form>
    </div>
  );
};

export default App;
