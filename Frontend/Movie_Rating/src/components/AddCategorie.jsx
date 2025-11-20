import { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";

function AddCategorie() {
  const [categoryName, setCategoryName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!categoryName) {
      setMessage("Category name cannot be empty!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/backend/api/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ categoryName }),
      });

      if (response.ok) {
        setMessage("Category added successfully!");
        setCategoryName("");
      } else {
        setMessage("Failed to add category.");
      }
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Add New Category</h2>
      {message && <Alert variant="info">{message}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="categoryName">
          <Form.Label>Category Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter category name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" className="mt-3">
          Add Category
        </Button>
      </Form>
    </div>
  );
}

export default AddCategorie;
