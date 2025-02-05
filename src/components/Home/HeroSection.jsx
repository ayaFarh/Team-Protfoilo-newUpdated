import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaCode } from "react-icons/fa";
import { Link } from 'react-router-dom';
import i18n from '@/Languages/i18n';
const HeroSection = () => {
  const {t} = useTranslation();
  const [flag, setFlag] = useState(false)
  useEffect(() => { 
    const timer = setTimeout(() => { 
      setFlag(true);
    }, 500)

    return () => clearTimeout(timer);
  },[flag])
  return (
    
    <div className='flex relative -z-0 overflow-hidden flex-col items-center justify-center gap-10 w-full h-[calc(100vh-72px)] '>
        <div className='flex flex-col z-30 gap-10 mx-auto mt-[-2.5rem] w-[85%] sm:w-2/3 md:w-1/2'>
            
            <FaCode className={`text-5xl -mb-10 min-[1286px]:hidden text-main-color mx-auto `} />
            <p className='text-xl inline-block leading-none lead relative p-0 m-0 min-[288px]:text-3xl sm:text-4xl text-center lg:text-6xl lg:leading-tight font-bold '>
              
              {t("heroMainTitle")}
              {/*  */}
              <FaCode className={`text-xl max-[1286px]:hidden min-[288px]:text-3xl md:text-4xl lg:text-5xl text-main-color trans  ${!flag ? "rotate-0" : flag && i18n.language == 'ar' ? "-rotate-[25deg]" : "rotate-[25deg]"} ${i18n.language == 'ar' ? "-left-8 md:-left-8 translate-x-1/2 xl:translate-x-0 xl:-left-10" : "right-4 min-[289px]:-right-2 md:-right-2 translate-x-1/2 xl:translate-x-0 xl:-right-5"} absolute -top-5 sm:-top-4 lg:-top-0 lg:-translate-y-1/2 xl:translate-y-0  xl:-top-6 `} />
            </p>
          <p className='text-center font-semibold text-gray-500'>{t("heroMainText")}</p>
          <div className='flex max-[420px]:flex-col gap-5 mt- w-full justify-center'>
            <Link to="/contactUs" className='trans  bg-main-color text-white rounded-md hover:bg-hover-main-color  px-5 py-2  text-center '>{t("heroMainButton2")}</Link>
            <Link to="/aboutUs"  className='trans  border-2  border-gray-300 hover:bg-gray-100 rounded-md   px-5 py-2   text-center '>{t("heroMainButton1")}</Link>
          </div>
        </div>
        <img draggable={false} src="assets/home/waves.webp" alt="wave" className={`w-full sm:w-10/12 -z-0   absolute  ${!flag ? "top-[150%] -right-[150%]" : flag && i18n.language == 'ar' ? "top-full right-0 scale-x-[-1]" : "top-full -left-0"} trans -translate-y-full `} />
        <div className={` absolute top-8   bg-main-color ${!flag ? "-left-96": flag && i18n.language == 'ar' ? "-left-20" : "-right-20"} blur-[110px]  w-32 h-32 trans`} />
    </div>
  )

}

export default HeroSection