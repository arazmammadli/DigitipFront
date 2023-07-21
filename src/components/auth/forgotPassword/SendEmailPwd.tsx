import React, { useState, useEffect, SyntheticEvent } from 'react'
import { Link } from 'react-router-dom'
import { useForgotPasswordMutation } from '../../../features/auth/authApiSlice';
import { useTranslation } from 'react-i18next';
import sendEmailValidation from "../../../utils/sendEmailValidation";
import Loader from '../../loader/Loader';

type Props = {};

export interface ISendEmailData {
    email: string;
    // phone: string;
}

export interface ISendEmailError {
    emailMessage: string;
    // phoneMessage: string;
    allCheckError?: string;
}

const SendEmailPwd: React.FC<Props> = (props: Props) => {
    const [error, setError] = useState<ISendEmailError>({ emailMessage: "" });
    const [formData, setFormData] = useState<ISendEmailData>({ email: "" });
    const [loading, setLoading] = useState<boolean>(false);
    const { validate } = sendEmailValidation();
    const [forgotPassword, { isSuccess }] = useForgotPasswordMutation();
    const { t } = useTranslation();

    const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const ge = validate(formData, e);
        if (!ge.emailMessage) {
            await forgotPassword(formData);
        } else {
            setError(ge);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (isSuccess) {
            setFormData({ ...formData, email: "" });
            setLoading(false);
        }
    }, [isSuccess]);

    return (
        <div className="flex items-center justify-center lg:bg-[#f4f4f4] bg-white relative bg-cover bg-center bg-no-repeat w-full py-16 min-h-[calc(100vh-90px)]">
            <div className="flex lg:max-w-xl max-w-full w-full flex-col items-center py-16 lg:px-14 px-[10px] md:px-5 bg-white shadow-[0_9_54_0_#d7dade_20%] rounded-[20px]">
                <div className="flex flex-col items-start gap-6 w-full">
                    <div className="w-full flex justify-center">
                        <img src="/images/authForgot.png" className='object-cover max-w-[200px]' alt="Auth Forgot Password Img" />
                    </div>
                    <div className="w-full">
                        <h2 className='font-bold text-3xl leading-[42px] text-center mb-8'>{t("forgotPassword.f_head")}</h2>
                    </div>
                    <div className="w-full">
                        <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
                            <div className="flex flex-col items-start gap-2">
                                <div className="w-full">
                                    <input type="text" value={formData.email} name="email" id="email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder={t("forgotPassword.f_email_placeholder") as string} className={`w-full py-4 px-[15px] rounded opacity-60 placeholder:text-sm placeholder:font-normal placeholder:leading-[17.5px] ${error.emailMessage === "" ? "placeholder:text-main-dark" : "placeholder:text-main-orangePrimary"} outline-none border border-solid border-main-lightPrimary`} />
                                </div>
                                {/* <div className="w-full">
                                    <input type="text" name="phone" id="phone" onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder='Введите номер телефона' className={`w-full py-4 px-[15px] opacity-60 rounded placeholder:text-sm placeholder:font-normal placeholder:leading-[17.5px] ${error.phoneMessage === "" ? "placeholder:text-main-dark" : "placeholder:text-main-orangePrimary"} outline-none border border-solid border-main-lightPrimary`} />
                                </div> */}
                                {/* <div className="w-full">
                                    <Link to={"/send"} className="font-normal text-sm leading-[18px] opacity-60 text-main-darkBase underline">На номер телефона придёт новый пароль</Link>
                                </div> */}
                            </div>
                            <div className="w-full py-[15px]">
                                <button type='submit' className='w-full min-h-[56px] rounded-[40px] text-center bg-main-darkBase'>
                                    {
                                        loading === true ? <Loader /> : <span className='text-lg leading-[27px] font-normal text-white'>{t("forgotPassword.f_btn")}</span>
                                    }
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SendEmailPwd;