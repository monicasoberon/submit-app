'use client'
import { useState } from "react";

export default function Counter(){

  const [counter, setCounter] = useState(11);

  const handleIncrement = (e: React.FormEvent) => {
    e.preventDefault();
    setCounter(counter + 1);
  }

  const handleDecrement = (e: React.FormEvent) => {
    e.preventDefault();
    setCounter(counter - 1);
  }

  return (
    <main className="flex flex-col min-h-[calc(100vh-73px)] items-center justify-center">
      <h1 className="flex-4xl font-bold text-gray-800">{counter}</h1>
      <form onSubmit={handleIncrement}>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 active:bg-blue-800 transition-colors"
        >
          Incrementar numero
        </button>
      </form>
      <div className="my-4"></div>
      <form onSubmit={handleDecrement}>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 active:bg-blue-800 transition-colors"
        >
          Decrementar numero
        </button>
      </form>
    </main>
  );
}