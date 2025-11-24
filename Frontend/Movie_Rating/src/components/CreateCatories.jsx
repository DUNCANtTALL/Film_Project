import { useState } from "react";

function CreateCategory() {
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCategory = {
      categoryName
    };

    console.log("New category:", newCategory);

   

    setCategoryName("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Create New Category</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Category Name: </label>
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
          />
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>Add Category</button>
      </form>
    </div>
  );
}

export default CreateCategory;
