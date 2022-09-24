import { MagnifyingGlassPlus } from "phosphor-react";
import * as DiaLog from '@radix-ui/react-dialog';


export function CreateAdBanner(){

    return (
        <div className='pt-1 bg-duo-gradient self-stretch rounded-lg mt-10 overflow-hidden'>
    <div className='bg-[#2A2634] px-8 py-4 flex justify-between items-center'>
      <div>
        <strong className='text-2xl text-white font-black block py-1'>Não encontrou seu duo?</strong>
        <span className='py-2 block'>
        <span className='text-zinc-200 mt-6  px-2'>Publique um anúncio para encontrar novos 
        </span>
        <span className="before:block gap-6 before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
        <span className="relative text-white gap-6 px-1 py-4 "> Players!</span>
        
         </span>
         </span>       
        
      </div>
      <DiaLog.Trigger className='flex items-center gap-3 px-4 py-4 bg-violet-500 hover:bg-violet-600 text-white rounded '>
        <MagnifyingGlassPlus size={26}/>
        Publicar Anúncio
      </DiaLog.Trigger>
    </div>
    </div>
    )
}