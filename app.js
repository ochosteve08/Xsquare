//import external packages
const express = require("express");

// Import internal modules
const todoRoutes = require("./routes/todo.routes");
const { connectToMongoDb, environmentVariables } = require("./config");

// express app
const app = express();

// Middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "todo API working fine" });
});

//route
app.use("/todo", todoRoutes);
app.use("*", () => {
  throw new Error({
    message: "Route not found",
    code: 404,
  });
});


app.listen(environmentVariables.APP_PORT || 8000, (err) => {
  if (err) {
    console.error(err);
  }
  connectToMongoDb()
    .then(() => {
      console.info("connected to mongodb");
      console.info(
        `Server running on ${environmentVariables.APP_HOST}:${environmentVariables.APP_PORT}`
      );
    })
    .catch((_error) => {
      console.log(_error);
    });
});
