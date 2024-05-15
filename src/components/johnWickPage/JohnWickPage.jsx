import Image from 'next/image';
import IPhone from './images/IPhone.png';

export default function JohnWickPage() {
  return (
    <section className="px-[50px]">
          <div className='mt-[80px] relative'> 
      <h2 className='w-72 text-2xl font-bold leading-7 text-white mb-[15px]'>Дивіться фільми<br/> без інтернету</h2>
      <p className='text-base leading-tight text-white mb-[30px]'>Завантаження фільмів та серіалів на ваш пристрій.</p>
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
