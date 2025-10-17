import React from "react";
import Header from "../components/Header";

export default function AdminPage() {
  return (
    <>
      <Header title="Panel Administrativo · AlmiDrop" />
      <main style={{
        display: "flex", flexDirection: "column", alignItems: "center", padding: "48px", background: "#fff", minHeight: "92vh"
      }}>
        <h2>Panel de Administración</h2>
        <ul style={{ maxWidth: "350px", textAlign: "left", marginTop: "32px" }}>
          <li>Gestionar usuarios y roles</li>
          <li>Ver historial de ventas y actividad</li>
          <li>Editar información de productos</li>
          <li>Generar reportes de tendencias</li>
        </ul>
        <p style={{ marginTop: "32px", fontSize: "1.1rem", color: "#0596E2" }}>
          Este panel está diseñado para administrar y controlar todas las operaciones clave de la app.
        </p>
      </main>
    </>
  );
}
