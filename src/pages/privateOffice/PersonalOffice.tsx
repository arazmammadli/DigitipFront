import React, { useEffect, useState } from 'react'
import { Layout, Transactions } from '../../components';
import { transactions } from '../../data/data';
import useCopyToClipboard from '../../hooks/useCopyToClipboard';
import useGetUser from '../../hooks/useGetUser';
import { useTranslation } from 'react-i18next';
import IUser from '../../types/auth';

type Props = {}

const PersonalOffice: React.FC<Props> = (props: Props) => {
    const [user, setUser] = useState<IUser>({} as IUser);
    const [userData] = useGetUser();
    const [value, copy] = useCopyToClipboard();
    const { t } = useTranslation();


    useEffect(() => {
        if (userData) {
            setUser(userData)
        }
    }, [userData]);

    if (!user) return <></>

    return (
        <Layout bgColor='#fafafc' bgFooter='bg-[#fff]'>
            <div className="lg:max-w-6xl px-[10px] lg:px-0 pt-12 pb-24 mx-auto">
                <div className="w-full mb-10">
                    <h2 className='font-medium text-[32px] lg:text-left text-center leading-10 text-main-darkBase'>{user.surname ? user.name + " " + user.surname : user.name}</h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-14">
                    <div className="lg:flex-[0_0_35%] lg:max-w-[35%] py-10 lg:px-[45px] px-[35px] flex-[0_0_100%] max-w-full bg-white rounded-[20px]">
                        <div className="w-full text-center lg:block">
                            <h3 className='font-bold lg:text-xl text-base leading-[24.8px] text-center lg:leading-[31px] text-main-darkPrimary mb-4'>{t("personalOffice.home.h_qrcode_head")}</h3>
                            <div className="w-full lg:block flex justify-center mb-12">
                                <div className="lg:p-[10px] p-[10px] lg:min-w-max md:min-w-[462px] min-w-max flex justify-center border border-solid border-[#E0E3EB] rounded-xl">
                                    <img src={user.qrCode} className='lg:w-full object-cover' alt="QRCODE" />
                                </div>
                            </div>
                            <button type='button' onClick={() => copy(user.userId)} className="md:px-4 px-8 py-2 inline-flex justify-center items-center rounded bg-[rgba(46,18,76,0.05)]">
                                <span className='lg:text-xl text-sm text-center leading-[21.7px] lg:leading-[31px] font-normal text-main-darkPrimary'>{t("personalOffice.home.h_personal_pin")} {user.userId ? user.userId.replace(/(\d{3})(\d{3})(\d{3})/, "$1-$2-$3") : user.userId}</span>
                            </button>
                        </div>
                    </div>
                    <div className="lg:flex-[0_0_65%] lg:max-w-[65%] flex-[0_0_100%] max-w-full min-h-[522px] py-10 lg:px-10 px-[10px] bg-white rounded-[20px]">
                        <Transactions height='max-h-[455px]' data={transactions} />
                        <div className="lg:hidden flex flex-row gap-6 justify-between">
                            <div className="w-full">
                                <button type='button' className='flex justify-center rounded min-h-[40px] w-full bg-[#f4f4f8] items-center px-[10px] py-2'>
                                    <span className='text-sm leading-[14px] text-center font-bold text-main-mainGray'>Назад</span>
                                </button>
                            </div>
                            <div className="w-full">
                                <button type='button' className='flex justify-center rounded min-h-[40px] w-full bg-[#f4f4f8] items-center px-[10px] py-2'>
                                    <span className='text-sm leading-[14px] text-center font-bold text-main-darkPrimary'>Вперед</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default PersonalOffice;