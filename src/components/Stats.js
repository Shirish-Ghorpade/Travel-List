export function Stats({ items }) {
  // jar items 0 aahet tar ha if condition execute honar and execute nantar ha html code return hoto
  if (items.length === 0) {
    return (
      <p className="stats">
        <em>Start to adding some items in your packed list</em>
      </p>
    );
  }
  const item = items.length;
  const packedItem = items.filter((item) => item.packed === true).length;
  const percentage = item === 0 ? 0 : Math.round((packedItem / item) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go 🛩️"
          : `💼 You have ${item} items on your list, and you already packed 
        ${packedItem} (${percentage}%)`}
      </em>
    </footer>
  );
}
