import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const formSubmit = async (data) => {
    try {
      console.log(data);
      // api call
      const res = await axios.post("http://localhost:3000/notes/create", data);
      console.log(res.data);
      reset();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="h-screen flex flex-col gap-2 p-2">
      <h1 className="text-2xl font-bold">Notes app</h1>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="w-90 flex flex-col gap-4"
      >
        <input
          {...register("title", {
            required: "Title is required",
            minLength: {
              value: 3,
              message: "Title must be atleast 3 characters",
            },
            maxLength: {
              value: 10,
              message: "Title must not exceed 10 characters",
            },
          })}
          className="p-2 outline-none text-xl rounded border border-black"
          type="text"
          placeholder="Enter your title"
        />
        {errors.title && <p className="text-red-600">{errors.title.message}</p>}
        <textarea
          {...register("description", {
            required: "description is required",
            minLength: {
              value: 8,
              message: "Description must be atleast 8 characters",
            },
            maxLength: {
              value: 50,
              message: "Description must not exceed 50 characters",
            },
          })}
          className=" p-2
          outline-none
          text-xl
          rounded
          border
          border-black"
          type="text"
          placeholder="Enter your description"
        />
        {errors.description && (
          <p className="text-red-600">{errors.description.message}</p>
        )}
        <button className="bg-blue-500 p-2 text-white rounded cursor-pointer ">
          Add note
        </button>
      </form>
    </div>
  );
};

export default App;
