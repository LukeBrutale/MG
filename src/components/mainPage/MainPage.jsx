import Image from 'next/image';
import rectangleImage from './images/Rectangle.png'
import { SpriteSVG } from "@/icons/SpriteSVG"

export default function MainPage() {
    return(

        <section className=" px-[50px] mb-[80px] m:mb-[120px]"> 
        <div className='absolute top-[15px] left-[15px]'>
        <SpriteSVG name='burger_menu' className='fill-white'/>
        </div>
            <Image
            className="absolute top-0 left-0 -z-[1] w-full"
            src={rectangleImage}
            alt="people run"
          />
         <h1 className='min-w-[300px] mt-[200px] mb-[10px] text-3xl font-bold leading-9 text-white m:w-[400px]'>Дивіться ТБ та кіно без реклами в єдиній передплаті</h1>
         <p class="opacity-80 min-w-[288px] text-base leading-tight text-white mb-[168px] m:mb-[300px]">Популярні телеканали та величезна бібліотека фільмів, серіалів, мультфільмів, трансляцій у єдиній передплаті.</p>
         <div className='flex justify-center'>
            <SpriteSVG name='expand_down' className='fill-white'/>
        </div>   
    </section>
      
    )
}