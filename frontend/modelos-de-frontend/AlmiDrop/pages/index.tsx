import React from "react";

export default function Home() {
  return (
    <main style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', minHeight: '100vh', background: '#f8fafc'
    }}>
      <h1>Bienvenido a AlmiDrop</h1>
      <p>
        Tu plataforma SaaS de ventas, gestión y tendencias completamente conectada al backend Dropi.
      </p>
      <ul>
        <li>Panel de usuario</li>
        <li>Panel de administración</li>
        <li>Carta/landing de ventas profesional</li>
        <li>Seguridad y login inteligente</li>
      </ul>
      <p>Todo pensado para crecer tu negocio y ser fácil de usar para todos.</p>
    </main>
  );
}
