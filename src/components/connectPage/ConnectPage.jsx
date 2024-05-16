import Image from 'next/image';
import partners from './images/partners.png'
import Button from '@/shared/components/button/Button';
import Container from '@/shared/components/container/Container';

export default function ConnectPage() {
  return (
    <Container>
      <section className="px-8">
        <div>
          <p className=" mb-[15px] text-2xl font-bold leading-7 text-white s:w-80 m:w-auto">Подарунки від партнерів при кожному продовженні передплати</p>
          <p className="mb-[9px]  text-[15px] leading-tight text-white s:w-80 m:w-auto">Сертифікати на знижки від WOG, Сушія, Антошка, Єва та ін.</p>
          <div className='relative'>
            <Image
              className='mb-[100px] w-full'
              src={partners}
              alt="partners"
            />
            <div className="absolute bottom-3 left-0 w-full h-[210px] bg-gradient-to-b from-transparent to-black opacity-100"></div>
          </div>
          <div className=''>
            <p className="mb-[30px] text-2xl font-bold text-white s:w-80 m:w-auto">Підключіть передплату за 1 грн та отримуйте:</p>
            <div className='mb-[52px] flex justify-between max-w-[400px] '>
              <div className='mr-[20px]'>
                <p className="s:max-w-36 mb-[40px] text-white">ТВ-архів телепередач до 14 днів</p>
                <p className="s:max-w-36 mb-[40px] text-white">10% знижка на прем'єри</p>
                <p className="s:max-w-40 text-white">Без реклами на всіх фільмах та мультфільмах</p>
              </div>
              <div>
                <p className="s:max-w-32 mb-[40px] text-white">Full HD якість тільки за передплатою</p>
                <p className="s:max-w-72 text-white">5 пристроїв в одній передплаті</p>
              </div>
            </div>
          </div>

          <div className=" mb-[132px]">
            <Button>Підключити</Button>
          </div>
        </div>

      </section></Container>



  )
}

