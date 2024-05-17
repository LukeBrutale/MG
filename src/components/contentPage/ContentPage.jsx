import Image from 'next/image';
import content from './images/content.png'
import Button from '@/shared/components/button/Button';
import Container from '@/shared/components/container/Container';

export default function ContentPage() {
  return (
    <Container>
      <div className=' min-w-[375px] mb-[90px] relative mt-[-140px] border-8 border-green-400 z-10 s:min-w-[375px] '>
        <Image
          className='w-full'
          src={content}
          alt="content"
        />
        <section className="px-8">
          <div className=' absolute top-[36px] z-20'>
            <p className=" mb-[5px] text-base tracking-wide leading-snug text-white">Передплата</p>
            <p className=" mb-[110px] text-2xl font-bold tracking-wider text-white">Оптимальна</p>
            <h2 className="s:max-w-[288px] mb-[10px]  text-4xl font-bold text-white m:max-w-100">10000 фільмів та 160+ каналів</h2>
            <p className="s:max-w-64 mb-[40px]  text-base tracking-wide leading-snug text-white m:max-w-80">
              Голлівудська класика та свіжі кіно-новинки за підпискою, прямі футбольні трансляції та понад 160 каналів
            </p>
            <p className="text-2xl font-bold tracking-wider leading-loose text-white lowercase m:mb-8 m:text-3xl">від 1 ГРН</p>
            <div className='mb-[10px]'>
              <Button>Спробувати</Button>
            </div>
            <p class=" mb-[20px] w-40 text-xs tracking-wider text-white text-opacity-60 capitalize">Перші 14 днів за 1 грн, далі – 97 грн/міс.</p>
            <p class="mb-[160px] text-xs font-semibold tracking-widest text-gray-200 uppercase">Детальніше</p>
          </div>
        </section>
      </div>
    </Container>
  )
}