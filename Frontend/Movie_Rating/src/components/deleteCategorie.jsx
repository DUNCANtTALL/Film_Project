import { useState, useEffect } from "react";
import { categories, DeleteCategory } from "../services/services";
import { useNavigate } from "react-router-dom";

function DeleteCategoryPage() {
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

      setCategoryList(categoryList.filter(c => {
        const name = c.categoryName ?? c.name ?? c.category_name ?? "";
        return name !== selectedCategory;
      }));
      setSelectedCategory("");

      navigate("/");
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
        {categoryList.map((cat, idx) => {
          const id = cat.categoryID ?? cat.id ?? cat.category_id ?? idx;
          const name = cat.categoryName ?? cat.name ?? cat.category_name ?? `Category ${idx + 1}`;
          return (
            <option key={id} value={name}>
              {name}
            </option>
          );
        })}

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
        <p style={{ marginTop: "15px", textAlign: "center", color: message.toLowerCase().includes("success") ? "green" : "red" }}>
          {message}
        </p>
      )}
    </div>
  );
}

export default DeleteCategoryPage;
