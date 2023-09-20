"use client";

import { useReducer } from "react";

function reducer(state: any, action: any) {
  switch (action.type) {
    case "changed_name": {
      return {
        ...state,
        name: action.nextName,
      };
    }
    case "changed_age": {
      return {
        ...state,
        age: state.age + 1,
      };
    }
  }
}

const initialState = { name: "Salman", age: 26 };

export default function ReducerComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleName = (e: any) => {
    dispatch({ type: "changed_name", nextName: e.target.value });
  };

  const handleAge = () => {
    dispatch({ type: "changed_age" });
  };

  return (
    <div className="flex flex-col justify-start items-center">
      <input value={state?.name} onChange={handleName} className="border-2" />
      <button onClick={handleAge} className="px-2 py-3 bg-green-400">
        Increment Age
      </button>

      <h1>name: {state?.name}</h1>
      <h1>age: {state?.age}</h1>
    </div>
  );
}
