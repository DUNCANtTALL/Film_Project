import { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";

function AddCategorie() {
  const [categoryName, setCategoryName] = useState("");
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("info");

  const tryPost = async (url, body, asJson = true) => {
    const options = {
      method: "POST",
      headers: {},
      body: undefined,
    };
    if (asJson) {
      options.headers["Content-Type"] = "application/json";
      options.body = JSON.stringify(body);
    } else {
      // Send as form data
      options.headers["Content-Type"] = "application/x-www-form-urlencoded";
      options.body = new URLSearchParams(body).toString();
    }

    console.log("POST payload:", options);
    const res = await fetch(url, options);
    const text = await res.text().catch(() => null);
    console.log("Response status:", res.status, "body:", text);
    return { ok: res.ok, status: res.status, text };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = categoryName?.trim();
    if (!name) {
      setVariant("danger");
      setMessage("Category name cannot be empty!");
      return;
    }

    try {
      // Fetch existing categories to check duplicate
      const listRes = await fetch("http://localhost:8080/backend/api/categories");
      if (!listRes.ok) {
        throw new Error(`Failed to fetch categories: ${listRes.status}`);
      }
      const existing = await listRes.json();
      const exists = Array.isArray(existing) && existing.some((c) => {
        const n = (c.categoryName || c.name || c.category_name || c.category_name || "").trim().toLowerCase();
        return n === name.toLowerCase();
      });

      if (exists) {
        setVariant("warning");
        setMessage("Category already exists.");
        return;
      }

      const url = "http://localhost:8080/backend/api/categories";

      // Try different payload shapes until one succeeds
      const payloads = [
        { body: { category_name: name }, asJson: true },
        { body: { categoryName: name }, asJson: true },
        { body: { category_name: name, categoryName: name }, asJson: true },
        { body: { category_name: name }, asJson: false },
      ];

      let success = false;
      let lastErrText = null;

      for (const p of payloads) {
        const result = await tryPost(url, p.body, p.asJson);
        lastErrText = result.text;
        if (result.ok) {
          success = true;
          break;
        }

        // If 400 with message indicating missing field, continue to next payload
        if (result.status === 400) {
          // try next
          continue;
        }

        // For non-400 errors, stop trying
        if (result.status >= 500) break;
      }

      if (success) {
        setVariant("success");
        setMessage("Category added successfully!");
        setCategoryName("");
      } else {
        setVariant("danger");
        setMessage(`Failed to add category: ${lastErrText || "Unknown error"}`);
      }
    } catch (error) {
      setVariant("danger");
      setMessage("Error: " + (error.message || error));
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Add New Category</h2>
      {message && <Alert variant={variant}>{message}</Alert>}
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
