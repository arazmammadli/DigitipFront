import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import starIcon from "../../../../assets/svg/starIcon.svg";
import Cookies from 'js-cookie';

type Props = {
  data: {
    imgSrc: string,
    enImgSrc: string,
    eeImgSrc: string,
    firstText: string,
    secondText: string,
    link?: string,
    responsiveImage:string,
    enResponsiveImage:string,
    eeResponsiveImage:string
  }
}

const PersonalCard: React.FC<Props> = ({ data }) => {
  const {t} = useTranslation();
  const cookie = Cookies.get("i18next");
  return (
    <div className='w-full relative'>
      <div className="md:block hidden mb-[34px]">
        <img src={cookie === "ru" ? data.imgSrc : cookie === "en" ? data.enImgSrc : cookie === "ee" ? data.eeImgSrc : ""} className='object-cover w-full' alt="" />
      </div>
      <div className="block md:hidden mb-[34px]">
        <img src={cookie === "ru" ? data.responsiveImage : cookie === "en" ? data.enResponsiveImage : cookie === "ee" ? data.eeResponsiveImage : ""} className='object-cover w-full' alt="" />
      </div>
      <div className="lg:w-full flex flex-col gap-6">
        <div className="flex flex-row justify-start items-baseline gap-[15px]">
          <div className="w-full contents">
            <img src={starIcon} alt="Star Icon" />
          </div>
          <p className='text-[17px] text-main-dark font-normal leading-[30.6px]'>
            {t(`home.personalOffice.${data.firstText}`)}
          </p>
        </div>
        <div className="flex flex-row justify-start items-baseline gap-[15px]">
          <div className="w-full contents">
            <img src={starIcon} alt="Star Icon" />
          </div>
          <p className='text-[17px] text-main-dark font-normal leading-[30.6px]'>
            {t(`home.personalOffice.${data.secondText}`)}
          </p>
        </div>
        {
          data.link ? <Link to={""} className="flex flex-row items-center lg:bg-white lg:px-0 lg:py-0 lg:pl-[30px] md:justify-start justify-center lg:ml-0 lg:rounded-none md:ml-5 rounded-md bg-main-orangePrimary md:w-fit w-full py-[14px] px-6">
            <span className='text-[17px] inline-block font-medium leading-[22px] border-b border-solid lg:border-main-dark border-white mr-0 lg:text-main-dark text-white'>{t(`home.personalOffice.${data.link}`)}</span>
            <i className="uil uil-arrow-right text-xl lg:text-main-dark text-white"></i>
          </Link> : null
        }
      </div>
    </div>
  )
}

export default PersonalCard;