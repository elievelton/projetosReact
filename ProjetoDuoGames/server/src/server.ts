import express from "express";
import { PrismaClient } from "@prisma/client"; 
import { convertMinutesToTime, convertTimeToMinutes } from "./utils/time";
import cors from "cors";

const app = express(); // Tudo está dentro de app apartir de agora
app.use(express.json())
app.use(cors())
const prisma = new PrismaClient();

//criar anúncio
app.post('/games/:id/ads', async(req, res) => {

  const gameId = req.params.id;
  const body = req.body;
const ad = await prisma.ad.create({
  data:{
    gameId,
    name: body.name,
    yearsPlaying: body.yearsPlaying,
    discord: body.discord,
    weekDays: body.weekDays.join(','),
    hoursStart: convertTimeToMinutes(body.hoursStart),
    hoursEnd: convertTimeToMinutes(body.hoursEnd),
    useVoiceChannel: body.useVoiceChannel,

  }
})
  return res.status(201).json(ad)
})

//listagem de games
app.get('/game', async (req, res) => {
  const games = await prisma.game.findMany({
    include:{
      _count:{
        select:{
          ads: true,
        }
      }
    }
  })
  return res.json(games)
})

app.get('/ads/:id/discord', async(req, res) => {

  const adId = req.params.id;
  const ad = await prisma.ad.findUniqueOrThrow({
    select:{
      discord: true,
    },
    where: {
      id: adId,
    }
  })
  return res.json({
    discord: ad.discord,
  })
})

app.get("/game/:id/ads", async(req, res) => {
  const gameId = req.params.id;
  const ads = await prisma.ad.findMany({
    select:{
      id: true,
      name:true,
      weekDays:true,
      useVoiceChannel:true,
      yearsPlaying:true,
      hoursStart:true,
      hoursEnd:true,
    },
    where: {
      gameId,
    },
    orderBy:{
      createdAt: 'desc',
    }
  })
  return res.json(ads.map(ad =>{
    return {
      ...ad,
      weekDays:ad.weekDays.split(','),
      hoursStart:convertMinutesToTime(ad.hoursStart),
      hoursEnd:convertMinutesToTime(ad.hoursEnd),
    }
  }));

});

app.listen(3333, () => console.log("Servidor rodando local na porta 3333"));
