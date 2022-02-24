// TodoTitle コンポーネントを import
import { TodoTitle } from "./TodoTitle";
// TodoItem コンポーネントを import
import { TodoItem } from "./TodoItem";
// 他ファイルで TodoList コンポーネントを利用できるようにするため
// export しておく
export const TodoList = ({
  todoList,
  toggleTodoListItemStatus,
  deleteTodoListItem,
  title,
  as,
}) => {
  return (
    <>
      {/* todoList の配列の中身が空の場合は、見出しとTODOリストの両方を 表示させない */}
      {todoList.length !== 0 && (
        <>
          <TodoTitle title={title} as={as} />
          <ul>
            {todoList.map((todo) => (
              <TodoItem
                todo={todo}
                key={todo.id}
                toggleTodoListItemStatus={toggleTodoListItemStatus}
                deleteTodoListItem={deleteTodoListItem}
              />
            ))}
          </ul>{" "}
        </>
      )}{" "}
    </>
  );
};
