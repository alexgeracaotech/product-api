import { Router } from "express";
import ProductRepository from "../core/ProductRepository";

const router = Router();
const pr = new ProductRepository();

router.get("/", (req, res) => {
  const data = pr.getAll();
  res.status(200).send(data);
});

router.get("/:code", (req, res) => {
  const code = req.params.code;
  const product = pr.getById(code);
  if (product) {
    res.status(200).send(product);
  } else {
    res.status(204).send();
  }
});

router.post("/", (req, res) => {
  const { name, price } = req.body;
  pr.create(name, price);
  const data = pr.getAll(); // remember
  res.status(201).send(data);
});

router.put("/:code", (req, res) => {
  const code = req.params.code;
  const { name, price } = req.body;
  pr.update(code, name, price);
  const data = pr.getAll(); // remember
  res.status(200).send(data);
});

router.delete("/:code", (req, res) => {
  const code = req.params.code;
  pr.delete(code);
  const data = pr.getAll(); // remember
  res.status(200).send(data);
});

export default router;