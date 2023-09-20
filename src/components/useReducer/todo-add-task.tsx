"use client";

import { useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { ACTIONS } from "./todo-interface";
import TodoList from "./todo-list";

const initialTodo: object[] = [];

function newTodo(name: string) {
  return { id: uuidv4(), name: name, complete: false };
}

function todoReducer(todos: any, action: any) {
  switch (action.type) {
    case ACTIONS.ADD_TODO: {
      return [...todos, newTodo(action.payload.todo)];
    }
    case ACTIONS.EDIT_TODO: {
      return todos.map((todo: any) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    }
    case ACTIONS.DELETE_TODO: {
      return todos.filter((el: any) => el.id !== action.payload.id);
    }
  }
}

export default function TodoAddTask() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodo);
  const [todo, setTodo] = useState("");

  const handleTodoAdd = (e: any) => {
    e.preventDefault();

    dispatch({ type: ACTIONS.ADD_TODO, payload: { todo: todo } });
    setTodo("");
  };

  return (
    <>
      <div className="flex flex-row">
        <input value={todo} onChange={(e) => setTodo(e.target.value)} className="border-2" />
        <button onClick={handleTodoAdd} className="px-4 py-2 bg-green-400">
          Add
        </button>
      </div>

      {/* todo list */}
      {!!todos?.length && <TodoList todos={todos} dispatch={dispatch} />}
    </>
  );
}
