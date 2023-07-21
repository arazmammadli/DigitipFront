import React from 'react';
import {useTranslation} from "react-i18next";

type Props = {
    imgSrc: string,
    text: string
}

const NeedsCard: React.FC<Props> = ({ text, imgSrc }) => {
    const {t} = useTranslation();
    return (
        <div className="w-full relative">
            <img src={`/images/${imgSrc}`} className="object-cover" alt={text} />
            <div className="absolute bottom-0">
                <div className={`pl-[30px] pb-5 ${text !== "Бьюти сфере" ? "max-w-[185px]" : "w-max"}`}>
                    <h3 className='text-2xl font-medium leading-[37.2px] text-main-dark'>{t(`home.forWhom.${text}`)}</h3>
                </div>
            </div>
        </div>
    )
}

export default NeedsCard;