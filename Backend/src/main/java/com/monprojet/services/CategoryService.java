package com.monprojet.services;
import static com.mongodb.client.model.Filters.eq;

import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.monprojet.db.MongoDBConnection;
import com.monprojet.models.Category;
import org.bson.Document;
import org.bson.types.ObjectId;

import java.util.ArrayList;
import java.util.List;

public class CategoryService {
    private final MongoCollection<Document> categoryCollection;
    private final MongoCollection<Document> movieCollection;

    public CategoryService() {
        MongoDatabase db = MongoDBConnection.getDatabase();
        this.categoryCollection = db.getCollection("categories");
        this.movieCollection = db.getCollection("movies");
    }

    public Category createCategory(String name) {
        Document doc = new Document("name", name);
        categoryCollection.insertOne(doc);
        Category category = new Category(name);
        category.setId(doc.getObjectId("_id"));
        return category;
    }

    public List<Category> getAllCategories() {
        List<Category> list = new ArrayList<>();
        for (Document d : categoryCollection.find()) {
            Category c = new Category();
            c.setId(d.getObjectId("_id"));
            c.setName(d.getString("name"));
            list.add(c);
        }
        return list;
    }

    public void deleteCategory(ObjectId categoryId) {
        movieCollection.deleteMany(eq("category_id", categoryId));
        categoryCollection.deleteOne(eq("_id", categoryId));
    }
    
}
