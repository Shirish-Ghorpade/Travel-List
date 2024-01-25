import { useState } from "react";
import { Item } from "./Item";

export function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onDeleteAll,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  else if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="list">
      {/* kadhi pn list render kartana always ul tag madhe karaychi*/}
      {/* ul chya aat madhe js mode on asnar {}*/}
      <ul>
        {/* ithe arr of obj la map function lavla aahe then me every obj is item and tya obj la me Item component la pass kele as props madhun*/}
        {/* jo component map madhe aahe tithe li yenar eg. item here*/}
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
        {/* ithe me button banvnar */}
        {/* ya select option la controlled ele banvla  */}
        {/* form or use input la control ele banvanya sathi 3 steps aahet  */}
        {/* 1. state create kar */}
        {/* 2. jya la pn controlled ele banvayche ahe tyachya value la state variable de */}
        {/* 3. event handler create tya form cha and tya madhe state chi value set kar */}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description order</option>
          <option value="packed">Sort by packed order</option>
        </select>
        <button onClick={onDeleteAll}>Clear List</button>
      </div>
    </div>
  );
}
