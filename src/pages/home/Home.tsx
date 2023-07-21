import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Banner, BusinessCard, Button, Layout, NeedsCard, PersonalCard, ServiceCard } from '../../components';
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { VscSearch } from "react-icons/vsc";
import arrowLeft from "../../assets/svg/arrowLeft.svg";
import arrowRight from "../../assets/svg/arrowRight.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { personalData, serviceData } from '../../data/data';

type Props = {}

let currentOtpIndex: number = 0;
const Home: React.FC<Props> = (props: Props) => {
    const navigationPrevRef = useRef<HTMLDivElement>(null);
    const navigationNextRef = useRef<HTMLDivElement>(null);
    const { t } = useTranslation();
    const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
    const [activeOtpIndex, setActiveOtpIndex] = useState<number>(0);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
        const { value } = target;
        const newOtp: string[] = [...otp];
        newOtp[currentOtpIndex] = value.substring(value.length - 1);

        if (!value) setActiveOtpIndex(currentOtpIndex - 1);
        else setActiveOtpIndex(currentOtpIndex + 1);

        setOtp(newOtp);
    };

    const handleOnKeyDown = ({ key }: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        currentOtpIndex = index;
        if (key === "Backspace") setActiveOtpIndex(currentOtpIndex - 1);
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, [activeOtpIndex])

    return (
        <Layout pb='pb-[136px]' bgColor='#FEFFFA' bgFooter='bg-[#FEFFFA]'>
            <Banner />
            <section className='w-full mb-[130px]' id='service'>
                <div className="max-w-[1180px] mx-auto px-[10px] lg:px-4">
                    <div className="w-full mb-[52px]">
                        <h2 className='text-4xl font-semibold leading-[46.8px] text-[rgba(50,19,53,1)]'>{t("home.work.work_head_one_text")}<br />  {t("home.work.work_head_two_text")}</h2>
                    </div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 lg:gap-[10px] mb-[72px]">
                        {
                            serviceData.map((w) => (
                                <ServiceCard {...w} key={w.id} />
                            ))
                        }
                    </div>
                    <div className="w-full flex justify-center text-center">
                        <Button bgColor='#FF443B' rounded='6px' padding='14px 24px'>
                            <span className='text-lg font-normal leading-9 text-main-lightBase'>{t("home.work.work_btn")}</span>
                        </Button>
                    </div>
                </div>
            </section>
            <section className='w-full mb-[100px]' id='needs'>
                <div className="max-w-[1180px] mx-auto px-[10px] lg:px-4">
                    <div className="w-full mb-[52px]">
                        <h2 className='text-4xl font-semibold leading-[45.29px] text-[rgba(22,45,61,1)]'>{t("home.forWhom.fw_head")}</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 lg:gap-10 mb-[20px]">
                        <NeedsCard imgSrc='oficiant.png' text='fw_item_head_one' />
                        <NeedsCard imgSrc='barman.png' text='fw_item_head_two' />
                        <NeedsCard imgSrc='delivery.png' text='fw_item_head_three' />
                        <NeedsCard imgSrc='seller.png' text='fw_item_head_four' />
                        <NeedsCard imgSrc='maid.png' text='fw_item_head_seven' />
                        <NeedsCard imgSrc='courier.png' text='fw_item_head_six' />
                        <NeedsCard imgSrc='street-musician.jpeg' text='fw_item_head_eight' />
                        <NeedsCard imgSrc='fitness-trainer.png' text='fw_item_head_nine' />
                        <NeedsCard imgSrc='beauty-sphere.png' text='fw_item_head_ten' />
                        <NeedsCard imgSrc='taxi-driver.jpeg' text='fw_item_head_eleven' />
                        <NeedsCard imgSrc='blogger.jpeg' text='fw_item_head_twelve' />
                        <NeedsCard imgSrc='streamer.jpeg' text='fw_item_head_thirteen' />
                    </div>
                </div>
            </section>
            <section className='w-full relative bg-main-darkBase overflow-hidden mb-16 lg:py-[200px] py-[125px]'>
                <div className="max-w-[1180px] mx-auto px-[10px] lg:px-4 relative z-10">
                    <div className="mb-20">
                        <h2 className='text-4xl leading-[45px] font-semibold text-white mb-[26px]'>{t("home.business.b_head_one")} <br /> {t("home.business.b_head_two")}</h2>
                        <p className='lg:max-w-md text-xl leading-[31px] font-normal text-white mb-12'>{t("home.business.b_head_subtext")}</p>
                        <button type='button' className='flex justify-center items-center bg-white rounded-md py-[14px] px-6 md:w-max w-full'>
                            <span className='text-lg font-normal leading-9 text-main-dark'>{t("home.business.b_btn")}</span>
                        </button>
                    </div>
                    <div className="grid grid-cols-12 lg:gap-10 gap-5">
                        <div className="md:col-span-6 col-span-12">
                            <BusinessCard enImgSrc='bg-[url("../public/images/en-business-card1.jpeg")]' esImgSrc='bg-[url("../public/images/ee-business-card1.jpeg")]' imgSrc='bg-[url("../public/images/business-card1.jpeg")]' head='b_item_head_one' />
                            <BusinessCard enImgSrc='bg-[url("../public/images/en-business-card3.jpeg")]' esImgSrc='bg-[url("../public/images/ee-business-card3.jpeg")]' imgSrc='bg-[url("../public/images/business-card3.jpeg")]' head='b_item_head_three' />
                        </div>
                        <div className="md:col-span-6 col-span-12 -mt-4 md:mt-4">
                            <BusinessCard enImgSrc='bg-[url("../public/images/en-business-card2.jpeg")]' esImgSrc='bg-[url("../public/images/ee-business-card2.jpeg")]' imgSrc='bg-[url("../public/images/business-card2.jpeg")]' head='b_item_head_two' />
                            <BusinessCard enImgSrc='bg-[url("../public/images/en-business-card4.jpeg")]' esImgSrc='bg-[url("../public/images/ee-business-card4.jpeg")]' imgSrc='bg-[url("../public/images/business-card4.jpeg")]' head='b_item_head_four' />
                        </div>
                    </div>
                </div>
                <div className="absolute hidden md:block lg:w-2/3 md:w-full h-full bg-contain bg-no-repeat md:top-[43%] lg:top-1/2 lg:-translate-y-[42%] md:-left-3/4 lg:left-0 bg-[url('../public/images/business-vector1.png')]"></div>
                <div className="absolute hidden md:block lg:w-1/4 md:w-full lg:h-2/5 md:h-full bg-contain bg-no-repeat lg:-top-[40%] md:top-[11%] lg:translate-y-[78%] md:rotate-[90deg] lg:rotate-0 lg:right-0 md:-right-1/4 bg-[url('../public/images/business-vector2.png')]"></div>
            </section>
            <section className='w-full relative mb-[185px]' id='partners'>
                <div className="lg:max-w-[1100px] md:max-w-[500px] max-w-[250px] mx-auto">
                    <Swiper navigation={{
                        enabled: true,
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }} onBeforeInit={(swiper: any) => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                    }} loop={true} modules={[Navigation]} className="mySwiper" slidesPerView={1} breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 20
                        },
                    }}>
                        <SwiperSlide>
                            <div className="flex justify-center">
                                <img src="/images/digigeenius.png" className='object-cover' alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex justify-center">
                                <img src="/images/yahoo.png" className='object-cover' alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex justify-center">
                                <img src="/images/digigeenius.png" className='object-cover' alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex justify-center">
                                <img src="/images/yahoo.png" className='object-cover' alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex justify-center">
                                <img src="/images/digigeenius.png" className='object-cover' alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex justify-center">
                                <img src="/images/yahoo.png" className='object-cover' alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="prev absolute top-1/2 -translate-y-1/2 left-2 lg:left-[60px]" ref={navigationPrevRef}>
                    <button type='button' className='flex items-center justify-center w-10 h-10 rounded-[50%] text-white bg-main-darkBase'>
                        <img src={arrowLeft} alt="Arrow Left" />
                    </button>
                </div>
                <div className="next absolute top-1/2 -translate-y-1/2 right-2 lg:right-[60px]" ref={navigationNextRef}>
                    <button type='button' className='flex items-center justify-center w-10 h-10 rounded-[50%] text-white bg-main-darkBase'>
                        <img src={arrowRight} alt="Arrow Right" />
                    </button>
                </div>
            </section>
            <section className='w-full mb-[132px]'>
                <div className="max-w-[1180px] mx-auto px-[10px] lg:px-4">
                    <div className="lg:w-full md:max-w-sm md:mx-auto mb-[37px]">
                        <h2 className='text-4xl font-semibold leading-[45px] text-center text-main-dark'>{t("home.personalOffice.po_head")}</h2>
                    </div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 items-baseline gap-[60px]">
                        <PersonalCard data={personalData.first} />
                        <PersonalCard data={personalData.second} />
                    </div>
                </div>
            </section>
            <section className="w-full mb-[52px]" id='prices'>
                <div className="max-w-[1180px] mx-auto px-[10px] lg:px-4">
                    <div className="w-full flex md:min-h-[500px] min-h-[800px] relative overflow-hidden rounded-[20px]">
                        <div className="absolute w-full h-full md:bg-[url('../public/images/campaign.jpeg')] bg-[url('../public/images/campaignResponsive.jpeg')] bg-cover bg-no-repeat bg-[left] md:bg-[left]"></div>
                        <div className="flex flex-col md:justify-center justify-between md:gap-[77px] lg:gap-[50px] lg:pl-[60px] md:pl-10 px-[30px] relative py-[50px] lg:py-0 md:py-[62px]">
                            <div className="flex flex-col">
                                <h2 className='text-[40px] text-white leading-[50px] font-bold mb-[10px]'>{t("home.prices.prices_head")}</h2>
                                <div className='text-2xl leading-[33.6px] max-w-[351px] font-normal text-white'>{t(`home.prices.prices_subtext`)} <div className="inline-flex items-center rounded-md py-[3px] px-[9.5px] bg-main-orangePrimary">
                                    <span className='text-center text-lg leading-[22.5px] text-white'>5-7%</span>
                                </div></div>
                            </div>
                            <div className="flex items-center lg:flex-col md:flex-row-reverse lg:gap-[59px] md:gap-8 gap-6 flex-col-reverse md:items-start">
                                <p className='text-base font-semibold leading-[24.8px] text-center max-w-[200px] md:text-left text-white md:max-w-[250px] lg:min-w-full'>{t("home.prices.prices_desc")}</p>
                                <div className="w-full md:w-fit">
                                    <Button bgColor='#FF443B' rounded='6px' padding='14px 24px' width='100%'>
                                        <span className='text-lg inline-block w-full font-normal leading-9 text-white'>{t("home.prices.prices_btn")}</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-full'>
                <div className="max-w-[1180px] mx-auto px-[10px] lg:px-4">
                    <div className="w-full relative bg-cover bg-no-repeat min-h-[530px] lg:min-h-[188px] bg-[url('../public/images/sm-otp-pin.jpeg')] lg:bg-[url('../public/images/otp-pin.jpeg')] sm:bg-[url('../public/images/md-otp-pin.jpeg')]">
                        {/* <img src="/images/otp-pin.jpeg" className='w-full' alt="" /> */}
                        <div className="absolute min-w-[280px] sm:min-w-[500px] lg:ml-14 bottom-0 lg:top-1/2 left-1/2 -translate-x-1/2 lg:-translate-y-1/2">
                            <div className="block">
                                <h2 className='text-2xl text-main-darkBase text-center lg:text-left font-bold leading-[30px]'>{t("home.enterPin.head")}</h2>
                                <div className="flex lg:flex-row flex-col gap-12 mt-4">
                                    <div className="flex justify-center items-center space-x-2">
                                        {
                                            otp.map((_, index) => {
                                                return (
                                                    <React.Fragment key={index}>
                                                        <input type="number"
                                                            ref={index === activeOtpIndex ? inputRef : null}
                                                            value={otp[index]}
                                                            className='w-5 h-8 text-main-mainGray border-b-[1px] bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-b-main-dark transition'
                                                            onChange={handleChange}
                                                            onKeyDown={(e) => handleOnKeyDown(e, index)}
                                                        />
                                                        {index === otp.length - 1 ? null : (
                                                            <span className="w-2 py-0.5 bg-gray-400" />
                                                        )}
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="w-full sm:px-0 px-[10px]">
                                        <button type='button' className='flex w-full rounded-[40px] justify-center items-center py-[14px] bg-main-darkBase'>
                                            <span className='text-lg font-normal leading-[27px] text-white'>{t("home.enterPin.btn_text")}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Home;