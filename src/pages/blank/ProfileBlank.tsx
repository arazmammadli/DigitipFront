import React from 'react';
import { Layout, Transactions } from '../../components';
import repeat from "../../assets/svg/repeat.svg";
import location from "../../assets/svg/location.svg";
import house from "../../assets/svg/house.svg";
import call from "../../assets/svg/call.svg";
import options from "../../assets/svg/options.svg";
import { Link } from 'react-router-dom';
import { transactions } from '../../data/data';

type Props = {}

const ProfileBlank: React.FC<Props> = (props: Props) => {
    return (
        <Layout bgColor='#fafafc' bgFooter='bg-[#fff]'>
            <div className="max-w-6xl mx-auto pt-12 pb-24">
                <section className="bg-white rounded-[20px] mb-10">
                    <div className="grid grid-cols-12 lg:p-[30px] py-[30px] px-[10px] gap-[30px]">
                        <div className="md:col-span-3 col-span-12">
                            <div className="mb-5">
                                <img src="/images/blank-profile.jpeg" className='w-full object-cover' alt="Profil Img" />
                            </div>
                            <div className="lg:hidden flex flex-col items-start gap-[10px] pb-5 md:border-none border-b border-opacity-20 border-solid border-main-darkBase">
                                <button type='button' className='flex justify-center items-center gap-[10px] bg-[#f4f4f8] rounded py-[14px] w-full'>
                                    <img src={options} alt="Option Svg" />
                                    <span className='font-normal text-xs leading-[15px] text-main-dark'>Настройки</span>
                                </button>
                                <button type='button' className='flex justify-center items-center gap-[10px] bg-[#f4f4f8] rounded py-[14px] w-full'>
                                    <img src={repeat} alt="Repeat Svg" />
                                    <span className='font-normal text-xs leading-[15px] text-main-dark'>Обновить пароль</span>
                                </button>
                            </div>
                        </div>
                        <div className="md:col-span-9 col-span-12">
                            <div className="">
                                <div className="mb-8">
                                    <button type='button' className='lg:flex hidden flex-row items-center gap-2 mb-[15px]'>
                                        <img src={repeat} alt="" />
                                        <span className='text-main-darkBase font-normal text-xs leading-[15px]'>Обновить пароль</span>
                                    </button>
                                    <div className="flex lg:flex-row flex-col justify-between mb-4">
                                        <div className="h-fit">
                                            <h3 className='text-xl font-normal leading-[25px] text-main-darkBase mb-2'>Александр</h3>
                                            <span className='text-base font-normal leading-5 text-main-orangePrimary'></span>
                                        </div>
                                        <div className="flex flex-row items-center justify-between">
                                            <p className='text-xl leading-[25px] text-main-darkBase font-normal pr-3 lg:pr-6'>Ваши чаевые:</p>
                                            <div className="lg:before:content-[''] lg:before:absolute relative flex items-center lg:before:w-[1px] lg:before:h-12 lg:before:bg-[rgba(50,19,53,1)] lg:before:opacity-20">
                                                <p className='text-[60px] text-right leading-[72px] font-normal text-main-darkBase pl-3 lg:pl-6'>0 <span className='text-3xl text-right font-normal text-main-darkBase'>€</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <p className='text-sm font-normal leading-[17.5px] text-main-darkBase'>Описания нет</p>
                                    </div>
                                </div>
                                <div className="border-t border-solid border-main-darkBase border-opacity-20">
                                    <div className="pt-8 relative">
                                        <div className="flex flex-row justify-between items-start">
                                            <div className="flex flex-col items-start gap-4 justify-start">
                                                <div className="flex flex-row gap-2">
                                                    <img src={location} alt="Location Svg" />
                                                    <span className='font-normal text-sm leading-[17.5px] text-main-darkBase'>Не заполнено</span>
                                                </div>
                                                <div className="flex flex-row gap-2">
                                                    <img src={house} alt="House Svg" />
                                                    <span className='font-normal text-sm leading-[17.5px] text-main-darkBase'>Не заполнено</span>
                                                </div>
                                                <div className="flex flex-row gap-2">
                                                    <img src={call} alt="Call Svg" />
                                                    <span className='font-normal text-sm leading-[17.5px] text-main-darkBase'>Не заполнено</span>
                                                </div>
                                            </div>
                                            <div className="lg:flex hidden gap-2 top-0 right-0 items-center">
                                                <span className=' text-right font-normal text-sm leading-[17.5px] text-main-darkBase'>Настройки</span>
                                                <Link to='/profile/settings' className="flex items-center justify-center w-[26px] h-[26px] rounded-[50%] bg-[rgba(232,232,234,0.4)]">
                                                    <img src={options} alt="Options Svg" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className=''>
                    <div className="lg:p-10 px-[10px] rounded-[20px] bg-white">
                        <Transactions height='max-h-[455px]' data={transactions} />
                    </div>
                </section>
            </div>
        </Layout>
    )
};

export default ProfileBlank;