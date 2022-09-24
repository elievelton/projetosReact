import './styles/main.css'
import logosite from './assets/logo-nlw-esports.svg'
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { useEffect, useState } from 'react';
import * as DiaLog from '@radix-ui/react-dialog';
import { GameController } from 'phosphor-react';
import {Input} from './components/Form/Input'

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
  // Api responsavel por passar as informacções do banco para o front
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
              <GameBanner key={game.id} bannerUrl={game.bannerUrl} title={game.title} adsCount={game._count.ads} />
            )
          })}

        </div>
        {/* componente para criar o anuncio, Dialog é responsavel
         por abrir uma tela a frente do index */}
        <DiaLog.Root>
          <CreateAdBanner />
          {/* Portal é responsavel por abrir por cima da index */}
          <DiaLog.Portal>
            <DiaLog.Overlay className='bg-black/60 inset-0 fixed' />
            <DiaLog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-md shadow-violet-400 hover:shadow-violet-600'>
              <DiaLog.Title className='text-3xl font-black '>Publique um anúncio</DiaLog.Title>

              <form  className='mt-8 flex flex-col gap-4'>
                <div className='flex flex-col gap-2 ' >
                  <label htmlFor='Game' className='font-semibold'>Qual o game?</label>
                  <Input
                    
                    id='game'
                    placeholder='Selecione o que game deseja jogar' />
                </div>
                <div className='flex flex-col gap-2'>
                  <label htmlFor='name'>Seu nome (ou nickname)</label>
                  <Input id='name' placeholder='como te chamam dentro do game?' />

                </div>
                <div className='grid grid-cols-2 gap-6'>
                  <div className='flex flex-col gap-2'>
                    <label  htmlFor='yearsPlaying' >Joga a quantos anos?</label>
                    <Input id='yearsPlaying' type="Number" placeholder='Tudo bem ser ZERO' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label  htmlFor='discord' >Qual seu discord?</label>
                    <Input id='discord' placeholder='Usuario#0000' />
                  </div>
                </div>
                <div className='flex gap-6'>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor='weekDays' >Quando costuma jogar?</label>
                    <div className='grid grid-cols-4 gap-2'>
                      <button title='Domingo' className='w-8 h-8 rounded bg-zinc-900'>S</button>
                      <button title='Segunda' className='w-8 h-8 rounded bg-zinc-900'>D</button>
                      <button title='Terça' className='w-8 h-8 rounded bg-zinc-900'>T</button>
                      <button title='Quarta' className='w-8 h-8 rounded bg-zinc-900'>Q</button>
                      <button title='Quinta' className='w-8 h-8 rounded bg-zinc-900'>Q</button>
                      <button title='Sexta' className='w-8 h-8 rounded bg-zinc-900'>S</button>
                      <button title='Sabado' className='w-8 h-8 rounded bg-zinc-900'>S</button>
                    </div>
                    
                  </div>
                  <div className='flex flex-col gap-2 flex-1'>
                    <label htmlFor='hoursStart' >Qual horário do dia?</label>
                    <div className='grid grid-cols-2 gap-2'>
                      <Input id="hoursStart" type="time" placeholder='De' />
                      <Input id="hoursEnd" type="time" placeholder='Até' />
                    </div>
                  </div>
                </div>
                <div className='mt-2 flex gap-2 text-sm'>
                  <input type="checkbox" />
                  Costumo me conectar ao chat de voz?
                </div>
                <footer className='mt-4 flex justify-end gap-4'>
                  <DiaLog.Close className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>
                    Cancelar
                  </DiaLog.Close>
                  <button type="submit" className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600 '>
                    <GameController size={26}/>
                    Encontrar Duo
                  </button>
                </footer>
              </form>
            
          </DiaLog.Content>


        </DiaLog.Portal>


      </DiaLog.Root>
    </div>

    </>
  )
}

export default App
