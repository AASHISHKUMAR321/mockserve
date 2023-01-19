export default {
  serverPort: 9090,
  frontendPort: 8080,
  protectedRoutes: [
    { route: "/users", methods: ["POST", "PUT", "DELETE", "PATCH"] },
    { route: "/posts", methods: ["POST", "PUT", "DELETE", "PATCH"] },
    { route: "/comments", methods: ["POST", "PUT", "DELETE", "PATCH"] },
    { route: "/photos", methods: ["POST", "PUT", "DELETE", "PATCH"] },
    { route: "/todos", methods: ["GET", "POST", "PUT", "DELETE", "PATCH"] },
    { route: "/products", methods: ["GET", "POST", "PUT", "DELETE", "PATCH"] },
  ],
};

// Employees, departments & cats are not protected.
