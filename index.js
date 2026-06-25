import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

const recetas = [
  {
    id: 1,
    nombre: "Tacos al pastor",
    ingredientes: ["tortilla", "cerdo", "piña", "cebolla", "cilantro"],
    tiempoMinutos: 30,
  },
  {
    id: 2,
    nombre: "Ensalada de quinoa",
    ingredientes: ["quinoa", "tomate", "aguacate", "pepino", "limón"],
    tiempoMinutos: 20,
  },
  {
    id: 3,
    nombre: "Pasta con pesto",
    ingredientes: ["pasta", "albahaca", "piñones", "parmesano", "ajo"],
    tiempoMinutos: 25,
  },
];

app.get("/recetas", (req, res) => {
  res.json(recetas)
}); 

app.get("/recetas/:id", (req, res) => {
  const id = Number(req.params.id)
  const receta = recetas.find((item) => item.id === id)

  if (!receta) {
    return res.status(404).json({ error: "Receta no encontrada" })
  }

  res.json(receta)
});


app.listen(PORT, () => {
  console.log(`API de recetas activa en http://localhost:${PORT}`)
});