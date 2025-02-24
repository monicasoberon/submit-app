'use client'
import { useState } from "react";

export default function ColorChanger() {
  const [color, setColor] = useState("bg-red-500");

  return (
    <main className="flex flex-col min-h-[calc(100vh-73px)] items-center justify-center">
      <div className={`w-64 h-32 ${color} transition-colors`}></div>
      <div className="mt-4 flex space-x-2">
        <button
          onClick={() => setColor("bg-red-500")}
          className="w-16 bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600 active:bg-red-700 transition-colors"
        >
          Red
        </button>
        <button
          onClick={() => setColor("bg-green-500")}
          className="w-16 bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-600 active:bg-green-700 transition-colors"
        >
          Green
        </button>
        <button
          onClick={() => setColor("bg-blue-500")}
          className="w-16 bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 active:bg-blue-700 transition-colors"
        >
          Blue
        </button>
        <button
          onClick={() => setColor("bg-purple-500")}
          className="w-16 bg-purple-500 text-white rounded-md px-4 py-2 hover:bg-purple-600 active:bg-purple-700 transition-colors"
        >
          Purple
        </button>
      </div>
    </main>
  );
}
