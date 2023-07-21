import React from 'react';
import { useNavigate } from 'react-router-dom';
import arrowLeft from "../../../assets/svg/leftNav.svg";
import { Button, Layout } from '../../../components';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

type Props = {}

const WithdrawFinally: React.FC<Props> = (props: Props) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const cookie = Cookies.get("i18next");
    return (
        <Layout bgColor='#fafafc' bgFooter='bg-[#fff]'>
            <div className="max-w-[840px] mx-auto py-[50px] min-h-[calc(100vh-251px)]">
                <div className="mb-4 lg:pl-0 pl-[10px]">
                    <button type='button' onClick={() => navigate(-1)} className='flex flex-row items-center gap-2'>
                        <img src={arrowLeft} alt="Arrow Left Svg" />
                        <span className='text-main-darkBase font-normal text-xs leading-[15px]'>{("profile.wFinally.s_back")}</span>
                    </button>
                </div>
                <div className="bg-white rounded-[20px] lg:p-[30px] pt-[30px] px-[10px] relative min-h-[235px]">
                    <div className="flex lg:flex-row flex-col">
                        <div className="lg:min-w-[400px] min-w-max">
                            <div className="flex md:flex-row flex-col items-center lg:justify-start justify-between mb-[10px]">
                                <p className='text-xl leading-[25px] text-main-darkBase font-normal md:pr-6'>{t("profile.wFinally.pb_person_price")}</p>
                                <div className="lg:before:content-[''] lg:before:absolute relative flex items-center lg:before:w-[1px] lg:before:h-12 lg:before:bg-[rgba(50,19,53,1)] lg:before:opacity-20">
                                    <p className='text-[60px] text-right leading-[72px] font-normal text-main-darkBase md:pl-6'>230 <span className='text-3xl text-right font-normal text-main-darkBase'>€</span></p>
                                </div>
                            </div>
                            <div className="flex md:flex-row flex-col gap-[10px]">
                                <Button type='button' bgColor='#FF443B' width='100%' rounded='6px' padding='14px 24px'>
                                    <span className='text-white font-normal text-sm leading-[17.5px] text-center'>{t("profile.withdraw.withdraw_btn")}</span>
                                </Button>
                                <Button type='button' bgColor='#F4F4F8' width='100%' rounded='6px' padding='14px 24px'>
                                    <span className='font-normal text-sm leading-[17.5px] text-center text-main-mainGray'>{t("profile.withdraw.wihtdrawotmenu")}</span>
                                </Button>
                            </div>
                        </div>
                        <div className="min-w-[440px] lg:block hidden h-full absolute right-0 bg-[0_-30px] bg-cover bg-no-repeat bg-[url('../public/images/account-register.png')]">
                        </div>
                        <div className="w-full lg:hidden block">
                            <img src={cookie === "ru" ? "/images/account-register.png" : cookie === "en" ? "/images/en-account-register.png" : cookie === "ee" ? "/images/ee-account-register.png" : ""} className='w-full object-cover' alt="Account Register" />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default WithdrawFinally;