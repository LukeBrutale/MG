import Image from 'next/image';
import IPhone from './images/IPhone.png';

export default function JohnWickPage() {
  return (
    <section className="px-[50px]">
      <div className=' relative'>
        <h2 className='min-w-[288px] text-2xl font-bold leading-7 text-white mb-[15px] m:min-w-[400px] m:mb-[30px] l:text-3xl l:mb-[35px] '>Дивіться фільми без інтернету</h2>
        <p className='min-w-[275px] text-base leading-tight text-white mb-[30px] l:text-lg'>Завантаження фільмів та серіалів на ваш пристрій.</p>
        <div className="relative">
          <Image
            className=""
            src={IPhone}
            alt="IPhone"
          />
          <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-b from-transparent to-black opacity-100"></div>
        </div>
      </div>
    </section>

  );
}
