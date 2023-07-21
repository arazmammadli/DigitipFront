import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { bottomNavigation } from '../../../data/data'

type Props = {}

const Footer: React.FC<Props> = (props: Props) => {
    const { t } = useTranslation();
    return (
        <>
            <div className="hidden lg:block">
                <div className="max-w-[1280px] mx-auto">
                    <div className="relative flex items-center justify-between min-h-[90px]">
                        <div className="flex flex-1 items-center justify-center lg:gap-[49px] sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <Link to={"/"} className="block h-full">
                                    <img src="/images/logo.png" className='w-auto block' alt="Digitip Logo" />
                                </Link>
                            </div>
                            <div className="block">
                                <div className="flex space-x-4 items-center">
                                    {bottomNavigation.first.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.name.toLowerCase()}
                                            className={`text-base font-normal text-main-darkPrimary leading-[24.8px] underline`}
                                        >
                                            {t(`constant.footer.${item.name}`)}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center flex-row gap-[41px]">
                            {bottomNavigation.second.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.name.toLowerCase()}
                                    className={`text-base font-normal text-main-darkPrimary leading-[24.8px] underline`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full border-t border-solid border-main-darkBase border-opacity-[20%]">
                    <div className="max-w-[1280px] mx-auto">
                        <div className="flex flex-row min-h-[70px] items-center justify-between">
                            <div className="">
                                <span className='text-[17px] leading-[52.36px] font-normal text-[#9B9B9B]'>{t("constant.footer.footer_copyright_text")}</span>
                            </div>
                            <div className="">
                                <span className='text-[17px] leading-[52.36px] font-normal text-[#9B9B9B]'>{t("constant.footer.footer_sub_right_text")}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block pt-6 lg:hidden">
                <div className="px-[10px]">
                    <div className="relative flex flex-col gap-[34px] mb-[34px]">
                        <div className="flex flex-shrink-0 items-center">
                            <div className="flex flex-shrink-0 items-center">
                                <Link to={"/"} className="block h-full">
                                    <img src="/images/logo.png" className='w-auto block' alt="Digitip Logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="block">
                            <div className="flex flex-col gap-2 items-start">
                                {bottomNavigation.first.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.name.toLowerCase()}
                                        className={`text-base flex items-center justify-between w-full pb-2 border-b border-solid border-main-darkBase border-opacity-20`}
                                    >
                                        <span className='font-normal text-[17px] text-main-darkPrimary leading-[24.8px]'>{item.name}</span>
                                        <i className="uil uil-arrow-up-right text-sm text-[#373737]"></i>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center flex-row gap-[41px]">
                            {bottomNavigation.second.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.name.toLowerCase()}
                                    className={`text-base font-normal text-main-darkPrimary leading-[24.8px] underline`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full border-t border-solid border-main-darkBase border-opacity-[20%]">
                    <div className="px-[10px]">
                        <div className="flex flex-col items-start justify-center">
                            <div className="">
                                <span className='text-[17px] leading-[52.36px] font-normal text-[#9B9B9B]'>© Digitip OÜ. 2022 All Right Reserved.</span>
                            </div>
                            <div className="">
                                <span className='text-[17px] leading-[52.36px] font-normal text-[#9B9B9B]'>Политика конфиденциальности</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;