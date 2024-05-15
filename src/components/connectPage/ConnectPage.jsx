import Image from 'next/image';
import partners from './images/partners.png'

export default function ConnectPage() {
    return(
        
        <section className="px-[50px]">
            <p className="mb-[15px] w-80 text-2xl font-bold leading-7 text-white">Подарунки від партнерів при кожному продовженні передплати</p>
            <p className="mb-[9px]  w-80 text-[15px] leading-tight text-white ">Сертифікати на знижки від WOG, Сушія, Антошка, Єва та ін.</p>
            <div className='relative'>
            <Image
            className='mb-[100px]'
                src={partners}
                alt="partners"
              />
            <div className="absolute bottom-3 left-0 w-full h-[210px] bg-gradient-to-b from-transparent to-black opacity-100"></div>
            </div>

            <p className="w-80 mb-[30px] text-2xl font-bold text-white">Підключіть передплату<br/>за 1 грн та отримуйте:</p>
            <div className='mb-[52px] flex justify-between'>
                <div >
                <p className="w-36 mb-[40px] text-white">ТВ-архів  <br/>телепередач<br/>до 14 днів</p>
                <p className="w-36 mb-[40px] text-white">10% знижка <br/>на прем'єри</p>
                <p className="w-40 text-white">Без реклами <br/>на всіх фільмах<br/>та мультфільмах</p>
                </div>
                <div>
                <p className="w-32 mb-[40px] text-white">Full HD <br/>якість тільки<br/>за передплатою</p>
                <p className="w-72 text-white">5 пристроїв <br/>в одній передплаті</p>
                </div>
            </div>
            <button className=" mb-[132px] w-[200px] h-[55px] bg-green-400 rounded py-[21px] px-[57px] text-xs font-semibold  text-white uppercase">Підключити</button>
        </section>
        
        
    )
}

