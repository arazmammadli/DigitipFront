import React from 'react';
import { Link } from 'react-router-dom';
import arrowRight from "../../../../assets/svg/arrowRight.svg";
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';
import Cookies from 'js-cookie';

type Props = {
    text: string;
    link?: string;
    list?: {
        firstText: string;
        secondText: string;
    },
    bg: string;
    count: string;
    bgImg: string;
    enBgImg: string;
    esBgImg: string;
    bgResImg: string;
}

const ServicesCard: React.FC<Props> = ({ text, link, list, bg, count, bgImg, enBgImg, esBgImg, bgResImg }) => {
    const { t } = useTranslation();
    const cookie = Cookies.get("i18next");

    return (
        <div className={`w-full md:h-full md:min-h-[280px] min-h-[500px] relative rounded-[20px] overflow-hidden ${bg}`}>
            <div className={`absolute w-full h-full top-0 ${cookie === "en" ? enBgImg : cookie === "ru" ? bgImg : cookie === "ee" ? esBgImg : null } ${bgResImg} bg-cover bg-no-repeat lg:bg-[left_bottom]`}></div>
            <div className="absolute bottom-0 lg:block hidden">
                <div className="pl-[30px]">
                    <span className='text-[120px] font-bold leading-[120px] text-[#ffd6d4] opacity-[20%] blend'>{count}</span>
                </div>
            </div>
            <div className="absolute lg:bottom-0 lg:top-auto top-0">
                <div className="pl-[30px] lg:hidden block mt-[30px] mb-6">
                    <div className="bg-white flex items-center justify-center w-[50px] h-[50px] rounded-[50%]">
                        <span className='text-xl font-bold leading-5 text-main-darkBase'>{count}</span>
                    </div>
                </div>
                <div className="pl-[30px] lg:pb-10 md:pb-[26px] max-w-[280px] lg:max-w-[300px] md:max-w-[370px]">
                    <p className={`text-lg leading-[27px] ${text === "work_item_three_head" ? "font-normal" : "font-bold"} text-main-lightBase ${link ? "md:mb-4 lg:mb-[30px]" : "mb-0"}`}>
                        {parse(t(`home.work.${text}`))}
                    </p>
                    {
                        link ? <Link to={""} className="flex flex-row group items-center">
                            <span className='text-sm inline-block font-normal leading-[21px] mr-0 group-hover:mr-2 transition-all duration-300 ease-out text-white'>{t(`home.work.${link}`)}</span>
                            <img src={arrowRight} alt="Arrow Right Icon" />
                        </Link> : null
                    }
                    {
                        list ? <ul className='block list-disc md:mt-[11px] lg:mt-4 pl-[21px]'>
                            <li className='text-base mb-2 font-medium leading-6 text-white marker:text-white'>{t(`home.work.${list.firstText}`)}</li>
                            <li className='text-base mb-2 font-medium leading-6 text-white marker:text-white'>{t(`home.work.${list.secondText}`)}</li>
                        </ul> : null
                    }
                </div>
            </div>
        </div>
    )
}

export default ServicesCard;
