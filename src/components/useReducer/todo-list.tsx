import { ACTIONS } from "./todo-interface";

export default function TodoList({ todos, dispatch }: any) {
  return (
    <>
      <div>
        {todos.map((todo: any) => {
          return (
            <div key={todo.id} className="flex flex-row justify-between mt-2">
              <p>{todo.name}</p>
              <div>
                <button
                  className={`px-3 py-2 mr-2 ${todo.complete ? "bg-green-400" : "bg-orange-400"}`}
                  onClick={() => {
                    dispatch({
                      type: ACTIONS.EDIT_TODO,
                      payload: { id: todo.id },
                    });
                  }}
                >
                  Done
                </button>
                <button
                  className="px-3 py-2 bg-red-400 ml-2"
                  onClick={() => {
                    dispatch({
                      type: ACTIONS.DELETE_TODO,
                      payload: { id: todo.id },
                    });
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
