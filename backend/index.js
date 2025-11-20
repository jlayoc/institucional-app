import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// ----------------------------
// 1. Información de la entidad
// ----------------------------
app.get("/api/entidad", (req, res) => {
  res.json({
    nombre: "Ministerio Publico",
    descripcion: "Entidad institucional que busca dirigir la investigación de los delitos de acción pública y velar por el estricto cumplimiento de las leyes",
    ubicacion: "Ciudad de Guatemala"
  });
});

// ----------------------------
// 2. Lista de servicios de backend
// ----------------------------
app.get("/api/servicios", (req, res) => {
  res.json([
    { id: 1, nombre: "Registro de denuncia", estado: "Disponible" },
    { id: 2, nombre: "Consulta tu denuncia", estado: "Disponible" },
    { id: 3, nombre: "Certificado Renas", estado: "Disponible" },
    { id: 4, nombre: "Botón antinarcótico", estado: "Disponible" },
    { id: 5, nombre: "Registro de extravío", estado: "Disponible" },
    { id: 6, nombre: "Autenticidad de documentos", estado: "Disponible" }    
  ]);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
