import express from "express";

const app = express(); // Tudo está dentro de app apartir de agora

app.get("/teste", (req, res) => {
  return res.json([
    { id: 1, name: "Elievelton" },
    { id: 2, name: "Elievelton" },
    { id: 3, name: "Elievelton" },
    { id: 4, name: "Elievelton" },
  ]);
});

app.listen(3333, () => console.log("Servidor rodando local na porta 3333"));
