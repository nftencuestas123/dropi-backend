import React from "react";

type ProductTrendCardProps = {
  name: string;
  image: string;
  sales: number;
  trend: string; // "up" | "down" | "neutral"
};

const ProductTrendCard: React.FC<ProductTrendCardProps> = ({ name, image, sales, trend }) => (
  <div style={{
    border: "1px solid #e2e8f0",
    borderRadius: "12px",
    padding: "16px",
    width: "220px",
    textAlign: "center",
    background: "#fff",
    boxShadow: "0 2px 8px #e6e6e6"
  }}>
    <img src={image} alt={name} style={{ width: "100px", borderRadius: "8px" }} />
    <h3>{name}</h3>
    <p>Ventas: {sales}</p>
    <span style={{
      color: trend === "up" ? "green" : trend === "down" ? "red" : "gray",
      fontWeight: "bold"
    }}>
      {trend === "up" && "Tendencia ↑"}
      {trend === "down" && "Tendencia ↓"}
      {trend === "neutral" && "Tendencia ↔"}
    </span>
  </div>
);

export default ProductTrendCard;
