"use client";
import { RiDeleteBinLine } from "@remixicon/react";
import { useState } from "react";
export default function Page() {
  const [todolist, settodolist] = useState<string[]>([]); // Explicitly typing as an array of strings
  const [todoName, settodoName] = useState<string>(""); // Explicitly typing as a string

  const handleAddtodo = () => {
    if (todoName.trim() !== "") {
      // Ensure the todoName is not empty
      settodolist([...todolist, todoName]); // Add the new todo to the list
      settodoName(""); // Clear the input field
    }
  };

  const handletodoName = (e: any) => {
    settodoName(e.target.value); // Update the todoName state
  };

  const handleDeletelist = (index: number) => {
    settodolist(todolist.filter((_, i) => i !== index)); // Filter out the todo by index
  };
  return (
    <section className="bg-black min-h-screen">
      <div className="bg-purple-500 h-20 flex items-center justify-center flex-row">
        <h1 className="text-white font-bold text-4xl cursor-default">
          Hashir Raees
        </h1>
        <span className="text-red-800 text-2xl pl-3 font-bold cursor-default">
          Todo App
        </span>{" "}
      </div>

      <div className="mt-20 bg-black flex items-center justify-center min-h-80 flex-col">
        <input
          type="text"
          placeholder="Enter task"
          name="todo"
          id="todo"
          value={todoName}
          onChange={(e) => handletodoName(e)}
          className="block leading-10 rounded-xl w-96 px-4 py-2" 
        />
        <div className="space-y-5 flex items-center flex-col">
          <button
            className="mt-5 bg-purple-600 px-5 py-3 text-white font-bold rounded-2xl text-2xl hover:bg-purple-800 hover:border-2 hover:border-white"
            onClick={handleAddtodo}
          >
            Add Task
          </button>
        </div>
        <ul>
          {todolist.map((todo, index) => (
            <li
              className="mt-8 cursor-default border-2 flex justify-between items-center opacity-80 border-purple-500 uppercase bg-gray-800 h-14 text-white text-xl px-4 py-2 rounded-2xl w-[400px]"
              key={index}
            >
              {todo}
              <button
                className="cursor-pointer bg-red-500 rounded-lg h-8 w-8 text-white flex justify-center items-center"
                onClick={() => handleDeletelist(index)}
              >
              <RiDeleteBinLine size={20} color="white" className="" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
