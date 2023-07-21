import React, { SyntheticEvent, useState, useRef } from 'react'
import { Button, Layout } from '../../../components';
import arrowLeft from "../../../assets/svg/leftNav.svg";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

type Props = {}

const Withdraw: React.FC<Props> = (props: Props) => {
    const [errorStatus, setErrorStatus] = useState<boolean>(true);
    const [accountDetailsValue, setAccountDetailsValue] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);
    const { t } = useTranslation();
    const navigate = useNavigate();
    const cookie = Cookies.get("i18next");

    const validate = (text: string) => {
        let status: boolean
        if (!text) {
            if (inputRef.current) {
                inputRef.current.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
                inputRef.current.style.border = "1px solid #ff443b";
            }
            status = false;
        } else {
            if (inputRef.current) {
                inputRef.current.style.backgroundColor = "#fff";
                inputRef.current.style.border = "1px solid #E8E8EA";
            }
            status = true;
        }
        return status;
    }

    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        const check = validate(accountDetailsValue);
        if (check) {
            console.log("successded!");
            setErrorStatus(true);
        } else {
            setErrorStatus(check);
        }
    }

    return (
        <Layout bgColor='#fafafc' bgFooter='bg-[#fff]'>
            <div className="max-w-[840px] mx-auto py-[50px] min-h-[calc(100vh-251px)]">
                <div className="mb-4 lg:pl-0 pl-[10px]">
                    <button onClick={() => navigate(-1)} type='button' className='flex flex-row items-center gap-2'>
                        <img src={arrowLeft} alt="Arrow Left Svg" />
                        <span className='text-main-darkBase font-normal text-xs leading-[15px]'>{t("profile.withdraw.s_back")}</span>
                    </button>
                </div>
                <div className="bg-white rounded-[20px] lg:p-[30px] py-[30px]  px-[10px] relative min-h-[235px]">
                    <div className="flex lg:flex-row flex-col">
                        <div className="lg:min-w-[400px] min-w-max">
                            <h3 className='font-bold text-xl md:text-left text-center leading-[22.5px] text-main-darkBase mb-5'>{t("profile.withdraw.withdraw_head")}</h3>
                            <div className="w-full">
                                <form action="" onSubmit={handleSubmit} className=''>
                                    <div className="flex flex-col gap-2">
                                        <div className="w-full">
                                            <input type="text" ref={inputRef} value={accountDetailsValue} name="businessAccountInfo" id="businessAccountInfo" onChange={(e) => setAccountDetailsValue(e.target.value)} placeholder={t("profile.withdraw.withdraw_sub_text") as string} className={`w-full py-4 px-[15px] rounded placeholder:text-sm placeholder:font-normal placeholder:leading-[17.5px] opacity-60 ${errorStatus === true ? "placeholder:text-main-dark" : "placeholder:text-main-orangePrimary"} outline-none border border-solid border-main-lightPrimary`} />
                                        </div>
                                        <div className="w-full">
                                            <Button type='submit' width='100%' padding='14px 24px' bgColor='#F4F4F8' rounded='6px'>
                                                <span className='text-sm font-normal leading-[17.5px] text-center text-main-mainGray'>{t("profile.withdraw.withdraw_btn")}</span>
                                            </Button>
                                        </div>
                                        <div className="w-full ">
                                            <p className='text-xs font-normal text-main-darkBase opacity-60 text-center leading-[18.6px]'>{t("profile.withdraw.withdraw_bottom_text_one")} <span className='text-main-orangePrimary'>{t("profile.withdraw.withdraw_bottom_text_two")}</span> {t("profile.withdraw.word_bank")}</p>
                                        </div>
                                    </div>
                                </form>
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

export default Withdraw;