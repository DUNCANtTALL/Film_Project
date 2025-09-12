package com.monprojet;

import java.io.IOException;
import java.net.URI;

import org.glassfish.grizzly.http.server.HttpServer;
import org.glassfish.jersey.grizzly2.httpserver.GrizzlyHttpServerFactory;
import org.glassfish.jersey.server.ResourceConfig;


public class App 
{
    public static void main(String[] args) throws IOException {
        ResourceConfig config = new ResourceConfig();
        config.register(MovieRessource.class);

        HttpServer server = GrizzlyHttpServerFactory.createHttpServer(
            URI.create("http://localhost:8080/"), config);
        
        System.out.println("Server running at http://localhost:8080/movies");
        System.in.read();
        server.shutdown();
    }
}
