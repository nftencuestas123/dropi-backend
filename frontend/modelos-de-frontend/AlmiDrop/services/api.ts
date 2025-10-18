import axios from "axios";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL as string;
export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 8000,
  headers: {
    "Content-Type": "application/json",
  },
});


// Ejemplo: Obtener productos en tendencia
export async function getTrendingProducts() {
  const response = await api.get("/products/trending");
  return response.data;
}

// Ejemplo: Login de usuario
export async function loginUser(email: string, password: string) {
  const response = await api.post("/auth/login", { email, password });
  return response.data;
}
