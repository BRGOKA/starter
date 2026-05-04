import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, SetDescription] = useState("");
  const [quantity, SetQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);
    SetDescription("");
    SetQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for your trip?</h3>
      <input
        type="number"
        id="quantity"
        className="input"
        min="1"
        style={{ width: "100px" }}
        value={quantity}
        onChange={(e) => SetQuantity(+e.target.value)}
      ></input>
      <input
        required
        type="text"
        id="item"
        className="input"
        placeholder="item..."
        value={description}
        onChange={(e) => SetDescription(e.target.value)}
      ></input>
      <button>ADD</button>
    </form>
  );
}
