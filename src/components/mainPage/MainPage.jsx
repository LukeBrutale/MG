import Image from 'next/image';
import rectangleImage from './images/Rectangle.png'
import { SpriteSVG } from "@/icons/SpriteSVG"

export default function MainPage() {
    return(

        <div> 
            <Image
            className="absolute top-0 left-0 -z-[1]  "
            src={rectangleImage}
            alt="people run"
          />
         <h1 className='mt-[200px]  mb-[10px] text-2xl font-bold leading-9 text-white'>Дивіться ТБ та кіно без реклами в єдиній передплаті</h1>
         <p className=" text-base leading-tight mb-[168px]">Популярні телеканали та величезна бібліотека фільмів, серіалів, мультфільмів, трансляцій у єдиній передплаті.</p>
         <div className='flex justify-center'>
            <SpriteSVG name='expand_down' className='bg-white'/>
        </div>
         
    </div>
      
    )
}