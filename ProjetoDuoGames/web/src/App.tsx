import './styles/main.css'
import logosite from './assets/logo-nlw-esports.svg'
import { MagnifyingGlassPlus } from "phosphor-react";
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { useEffect, useState } from 'react';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/game').then((response) => response.json()).then(data => {
      setGames(data);
    });

  }, []);

  return (
    <>
      <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
        <img src={logosite} />
        <h2 className='text-6xl text-white font-black mt-16 bg-duo-gradient bg-clip-text'>Seu <span className='text-transparent bg-duo-gradient bg-clip-text'>duo </span>está aqui!</h2>
        <div className='grid grid-cols-6 gap-6 mt-16 '>

          {/* criado um componente */}
          {games.map(game => {
            return (
              <GameBanner key = {game.id} bannerUrl={game.bannerUrl} title={game.title} adsCount={game._count.ads} />
            )
          })}

        </div>
        {/* componente para criar o anuncio */}
        <CreateAdBanner />
      </div>

    </>
  )
}

export default App
