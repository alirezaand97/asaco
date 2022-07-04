import i18next from "i18next";
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";
import en from './en'
import fa from './fa'

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // debug: true,
        fallbackLng: 'fa',
        interpolation: {
            escapeValue: false,
        },
        resources:{
            en:{
                translation:en
            },
            fa:{
                translation:fa
            }
        }

    })

export default i18next;
