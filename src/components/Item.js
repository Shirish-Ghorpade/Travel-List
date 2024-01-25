export function Item({ item, onDeleteItem, onToggleItem }) {
  // jo component map madhe aahe tithe li yenar eg. item here
  // tya list madhe sarv ele yenar je render karayche ahet
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      ></input>
      {/* span madhe design bg js mode madhe item.packed true asel tar ha obj de { textDecoration: "line-through" } otherwise ha obj de {}*/}
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      {/* below syntax is used for creating close button */}
      {/* me onClick event la onDeleteItem function thevla ahe */}
      {/* but me event handler function la paramters pass kele */}
      {/* but ya synatx mule onClick={onDeleteItem(item.id)} every time function call honar */}
      {/* keep remember me jevha pn event handler fuontion la paramters pass kele syntax should be this one () => onDeleteItem(item.id)*/}
      <button onClick={() => onDeleteItem(item.id)}>❌&times;</button>
    </li>
  );
}
