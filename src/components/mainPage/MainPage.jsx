import Image from 'next/image';
import rectangleImage from './images/Rectangle.png'
import { SpriteSVG } from "@/icons/SpriteSVG"

export default function MainPage() {
    return(

        <div> 
            <Image
            className="absolute top-0 left-0 -z-[1]  "
            src={rectangleImage}
            alt="girl with products"
          />
         <h1 className='mt-[200px] ml-[25px] mb-[10px] text-3xl font-bold leading-9 text-white'>Дивіться ТБ та кіно без реклами в<br/> єдиній передплаті</h1>
         <p className="ml-[25px] text-base leading-tight mb-[168px]">Популярні телеканали та величезна бібліотека фільмів, серіалів, мультфільмів, трансляцій у єдиній передплаті.</p>
         <div className='flex justify-center'>
            <SpriteSVG name='expand_down' className='bg-white'/>
        </div>
         
    </div>
      
    )
}