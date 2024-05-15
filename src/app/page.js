import Image from "next/image";
import MainPage from "@/components/mainPage/MainPage";
import JohnWickPage from '@/components/johnWickPage/JohnWickPage'
import ContentPage from "@/components/contentPage/ContentPage";
import ConnectPage from "@/components/connectPage/ConnectPage";


export default function Home() {
  return (
    <>
    <section className="px-[50px] ">
      <MainPage/>
      <JohnWickPage/>
      <ContentPage/>
      <ConnectPage/>
    </section>
    </>
  );
}
