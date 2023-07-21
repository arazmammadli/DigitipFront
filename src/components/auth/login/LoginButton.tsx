import React from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
    icon: string;
    text: string;
    onClick?: () => void
}

const LoginButton: React.FC<Props> = ({ icon, text,onClick }) => {
    const {t} = useTranslation();
    return (
        <button type='button' onClick={onClick} className='flex flex-row justify-center items-center rounded-[40px] py-3 gap-5 border border-solid border-main-darkBase'>
            <img src={icon} className='object-cover' alt="Google Icon" />
            <span className='font-normal text-lg leading-[24.59px] text-main-darkBase'>{t(`authCheck.${text}`)}</span>
        </button>
    )
};

export default LoginButton;