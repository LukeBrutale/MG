import Image from "next/image";
import MainPage from "@/components/mainPage/MainPage";
import JohnWickPage from '@/components/johnWickPage/JohnWickPage'

export default function Home() {
  return (
    <>
    <section className="px-6 ">
       <MainPage/>
       <JohnWickPage/>
    </section>
   
    </>
  );
}
