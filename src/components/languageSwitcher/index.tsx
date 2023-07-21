import React from 'react';
import { navigationData } from '../../data/data';
import { useTranslation } from "react-i18next";
import { useAppDispatch } from '../../redux/hooks';
import { setLanguage } from '../../features/reducers/langSlice';
import { useLocation } from 'react-router-dom';

type Props = {
  setVisible: React.Dispatch<boolean>
}

const LanguageSwitcher: React.FC<Props> = ({ setVisible }) => {
  const { i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const {pathname,search,hash} = useLocation();

  const switcher = (lng: string) => () => {
    i18n.changeLanguage(lng);
    dispatch(setLanguage({ lang: `/${lng}${pathname}${search}${hash}` }));
    window.location.reload();
    setVisible(false);
  };

  return (
    <ul className='w-full list-none'>
      {
        navigationData.languageTexts.map((w) => (
          <li key={w.id} className='py-1 px-2 border-b border-solid border-main-lightPrimary group hover:border-main-orangePrimary transition-all duration-300'>
            <button type='button' onClick={switcher(w.to)} className='font-normal text-sm text-left inline-block group-hover:text-main-orangePrimary transition-colors duration-300 text-main-darkPrimary'>{w.name}</button>
          </li>
        ))
      }
    </ul>
  )
};

export default LanguageSwitcher;