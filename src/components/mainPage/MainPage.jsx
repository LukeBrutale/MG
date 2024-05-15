import Image from 'next/image';
import rectangleImage from './images/Rectangle.png'
import { SpriteSVG } from "@/icons/SpriteSVG"

export default function MainPage() {
    return(

        <section className=" px-[50px]"> 
        <div className='absolute top-[15px] left-[15px]'>
        <SpriteSVG name='burger_menu' className='fill-white'/>
        </div>
      
            <Image
            className="absolute top-0 left-0 -z-[1]  "
            src={rectangleImage}
            alt="people run"
          />
         <h1 className='mt-[200px]  mb-[10px] text-2xl font-bold leading-9 text-white'>Дивіться ТБ та кіно без реклами в <br/>єдиній передплаті</h1>
         <p class="opacity-80 w-72 text-base leading-tight text-white mb-[168px]">Популярні телеканали та величезна бібліотека фільмів, серіалів, мультфільмів, трансляцій у єдиній передплаті.</p>
         <div className='flex justify-center'>
            <SpriteSVG name='expand_down' className='fill-white'/>
        </div>   
    </section>
      
    )
}