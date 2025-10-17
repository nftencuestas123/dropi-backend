import React, { useState } from "react";
import { loginUser } from "../services/api";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const user = await loginUser(email, password);
      // Puedes guardar el token en localStorage
      localStorage.setItem("token", user.token);
      alert("¡Login exitoso!");
      // Redirecciona al dashboard
      window.location.href = "/";
    } catch (err: any) {
      setError(err.response?.data?.message || "Login fallido.");
    }
    setLoading(false);
  }

  return (
    <main style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"
    }}>
      <h2>Iniciar sesión en AlmiDrop</h2>
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", minWidth: "280px" }}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{ marginBottom: "12px", padding: "8px" }}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={{ marginBottom: "12px", padding: "8px" }}
        />
        <button type="submit" disabled={loading} style={{ padding: "10px", background: "#0596E2", color: "#fff" }}>
          {loading ? "Ingresando..." : "Ingresar"}
        </button>
        {error && <span style={{ color: "red", marginTop: "10px" }}>{error}</span>}
      </form>
    </main>
  );
}
