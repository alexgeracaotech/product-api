import express from "express";
import products from "./routes/products";

const app = express();

const port = 8080;

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json()
);
app.use("/products", products);

app.listen(port, () => {
  console.log(`Server running!`);
});