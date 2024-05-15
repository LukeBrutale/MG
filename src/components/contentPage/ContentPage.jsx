import Image from 'next/image';
import content from './images/content.png'

export default function ContentPage() {
    return(
         <div className='  mb-[90px] relative mt-[-140px] border-8 border-green-400 z-10 s:min-w-[375px] m:w-[481px]'> 
         <Image
         className='w-full'
                src={content}
                alt="content"
              />
        <section className="px-[50px] flex justify-center">
            <div className=' absolute top-[36px] z-20'>
                <p className=" mb-[5px] text-base tracking-wide leading-snug text-white">Передплата</p>
                <p className=" mb-[110px] text-2xl font-bold tracking-wider text-white">Оптимальна</p>
                <h2 className=" mb-[10px] w-72 text-4xl font-bold text-white">10000 фільмів<br/>та 160+ каналів</h2>
                <p className=" mb-[40px] w-64 text-base tracking-wide leading-snug text-white">Голлівудська класика та свіжі кіно-новинки за підпискою, прямі футбольні трансляції та понад 160 каналів</p>
                <p className="text-2xl font-bold tracking-wider leading-loose text-white lowercase">від 1 ГРН</p>
                <button className=" mb-[10px] w-[200px] h-[55px] bg-green-400 rounded py-[21px] px-[57px] text-xs font-semibold  text-white uppercase">Спробувати</button>
                <p class=" mb-[20px] w-40 text-xs tracking-wider text-white text-opacity-60 capitalize">Перші 14 днів за 1 грн, далі – 97 грн/міс.</p>
                <p class="mb-[160px] text-xs font-semibold tracking-widest text-gray-200 uppercase">Детальніше</p>
             </div>

        </section>
        </div>
    )
}