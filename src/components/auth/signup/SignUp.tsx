import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import React, { useState, SyntheticEvent, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import shortid from "shortid";
import { useSignupUserMutation } from "../../../features/auth/authApiSlice"
import { login } from '../../../features/reducers/authSlice';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../../redux/hooks';
import RegisterValidation from '../../../utils/registerValidation';
import Loader from '../../loader/Loader';

type Props = {

};

type LocationState = {
    state: {
        email: string
    }
}


export interface IRegisterData {
    email: string;
    fullName: string;
    password: string;
    verifyPassword: string;
};

export interface IRegisterErrorData {
    emailMessage: string;
    fullNameMessage: string;
    passwordMessage: string;
    verifyPasswordMessage: string;
    allCheckError?: string;
}

const SignUp: React.FC<Props> = (props: Props) => {
    const [error, setError] = useState<IRegisterErrorData>({ emailMessage: "", fullNameMessage: "", passwordMessage: "", verifyPasswordMessage: "" });
    const [formData, setFormData] = useState<IRegisterData>({ email: "", fullName: "", password: "", verifyPassword: "" })
    const { validate } = RegisterValidation();
    const location = useLocation() as LocationState;
    const { email } = location.state || "";
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [signupUser, { data, isSuccess, isError, error: regError }] = useSignupUserMutation();
    const [emailError, setEmailError] = useState<string>("");
    const { t } = useTranslation();

    const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const getError = validate(formData, e);
        if (!getError.emailMessage && !getError.fullNameMessage && !getError.passwordMessage && !getError.verifyPasswordMessage && !getError.allCheckError) {
            const reqData = {
                name: formData.fullName,
                email: formData.email,
                password: formData.password,
                repeatPassword: formData.verifyPassword
            };
            const res = await signupUser(reqData);

            setFormData({ ...formData, fullName: "", email: "", password: "", verifyPassword: "" })
        } else {
            setError(getError);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (isError) {
            const { status } = regError as FetchBaseQueryError;
            if (status === 409) {
                setEmailError(t("registerError.emailApiError") as string);
                setLoading(false);
            } else {
                setEmailError("");
                setLoading(false);
            }
        }
    }, [isError, regError])

    useEffect(() => {
        if (isSuccess) {
            dispatch(login({ accessToken: data.token }));
            navigate("/personal-office");
            setLoading(false);
        }
    }, [isSuccess, dispatch, data, navigate])

    useEffect(() => {
        if (email) {
            setFormData({ ...formData, email })
        }
    }, [email])

    return (
        <div className="flex items-center justify-center relative bg-cover lg:bg-[#f4f4f4] bg-white bg-center bg-no-repeat w-full py-20 min-h-[calc(100vh-90px)]">
            <div className="flex lg:max-w-xl max-w-full w-full flex-col items-center py-16 lg:px-14 px-[10px] bg-white shadow-[0_9_54_0_#d7dade_20%] rounded-[20px]">
                <div className="flex flex-col items-start gap-6 w-full">
                    <div className="w-full flex justify-center">
                        <img src="/images/authRegister.png" className='object-cover max-w-[180px]' alt="Auth Register Img" />
                    </div>
                    <div className="w-full h-5">
                        <div className={`relative h-[2px] w-full bg-[rgba(102,102,102,0.25)] before:content-['${t("register.r_auth_info")}'] before:absolute before:w-max before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:bg-white before:px-6 before:text-base before:font-normal before:leading-[20.13px] before:text-[#666]`}></div>
                    </div>
                    <div className="w-full">
                        <form className='' onSubmit={handleSubmit}>
                            <div className="flex flex-col w-full gap-[10px] mb-8">
                                <div className="w-full">
                                    <input type="text" value={formData.fullName} name="fullName" onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} id="fullName" placeholder={t("register.r_name_placeholder") as string} className={`w-full py-4 px-[15px] rounded placeholder:text-sm placeholder:font-normal placeholder:leading-[17.5px] ${error.fullNameMessage === "" ? "placeholder:text-main-dark" : "placeholder:text-main-orangePrimary"} outline-none border border-solid border-main-lightPrimary`} />
                                </div>
                                <div className="w-full">
                                    <input type="email" value={formData.email} name="email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} id="email" placeholder={t("register.r_email_placeholder") as string} className={`w-full py-4 px-[15px] rounded placeholder:text-sm placeholder:font-normal placeholder:leading-[17.5px] ${error.emailMessage === "" ? "placeholder:text-main-dark" : "placeholder:text-main-orangePrimary"} outline-none border border-solid border-main-lightPrimary`} />
                                </div>
                                <div className="w-full">
                                    <input type="password" name="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} id="password" placeholder={t("register.r_password_placehoder") as string} className={`w-full py-4 px-[15px] rounded placeholder:text-sm placeholder:font-normal placeholder:leading-[17.5px] ${error.passwordMessage === "" ? "placeholder:text-main-dark" : "placeholder:text-main-orangePrimary"} outline-none border border-solid border-main-lightPrimary`} />
                                </div>
                                <div className="w-full">
                                    <input type="password" value={formData.verifyPassword} name="verifyPassword" onChange={(e) => setFormData({ ...formData, verifyPassword: e.target.value })} id="verifyPassword" placeholder={t("register.r_verifyPassword_placeholder") as string} className={`w-full py-4 px-[15px] rounded placeholder:text-sm placeholder:font-normal placeholder:leading-[17.5px] ${error.verifyPasswordMessage === "" ? "placeholder:text-main-dark" : "placeholder:text-main-orangePrimary"} outline-none border border-solid border-main-lightPrimary`} />
                                </div>
                                {
                                    error.allCheckError ? <div className='w-full flex flex-row flex-wrap justify-start py-2 px-[15px] mb-2'>
                                        <p className='text-sm leading-[21px] font-normal text-main-orangePrimary'>{error.allCheckError}</p>
                                    </div> : Object.values(error).toString() !== ",,," ? <div className='w-full flex flex-row flex-wrap justify-start py-2 px-[15px] mb-2'>
                                        {
                                            Object.values(error).map((e) => (
                                                e !== "" ? <p key={shortid.generate()} className='text-sm leading-[21px] font-normal text-main-orangePrimary after:content-[","] mr-1 last:mr-0 last:after:content-[""]'>{e}</p> : null
                                            ))
                                        }
                                    </div> : null
                                }
                                {
                                    emailError ? <div className="w-full py-2 px-[15px] mb-2">
                                        <p className='text-sm leading-[21px] font-normal text-main-orangePrimary'>{emailError}</p>
                                    </div> : null
                                }
                            </div>
                            <div className="w-full py-[15px]">
                                <button type='submit' className='w-full min-h-[56px] rounded-[40px] text-center bg-main-darkBase'>
                                    {
                                        loading === true ? <Loader /> : <span className='text-lg leading-[27px] font-normal text-white'>{t("register.r_btn")}</span>
                                    }
                                </button>
                            </div>
                        </form>
                        <div className="w-full flex justify-center">
                            <p className="text-sm leading-[21px] lg:max-w-[270px] font-normal text-main-darkBase text-center">
                                {t("register.r_bottom_text")} <Link to="/signup" className="underline">{t("register.r_bottom_text_link")}</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SignUp;