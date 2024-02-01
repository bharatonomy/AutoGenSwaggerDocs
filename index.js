const express = require("express");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const port = 5000;
// const port = process.env.PORT || 5000;

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Customer API",
      description: "Customer API Information",
      contact: {
        name: "Amazing Developer",
      },
      servers: ["http://localhost:5000"],
    },
  },

  // ['.routes/*.js']
  apis: ["app.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

//Routes

/**
 * @swagger
 * /customers:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      "200":
 *        description: A successful response
 */
app.get("/customers", (req, res) => {
  res.status(200).send("Customer Results");
});

/**
 * @swagger
 * /customer:
 *  put:
 *    description: Use to update all customers
 *    responses:
 *      "201":
 *        description: A successful response
 */
app.put("/customer", (req, res) => {
  res.status(201).send("Successfully updated customer");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
