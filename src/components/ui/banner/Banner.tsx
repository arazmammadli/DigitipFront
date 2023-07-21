import React,{useEffect} from 'react'
import Button from '../button/Button';
import google from "../../../assets/svg/google.svg";
import apple from "../../../assets/svg/apple.svg";
import { bannerData } from "../../../data/data";
import { useTranslation } from "react-i18next";
import Cookies from 'js-cookie';

type Props = {}

const Banner: React.FC<Props> = (props: Props) => {
    const { t } = useTranslation();
    const lang = Cookies.get("i18next");
    
    return (
        <section className='w-full relative mb-[150px]'>
            <div className="grid max-w-[1180px] px-[10px] lg:px-4 relative mx-auto mt-[58px] lg:gap-8 xl:gap-0 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-6">
                    <div className="mb-[70px] pt-[81px] max-w-[35.5rem] lg:w-full">
                        <h2 className='md:text-5xl text-4xl font-bold leading-[52.8px] text-main-darkBase md:mb-[46px] mb-[30px]'>
                            {t("home.banner.banner_head_one")} <span className='text-main-orangePrimary'>{t("home.banner.banner_head_two")}</span> <span>{lang === "en" ? null : t("home.banner.banner_head_three")}</span>
                            <div className="inline-flex gap-[10px] ml-0 md:ml-7">
                                <Button bgColor='white' rounded='6px' padding='10px 9px' shadow='0px 9px 54px 0px rgba(128, 147, 175, 0.2)'>
                                    <div className="flex items-center flex-row gap-[6px]">
                                        <img src={google} alt="Burn Icon" />
                                        <span className='text-base leading-[24.8px] font-medium text-[#323232]'>Pay</span>
                                    </div>
                                </Button>
                                <Button bgColor='white' rounded='6px' padding='10px 9px' shadow='0px 9px 54px 0px rgba(128, 147, 175, 0.2)'>
                                    <div className="flex items-center flex-row gap-[6px]">
                                        <img src={apple} alt="Burn Icon" />
                                        <span className='text-base leading-[24.8px] font-medium text-[#323232]'>Pay</span>
                                    </div>
                                </Button>
                            </div>
                        </h2>
                        <Button bgColor='#FF443B' rounded='6px' padding='9px 18px'>
                            <span className='text-lg font-normal leading-9 text-white'>{t("home.banner.banner_btn")}</span>
                        </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-[38.57px] md:max-w-[30rem]">
                        {
                            // Wallet və user avatar img-si responsivlikdə digərlərinə nisbətən biraz aşağıda durduğu üçün validate elədim. Onları -4 px yuxarı qaldırdım. Bu şəkilin ölçüsündən qaynaqlanır.
                            bannerData.map((w, index) => (
                                <div key={w.id}
                                    className="flex flex-col md:flex-row items-start md:items-center gap-[19px]">
                                    <img
                                        src={w.icon}
                                        className={`object-cover ${w.id === 2 || w.id === 4 ? '-mt-1' : ''}`} alt="" />
                                    <p className='text-sm leading-[21.7px] font-semibold text-[rgb(42,19,46,1)]'>{t(`home.banner.${w.text}`)}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-7 lg:flex">
                    <div className="absolute top-5 left-[27%] z-10">
                        <img src={lang === "ru" ? "/images/bannerImg.png" : lang === "en" ? "/images/en-bannerImg.png" : lang === "ee" ? "/images/ee-bannerImg.png" : ""} alt="" />
                    </div>
                </div>
            </div>
            <div className="absolute top-1/2 right-0 hidden lg:block -translate-y-1/2">
                <img src="/images/Rectangle 153.png" className='h-[377px] lg:max-w-[36rem_!important]' alt="" />
            </div>
            <div className="absolute top-0 lg:left-[3%] md:-left-[10%] -left-[22%]">
                <img src="/images/StarLarge.png" alt="" />
            </div>
            <div className="absolute lg:left-[40%] top-2/4 md:top-[45%] md:right-[35%] right-[15%]">
                <img src="/images/StarMedium.png" alt="" />
            </div>
            <div className="absolute lg:left-[44%] top-[2%] md:right-[15%] right-[25%]">
                <img src="/images/StarSmall.png" alt="" />
            </div>
        </section>
    )
}
export default Banner;