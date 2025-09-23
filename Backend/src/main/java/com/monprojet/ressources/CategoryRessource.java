package com.monprojet.ressources;


import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import com.monprojet.models.Category;
import com.monprojet.services.CategoryService;

import java.util.List;

import org.bson.types.ObjectId;

@Path("/categories")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)

public class CategoryRessource {
    private final CategoryService service = new CategoryService();

    @POST
    public Response createCategory(Category category) {
        Category created = service.createCategory(category.getName());
        return Response.status(Response.Status.CREATED).entity(created).build();
    }

    @GET
    public List<Category> getAllCategories() {
        return service.getAllCategories();
    }

    @DELETE
    @Path("/{id}")
    public Response deleteCategory(@PathParam("id") String id) {
        ObjectId categoryId = new ObjectId(id);
        service.deleteCategory(categoryId);
        return Response.ok("Catégorie et ses films supprimés").build();
    }
}
