import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [itemName,setName] = useState("")
  const [formCategory,setFormCategory] = useState("Produce")

  function handleFormCategory(e) {
    const newCategory = e.target.value;
    
    setFormCategory(newCategory)
  }

  function handleNameChange(e) {
    
    const newName = e.target.value;
    setName(newName)
  }


  function handleSubmit(e) {
    e.preventDefault();
    
    const newItem = {category: formCategory, id: uuid(), name: itemName};
    
    onItemFormSubmit(newItem)
    setName("")
  }
  
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNameChange} value={itemName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleFormCategory} value={formCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
