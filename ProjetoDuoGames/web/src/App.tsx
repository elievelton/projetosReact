import './styles/main.css'
import logosite from './assets/logo-nlw-esports.svg'
import {MagnifyingGlassPlus} from "phosphor-react";

function App() {
  return(
    <>
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
    <img src={logosite} />
    <h2 className='text-6xl text-white font-black mt-16 bg-duo-gradient bg-clip-text'>Seu <span className='text-transparent bg-duo-gradient bg-clip-text'>duo </span>está aqui!</h2>
    <div className='grid grid-cols-6 gap-6 mt-16 '>

      <a href="" className='relative  rounded-lg overflow-hidden'>
        <img src="./Apex.png" alt="" />
        <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
          <strong className='font-bold text-white block'>Apex Legends</strong>
          <span className='tex-zinc-300 text-sm text-white block'>4 Anuncios</span>
        </div>
      </a>
      <a href="" className='relative rounded-lg overflow-hidden' >
        <img src="./League_of_legends.png"  />
        <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
          <strong className='font-bold text-white block'>League of Legends</strong>
          <span className='tex-zinc-300 text-sm text-white block'>6 Anuncios</span>
        </div>
      </a>
      <a href="" className='relative rounded-lg overflow-hidden' >
        <img src="./CsGo.png"  />
        <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
          <strong className='font-bold text-white block'>CsGo</strong>
          <span className='tex-zinc-300 text-sm text-white block'>6 Anuncios</span>
        </div>
      </a>
      <a href="" className='relative rounded-lg overflow-hidden' >
        <img src="./Dota2.png"  />
        <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
          <strong className='font-bold text-white block'>Dota 2</strong>
          <span className='tex-zinc-300 text-sm text-white block'>6 Anuncios</span>
        </div>
      </a>
      <a href="" className='relative rounded-lg overflow-hidden' >
        <img src="./Ww.png"  />
        <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
          <strong className='font-bold text-white block'>World of Warcraft</strong>
          <span className='tex-zinc-300 text-sm text-white block'>6 Anuncios</span>
        </div>
      </a>
      <a href="" className='relative rounded-lg overflow-hidden' >
        <img src="./fortnite.png"  />
        <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
          <strong className='font-bold text-white block'>Fortnite</strong>
          <span className='tex-zinc-300 text-sm text-white block'>6 Anuncios</span>
        </div>
      </a>

    </div>
    <div className='pt-1 bg-duo-gradient self-stretch rounded-lg mt-10 overflow-hidden'>
    <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
      <div>
        <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
        <span className='text-zinc-300 mt-6 block'>Publique um anúncio para encontrar novos 
        
        <span className="before:block gap-6 before:absolute before:-inset-0 before:-skew-y-3 before:bg-pink-500 relative inline-block">
        <span className="relative text-white px-6">Players!</span>
         </span>        
        </span>
      </div>
      <button className='flex items-center gap-3 px-4 py-3 bg-violet-500 hover:bg-violet-600 text-white rounded '>
        <MagnifyingGlassPlus size={24}/>
        Publicar Anúncio
      </button>
    </div>
    </div>
    </div>
    
    </>
  )
}

export default App
