export default function PackItem({ item, onDeleteItem, onPackedItem }) {
  // const [isPacked, setIsPacked] = useState(item.packed);
  return (
    <li>
      <input
        type="checkbox"
        id="packed"
        name="pack"
        onClick={() => onPackedItem(item.id)}
        checked={item.packed}
        onChange={(e) => {}}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
