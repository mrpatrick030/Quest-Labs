import Head from 'next/head';
import ProjectHeader from '../components/header';
import { useState, useEffect } from "react";
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SecondSection from '@/components/secondsection';
import ThirdSection from '@/components/thirdsection';

export default function Home(){
  const [buttonColor, setButtonColor] = useState();
  const ChangeColor = () => {
  setButtonColor("#000")
  } 

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
    <Head>
   <title>QUEST LABS DAO</title>
   <link rel="shortcut icon" href="/favicon.ico" />
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />;
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/svg-with-js.min.css" />;
   <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
    </Head>
   <div id="allTheComponents" style={{fontFamily:""}}>
    
    <div className='firstsection'>
    <ProjectHeader />
    <div className='pb-[10%] grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 px-[5%] lg:mt-[2%] md:mt-[2%] mt-[10%] gap-2'>
    <div className='grid-cols-1 text-[200%] lg:text-[350%] md:text-[250%] lg:mr-[40%] md:mr-[30%] lg:mt-[3%] md:mt-[3%] font-[600] lg:text-left md:text-left text-center'>
    Mass adoption of token-governed technologies
    </div>
    <div className='grid-cols-1 text-[100%] lg:text-[130%] md:text-[110%] lg:ml-[45%] md:ml-[35%] mt-[4%] lg:text-left md:text-left text-center'>
   <div className='firstsectionshadowdiv p-[0.5cm] bg-[rgba(0,0,0,0.4)]' data-aos="flip-up" style={{transition:"1s ease-in-out"}}>With Quest Labs Network, an Ethereum blockchain based DAO, Quest Labs Treasury and a token holder governed roadmap for
     products and initiatives.</div>
     <div className='mt-[10%]'>
      <button onClick={ChangeColor} className='docsbutton p-[0.3cm] rounded-md bg-[#002] cursor-pointer' style={{border:"2px solid #fff", backgroundColor:buttonColor}}>View Docs</button>
    </div>
    </div>
    </div>
    </div>

    <SecondSection />
    <ThirdSection />
  
   </div>
  </>
  );
};

