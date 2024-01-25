import { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  // me jyala delete karnar ahe tya chi id pass kar and state variable items madhun
  // filter operation apply karun tyala kadhun tak
  function handleDeleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  // me js madhe obj ya method method ne update karto
  // ithe ha handleToggleItem tevha chalto jevha me checkbox var click and tya tya checkbox chya click nusar
  // me jya check box la click kele tya item obj madhla packed chi value toggle kar and baki sarvanchi value tashich thev
  function handleToggleItem(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteAll() {
    setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onDeleteAll={handleDeleteAll}
      />
      <Stats items={items} />
    </div>
  );
}
