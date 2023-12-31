import React from "react";
import Product from "../product/Product";
import "./Products.css";
import cybertruck from "../../assets/cybertruck.jpg";
import models from "../../assets/models.jpg";
import modelx from "../../assets/modelx.jpg";
import tc from "../../assets/tc.jpg";
import models2 from "../../assets/models2.jpg";
import modelx2 from "../../assets/modelx2.jpg";

const products = [
  {
    id: 1,
    image: cybertruck,
    title: "Cybertruck",
    description: "Description of Product 1",
    price: 19.99,
  },
  {
    id: 2,
    image: models,
    title: "Model S",
    description: "Description of Product 2",
    price: 29.99,
  },
  {
    id: 3,
    image: modelx,
    title: "Model X",
    description: "Description of Product 3",
    price: 39.99,
  },
  {
    id: 4,
    image: tc,
    title: "Charger",
    description: "Description of Product 4",
    price: 49.99,
  },
  {
    id: 5,
    image: models2,
    title: "Model S",
    description: "Description of Product 5",
    price: 59.99,
  },
  {
    id: 6,
    image: modelx2,
    title: "Model X",
    description: "Description of Product 6",
    price: 69.99,
  },
];

export default function Products() {
  return (
    <div className="products">
      {products.map((product) => (
        <Product
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
}
