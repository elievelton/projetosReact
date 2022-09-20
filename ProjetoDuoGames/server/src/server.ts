import express from "express";

const app = express(); // Tudo está dentro de app apartir de agora

//criar anúncio
app.post('/ads', (req, res) => {
  return res.status(201).json([])
})

//listagem de games
app.get('/game', (req, res) => {
  return res.json([])
})

app.get('/ads/:id/discord', (req, res) => {
  return res.json([])
})

app.get("/game/:id/ads", (req, res) => {
  return res.json([
    { id: 1, name: "Elievelton" },
    { id: 2, name: "Elievelton" },
    { id: 3, name: "Elievelton" },
    { id: 4, name: "Elievelton" },
  ]);

});

app.listen(3333, () => console.log("Servidor rodando local na porta 3333"));
