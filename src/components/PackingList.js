import { useState } from "react";
import PackItem from "./PackItem";

export default function PackingList({
  items,
  onDeleteItem,
  onPackedItem,
  onClearList,
}) {
  let [sortBy, setSortBy] = useState("input");
  let sortedItems = [];

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items.slice().sort((a, b) => a.packed - b.packed);
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <PackItem
            onPackedItem={onPackedItem}
            onDeleteItem={onDeleteItem}
            item={item}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
