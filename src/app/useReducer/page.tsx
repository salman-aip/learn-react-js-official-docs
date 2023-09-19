"use client";

import { useReducer } from "react";
import ReducerComponent from "@/components/useReducer/reducer-component";

// reducer dunction specifies that how state gets updated
function reducer(state: any, action: any) {
  if (action.type === "incremented_age") {
    return {
      age: state.age + 1,
    };
  }

  throw Error("Unknown action");
}

export default function useReducerFunction() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });

  return (
    <div className="w-full h-[100dvh] bg-white text-black flex flex-col justify-start items-center">
      <button
        className="bg-green-400 px-4 py-3 w-[10rem]"
        onClick={() => {
          dispatch({ type: "incremented_age" });
        }}
      >
        Increment Age
      </button>

      <h1>Hello ! You&apos;re {state.age}</h1>

      <div>
        <ReducerComponent />
      </div>
    </div>
  );
}
