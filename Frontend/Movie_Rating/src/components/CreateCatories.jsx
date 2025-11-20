import { useState } from "react";

function CreateCategory() {
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCategory = {
      categoryName
    };

    console.log("New category:", newCategory);

    // TODO: send POST request to backend
    // fetch("http://localhost:8080/api/categories", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(newCategory)
    // })

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
