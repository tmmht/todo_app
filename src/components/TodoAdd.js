// 他ファイルで TodoAdd コンポーネントを利用できるようにするため
// export しておく
export const TodoAdd = ({ buttonText, inputEl, handleAddTodoListItem }) => {
  return (
    <>
      <textarea ref={inputEl} />
      {/* 入力フォームにテキストを入力し、「+ TODOを追加」ボタンを クリックで新規TODOを追加 */}
      <button onClick={handleAddTodoListItem}>{buttonText}</button>
    </>
  );
};
