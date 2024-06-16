import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://666cdc5749dbc5d7145f58c3.mockapi.io",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  async cargar(email, permiso) {
    try {
      const response = await apiClient.get("/turns");
      if (permiso !== 'admin') {
        return response.data.filter(x => x.user.email === email);
      }
      return response.data;
    } catch (error) {
      throw new Error(`Error de conexión: ${error.message}`);
    }
  },

  async getById(id) {
    try {
      const response = await apiClient.get(`/turns/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error de conexión: ${error.message}`);
    }
  },

  async agregar(elem) {
    try {
      await apiClient.post("/turns", elem);
    } catch (error) {
      throw new Error(`Error de conexión: ${error.message}`);
    }
  },

  async eliminar(id) {
    try {
      await apiClient.delete(`/turns/${id}`);
    } catch (error) {
      throw new Error(`Error de conexión: ${error.message}`);
    }
  },

  async modificar(id, elem) {
    try {
      await apiClient.put(`/turns/${id}`, elem);
    } catch (error) {
      throw new Error(`Error de conexión: ${error.message}`);
    }
  },
};