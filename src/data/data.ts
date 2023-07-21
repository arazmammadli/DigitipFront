import faiz from "../assets/svg/faiz.svg";
import wallet from "../assets/svg/wallet.svg";
import personCircle from "../assets/svg/personCircle.svg";
import clock from "../assets/svg/clock.svg";
import { ITransactions } from "../types/data";

export const personalData = {
    first: {
        imgSrc: "/images/personal-account1.png",
        enImgSrc:"/images/en-personal-account1.png",
        eeImgSrc:"/images/ee-personal-account1.png",
        firstText: "po_item_one_list_text1",
        secondText: "po_item_one_list_text2",
        link: "po_item_one_list_link",
        responsiveImage: '/images/personal-account-responsive.jpeg',
        enResponsiveImage:'/images/en-personal-account-responsive.png',
        eeResponsiveImage:'/images/ee-personal-account-responsive.png',
    },
    second: {
        imgSrc: "/images/personal-account2.png",
        enImgSrc: "/images/en-personal-account2.png",
        eeImgSrc: "/images/ee-personal-account2.png",
        firstText: "po_item_two_list_text1",
        secondText: "po_item_two_list_text2",
        responsiveImage: '/images/personal-account-responsive2.jpeg',
        enResponsiveImage: '/images/en-personal-account-responsive2.jpeg',
        eeResponsiveImage: '/images/ee-personal-account-responsive2.jpeg'
    }
};

export const serviceData = [
    {
        id: 1,
        count: "01",
        text: "work_item_one_head",
        bg: "bg-main-orangePrimary",
        bgImg:"md:bg-[url('../public/images/svg.jpg')]",
        enBgImg:"md:bg-[url('../public/images/en-svg.jpeg')]",
        esBgImg:"md:bg-[url('../public/images/es-svg.jpeg')]",
        bgResImg:"bg-[url('../public/images/serviceResponsive.png')]"
    },
    {
        id: 2,
        count: "02",
        text: "work_item_two_head",
        link: "work_item_two_link",
        bg: 'bg-main-darkBase',
        bgImg:"md:bg-[url('../public/images/svg2.jpg')]",
        enBgImg:"md:bg-[url('../public/images/en-svg2.jpeg')]",
        esBgImg:"md:bg-[url('../public/images/es-svg2.jpeg')]",
        bgResImg:"bg-[url('../public/images/serviceResponsive2.png')]"
    },
    {
        id: 3,
        count: "03",
        text: "work_item_three_head",
        bg: "bg-main-greenDark",
        bgImg:"md:bg-[url('../public/images/svg3.jpg')]",
        enBgImg:"md:bg-[url('../public/images/en-svg3.jpeg')]",
        esBgImg:"md:bg-[url('../public/images/es-svg3.jpeg')]",
        bgResImg:"bg-[url('../public/images/serviceResponsive3.png')]"
    },
    {
        id: 4,
        count: "04",
        text: "work_item_four_head",
        list: {
            firstText: "work_item_four_text_one",
            secondText: "work_item_four_text_two"
        },
        bg: "bg-main-lightBlue",
        bgImg:"md:bg-[url('../public/images/svg4.jpg')]",
        enBgImg:"md:bg-[url('../public/images/en-svg4.jpeg')]",
        esBgImg:"md:bg-[url('../public/images/es-svg4.jpeg')]",
        bgResImg:"bg-[url('../public/images/serviceResponsive4.png')]"
    }
]

export const bannerData = [
    {
        id: 1,
        icon: faiz,
        text: "banner_text_one"
    },
    {
        id: 2,
        icon: wallet,
        text: "banner_text_two"
    },
    {
        id: 3,
        icon: clock,
        text: "banner_text_three"
    },
    {
        id: 4,
        icon: personCircle,
        text: "banner_text_four"
    }
]

export const bottomNavigation = {
    first: [
        { name: 'headOne' },
        { name: 'headTwo' },
        { name: 'headThree' },
        { name: 'headFour' },
    ],
    second: [
        { name: 'Instagram' },
        { name: 'Facebook' },
        { name: 'Twitter' },
    ]
}

export const navigationData = {
    navData: [
        { id: 1, name: 'Как работает', to: "service" },
        { id: 2, name: 'Для кого', to: "needs" },
        { id: 3, name: 'Партнеры', to: "partners" },
        { id: 4, name: 'Цены', to: "prices" },
    ],
    languageTexts: [
        { id: 1, name: 'Eesti', to: "ee" },
        { id: 2, name: 'Русский', to: "ru" },
        { id: 3, name: 'English', to: "en" },
    ],
    responsiveNavData: [
        { id: 1, name: 'Главная', to: "personal-office" },
        { id: 2, name: 'Профиль', to: "profile" },
        { id: 3, name: 'Templates', to: "templates" },
    ]
}

export const transactions: ITransactions[] = [
    {
        status: true,
        lists: [
            {
                text: 'Получен'
            },
            {
                text: 'Дата: 12.05.2022'
            },
            {
                text: 'Время 14:55'
            },
            {
                text: 'Сумма: 7€'
            }
        ]
    },
    {
        status: true,
        lists: [
            {
                text: 'Получен'
            },
            {
                text: 'Дата: 12.05.2022'
            },
            {
                text: 'Время 14:55'
            },
            {
                text: 'Сумма: 7€'
            }
        ]
    },
    {
        status: true,
        lists: [
            {
                text: 'Получен'
            },
            {
                text: 'Дата: 12.05.2022'
            },
            {
                text: 'Время 14:55'
            },
            {
                text: 'Сумма: 7€'
            }
        ]
    },
    {
        status: true,
        lists: [
            {
                text: 'Получен'
            },
            {
                text: 'Дата: 12.05.2022'
            },
            {
                text: 'Время 14:55'
            },
            {
                text: 'Сумма: 7€'
            }
        ]
    },
    {
        status: true,
        lists: [
            {
                text: 'Получен'
            },
            {
                text: 'Дата: 12.05.2022'
            },
            {
                text: 'Время 14:55'
            },
            {
                text: 'Сумма: 7€'
            }
        ]
    },
    {
        status: true,
        lists: [
            {
                text: 'Получен'
            },
            {
                text: 'Дата: 12.05.2022'
            },
            {
                text: 'Время 14:55'
            },
            {
                text: 'Сумма: 7€'
            }
        ]
    },
    {
        status: true,
        lists: [
            {
                text: 'Получен'
            },
            {
                text: 'Дата: 12.05.2022'
            },
            {
                text: 'Время 14:55'
            },
            {
                text: 'Сумма: 7€'
            }
        ]
    },
]

export const selectAmountData = [
    {
        id: 1,
        amount: "2 €"
    },
    {
        id: 2,
        amount: "5 €"
    },
    {
        id: 3,
        amount: "7 €"
    },
    {
        id: 4,
        amount: "10 €"
    },
    {
        id: 5,
        amount: "20 €"
    },
    {
        id: 6,
        amount: "Другая сумма"
    }
]

export const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const passwordRegex = /^(?=.*?[A-Z])?(?=.*?[a-z])?(?=.*?[0-9]).{8,}$/;
export const phoneRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;