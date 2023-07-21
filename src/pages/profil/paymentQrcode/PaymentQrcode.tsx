import React from 'react'
import { AmountButton, Layout } from '../../../components';
import googleButton from "../../../assets/svg/googleButton.svg";
import appleButton from "../../../assets/svg/appleButton.svg";
import { selectAmountData } from '../../../data/data';
import useGetUser from '../../../hooks/useGetUser';

type Props = {}

const PaymentQrcode: React.FC<Props> = (props: Props) => {
    const [userData] = useGetUser();
    return (
        <Layout bgColor='#fafafc' bgFooter='bg-[#fff]'>
            <div className='min-h-[calc(100vh-251px)] flex items-center'>
                <div className="lg:min-w-[1160px] min-w-full mx-auto pt-12 pb-28">
                    <div className="bg-white rounded-[20px]">
                        <div className="lg:max-w-[765px] mx-auto lg:py-[60px] md:pb-10 md:pt-[60px] pb-5 pt-10 lg:px-0 md:px-5 px-[10px]">
                            <div className="mb-8 md:px-0 px-5">
                                <div className="flex md:flex-row flex-col items-center gap-4 mb-4">
                                    <div className="min-w-max">
                                        <img src={userData.userImg || "/images/blank-profile.jpeg"} className='w-[60px] h-[60px] object-cover rounded-[50%]' alt="Profile img" />
                                    </div>
                                    <div className="h-fit md:text-left text-center">
                                        <h3 className='font-normal text-xl leading-[25px] text-main-darkBase text-center mb-2'>{userData.surname ? userData.name + " " + userData.surname : userData.name}</h3>
                                        <span className='text-base font-normal leading-5 text-main-orangePrimary'>{userData.position || ""}</span>
                                    </div>
                                </div>
                                <div className="">
                                    <p className='text-sm font-normal text-main-darkBase md:text-left text-center leading-[21.7px]'>Я коплю на РыбаТекст помогает животным <br />
                                        Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь приюту для животных Домашний. У этих ребят живёт более 1500 четвероногих, и благодаря их труду ежегодно сотни питомцев находят свой новый дом.</p>
                                </div>
                            </div>
                            <div className="w-full md:px-0 px-[10px] bg-[#FDFDFE] border border-solid border-main-lightPrimary rounded-[20px]">
                                <div className="py-8 lg:px-[70px] md:px-[30px]">
                                    <div className="mb-8 lg:px-6 px-2">
                                        <h3 className='font-bold text-base leading-5 text-main-darkBase text-center mb-4'>Выберите сумму чаевых</h3>
                                        <div className="md:flex md:flex-row md:flex-nowrap grid grid-cols-1 gap-[10px] mb-4">
                                            {
                                                selectAmountData.map((a) => (
                                                    <AmountButton key={a.id} {...a} />
                                                ))
                                            }
                                        </div>
                                        <div className="flex md:flex-row flex-col gap-4">
                                            <div className="flex items-center gap-2 opacity-60">
                                                <input type="checkbox" name="payFee" id="payFee" />
                                                <label htmlFor="payFee" className='font-normal cursor-pointer text-xs leading-[18.6px] text-main-darkBase'>Согласен оплатить комиссию</label>
                                            </div>
                                            <div className="flex items-center gap-2 opacity-60">
                                                <input type="checkbox" name="agreeTerms" id="agreeTerms" />
                                                <label htmlFor="agreeTerms" className='font-normal cursor-pointer text-xs leading-[18.6px] text-main-darkBase'>Согласен с условиями использования?</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex md:flex-row flex-col gap-[10px]">
                                        <button type='button' className='flex items-center gap-2 w-full justify-center shadow-[0px_9px_7px_rgba(202,209,220,0.2)] border border-solid border-[#E8E8EA] rounded-md py-2 px-3 bg-white'>
                                            <span className='font-normal text-sm leading-[21.7px]  text-main-darkBase'>Оплатить</span>
                                            <img src={googleButton} alt="Google Pay" />
                                        </button>
                                        <button type='button' className='flex items-center gap-2 w-full justify-center shadow-[0px_9px_7px_rgba(202,209,220,0.2)] border border-solid border-[#E8E8EA] rounded-md py-2 px-3 bg-white'>
                                            <span className='font-normal text-sm leading-[21.7px]  text-main-darkBase'>Оплатить</span>
                                            <img src={appleButton} alt="Apple Pay" />
                                        </button>
                                        <button type='button' className='flex items-center w-full justify-center shadow-[0px_9px_7px_rgba(202,209,220,0.2)] border border-solid border-[#E8E8EA] rounded-md py-2 px-3 bg-white'>
                                            <span className='font-normal text-sm leading-[21.7px]  text-main-darkBase'>Банковской картой</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default PaymentQrcode;