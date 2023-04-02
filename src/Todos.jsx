import { useState } from "react";

let nextId = 0;

function Todos() {
  const [name, setName] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleAdd = () => {
    setItems([...items, { id: nextId++, name: name }]);
  };

  const handleDelete = (index) => {

    return setItems(items.filter(item=>item.id!==index))

    
  };

  return (
    <div>
      <input value={name} onChange={handleChange} />
      <button onClick={handleAdd}>Add </button>

      {items.map((item, index) => {
        return (
          <li style={{display:"flex", justifyContent:'center', alignItems:'center'}} key={item.id}>
            <p>{item.name}  {'  '}</p>
            <button onClick={() => handleDelete(item.id)}>Delete </button>
          </li>
        );
      })}
    </div>
  );
}

export default Todos;
