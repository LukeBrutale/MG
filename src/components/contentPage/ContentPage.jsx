import Image from 'next/image';
import content from './images/content.png'

export default function ContentPage() {
    return(
        <>  
         <div className='absolute z-10 '> 
        <p className="  text-base tracking-wide leading-snug text-white">Передплата</p>
        </div>
             <Image
                className="absolute left-0 mt-[-140px] border-8 border-green-400"
                src={content}
                alt="content"
              />
        </>


      
    )
}