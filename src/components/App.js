import React, { useRef } from "react";
import { useTodo } from "../hooks/useTodo";
// TodoTitle コンポーネントを import
import { TodoTitle } from "./TodoTitle";
// TodoAdd コンポーネントを import
import { TodoAdd } from "./TodoAdd";
// TodoList コンポーネントを import
import { TodoList } from "./TodoList";
function App() {
  const {
    todoList,
    addTodoListItem,
    toggleTodoListItemStatus,
    deleteTodoListItem,
  } = useTodo();
  const inputEl = useRef(null);
  const handleAddTodoListItem = () => {
    if (inputEl.current.value === "") return;
    addTodoListItem(inputEl.current.value);
    inputEl.current.value = "";
  };
  const inCompletedList = todoList.filter((todo) => {
    return !todo.done;
  });
  const completedList = todoList.filter((todo) => {
    return todo.done;
  });
  return (
    <>
      <TodoTitle title="TODO進捗管理" as="h1" />
      <TodoAdd
        // ボタンに表示させるテキストを buttonText に代入して props で
        // 子コンポーネントへ渡す
        buttonText="+ TODOを追加"
        inputEl={inputEl}
        handleAddTodoListItem={handleAddTodoListItem}
      />
      <TodoList
        todoList={inCompletedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
        // TodoListコンポーネント内に TodoTitleコンポーネントを import
        // しているので見出しテキストを props で子コンポーネントへ渡す
        title="未完了TODOリスト"
        // 見出しの h2 を as に代入して、props で子コンポーネントへ渡す
        as="h2"
      />
      <TodoList
        todoList={completedList}
        toggleTodoListItemStatus={toggleTodoListItemStatus}
        deleteTodoListItem={deleteTodoListItem}
        // TodoListコンポーネント内に TodoTitleコンポーネントを import
        // しているので見出しテキストを props で子コンポーネントへ渡す
        title="完了TODOリスト"
        // 見出しの h2 を as に代入して、props で子コンポーネントへ渡す
        as="h2"
      />
    </>
  );
}
export default App;
