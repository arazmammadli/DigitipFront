import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ru from './data/ru.json';
import en from './data/en.json';
import ee from './data/eesti.json';

// export const languages = Object.entries(resources).map(([lang]) => lang);

// export const removeLngPrefix = (pathname: any) => {
//     for (let lang of languages) {
//         if (pathname.startsWith(`/${lang}/` || pathname === `/${lang}`)) {
//             return pathname.replace(`/${lang}`, "");
//         }
//     }
//     return pathname;
// }

const resources = {
    ru: {
        translation: ru
    },
    en: {
        translation: en
    },
    ee: {
        translation: ee
    }
} as const;

i18n.use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: "ru",
    resources,
    detection: {
        order: ['querystring', 'cookie'],
        caches: ["cookie"]
    }
});

export default i18n;