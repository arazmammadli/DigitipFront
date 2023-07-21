import Cookies from 'js-cookie';
import React from 'react';
import {useTranslation} from "react-i18next";

type Props = {
    imgSrc: string;
    head: string;
    enImgSrc:string;
    esImgSrc:string;
}

const BusinessCard: React.FC<Props> = ({ imgSrc,enImgSrc,esImgSrc, head }) => {
    const {t} = useTranslation();
    const cookie = Cookies.get("i18next");
    return (
        <div className='w-full box min-h-[314px] overflow-hidden relative lg:mb-10 mb-5 rounded-[20px]'>
            <div className={`absolute w-full h-full ${cookie === "ru" ? imgSrc : cookie === "en" ? enImgSrc : cookie === "ee" ? esImgSrc : null} bg-cover ${head !== "Можно нанести на table tent " ? "bg-[right]" : "lg:bg-[right] bg-[bottom]"} bg-no-repeat`}></div>
            <div className="absolute w-full h-full top-0 pt-[35px] pl-[44px]">
                <div className="max-w-[250px]">
                    <h2 className='font-medium text-2xl leading-[30px] text-main-dark'>{t(`home.business.${head}`)}</h2>
                </div>
            </div>
        </div>
    )
}

export default BusinessCard;