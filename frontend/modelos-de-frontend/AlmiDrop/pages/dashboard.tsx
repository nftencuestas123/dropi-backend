import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ProductTrendCard from "../components/ProductTrendCard";
import { getTrendingProducts } from "../services/api";

type Product = {
  name: string;
  image: string;
  sales: number;
  trend: string;
};

export default function Dashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getTrendingProducts();
        setProducts(data.products || []);
      } catch {
        setProducts([]);
      }
      setLoading(false);
    }
    fetchProducts();
  }, []);

  return (
    <>
      <Header title="Panel de Usuario · AlmiDrop" />
      <main style={{ padding: "32px", background: "#f8fafc", minHeight: "92vh" }}>
        <h2>Productos en Tendencia</h2>
        {loading ? (
          <p>Cargando productos...</p>
        ) : (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "28px", marginTop: "22px" }}>
            {products.map(product => (
              <ProductTrendCard
                key={product.name}
                name={product.name}
                image={product.image}
                sales={product.sales}
                trend={product.trend}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
