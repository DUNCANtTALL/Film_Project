import { useState, useEffect } from "react";
import { categories, DeleteCategory } from "../services/services";
import { redirect } from "react-router-dom";

function DeleteCategoryPage() {
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Load categories on mount
  useEffect(() => {
  const loadCategories = async () => {
    try {
      const data = await categories();
      console.log("Fetched categories:", data); 
      setCategoryList(data);
    } catch (error) {
      console.error(error);
    }
  };
  loadCategories();
}, []);


  const handleDelete = async () => {
    if (!selectedCategory) {
      setMessage("Please select a category to delete.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");
      const response = await DeleteCategory(selectedCategory);
      setMessage(response || "Category deleted successfully.");
      
      // Remove deleted category from dropdown
      setCategoryList(categoryList.filter(c => c.category_name !== selectedCategory));
      setSelectedCategory("");
      redirect("/");
    } catch (error) {
      setMessage("Failed to delete category: " + (error.response?.data || error.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "10px" }}>
      <h2 style={{ textAlign: "center" }}>Delete a Category</h2>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        style={{ width: "100%", padding: "10px", margin: "10px 0", borderRadius: "5px", border: "1px solid #ccc" }}
      >
        <option value="">-- Select Category --</option>
        {categoryList.map((cat) => (
  <option key={cat.categoryID} value={cat.categoryName}>
    {cat.categoryName}
  </option>
))}

      </select>

      <button
        onClick={handleDelete}
        disabled={loading}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#dc2626",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        {loading ? "Deleting..." : "Delete Category"}
      </button>

      {message && (
        <p style={{ marginTop: "15px", textAlign: "center", color: message.includes("success") ? "green" : "red" }}>
          {message}
        </p>
      )}
    </div>
  );
}

export default DeleteCategoryPage;
