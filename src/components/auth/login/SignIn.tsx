import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import React, { SyntheticEvent, useRef, useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { passwordRegex } from '../../../data/data';
import { useSigninUserMutation } from '../../../features/auth/authApiSlice';
import { login } from '../../../features/reducers/authSlice';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../../redux/hooks';
import Loader from '../../loader/Loader';

type Props = {

}

type LocationState = {
    state: {
        email: string
    }
}

const SignIn: React.FC<Props> = (props: Props) => {
    const passwordRef = useRef<HTMLInputElement>(null);
    const [passwordValue, setPasswordValue] = useState<string>("");
    const location = useLocation() as LocationState;
    const { email } = location.state || "";
    const [loading, setLoading] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const [signinUser, { isError, error, isSuccess, data }] = useSigninUserMutation();
    const [passwordError, setPasswordError] = useState({
        textError: "",
        valueError: ""
    });
    const navigate = useNavigate();

    const passwordValidate = (pwd: string): string => {
        let errorTxt: string
        if (!pwd) {
            if (passwordRef.current) {
                passwordRef.current.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
                passwordRef.current.style.border = "1px solid #ff443b";
                passwordRef.current.placeholder = "Введите пароль";
            };
            errorTxt = t("loginError.emptyError");
        } else if (pwd.length < 8) {
            if (passwordRef.current) {
                passwordRef.current.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
                passwordRef.current.style.border = "1px solid #ff443b";
                passwordRef.current.placeholder = "Введите пароль";
            };
            errorTxt = t("loginError.lengthError");
        } else if (!passwordRegex.test(pwd)) {
            if (passwordRef.current) {
                passwordRef.current.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
                passwordRef.current.style.border = "1px solid #ff443b";
                passwordRef.current.placeholder = "Введите пароль";
            };
            errorTxt = t("loginError.wrongError");
        } else {
            if (passwordRef.current) {
                passwordRef.current.style.backgroundColor = "#fff";
                passwordRef.current.style.border = "1px solid #E8E8EA";
                passwordRef.current.placeholder = "Введите пароль для входа";
            };
            errorTxt = "";
        }

        return errorTxt;
    }

    const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const checkError = passwordValidate(passwordValue);
        if (!checkError) {
            await signinUser({ email: email, password: passwordValue }).unwrap();
        } else {
            setPasswordError({ ...passwordError, textError: checkError, valueError: "" });
            setLoading(false);
        }
    }

    useEffect(() => {
        if (isError) {
            const { status } = error as FetchBaseQueryError;
            if (status === 400) {
                setPasswordError({ ...passwordError, valueError: t("loginError.apiError"), textError: "" });
                setLoading(false);
            } else if (status === 403) {
                setPasswordError({ ...passwordError, valueError: t("loginError.authCheckError"), textError: "" });
                setLoading(false);
            } else {
                setPasswordError({ ...passwordError, valueError: "", textError: "" });
                setLoading(false);
            }
        }
    }, [isError, error])

    useEffect(() => {
        if (isSuccess) {
            dispatch(login({ accessToken: data.token }));
            setPasswordValue("");
            setPasswordError({ ...passwordError, valueError: "", textError: "" });
            navigate("/personal-office");
            setLoading(false);
        }
    }, [isSuccess, data, navigate])

    return (
        <div className="flex items-center justify-center lg:bg-[#f4f4f4] bg-white relative bg-cover bg-center bg-no-repeat w-full lg:py-20 min-h-[calc(100vh-90px)]">
            <div className="flex lg:max-w-xl max-w-full w-full flex-col items-center py-16 lg:px-14 md:px-[90px] px-[10px] bg-white shadow-[0_9_54_0_#d7dade_20%] rounded-[20px]">
                <div className="flex flex-col items-start gap-6 w-full">
                    <div className="w-full flex justify-center">
                        <img src="/images/authLogin.png" className='object-cover max-w-[200px]' alt="Auth Login Img" />
                    </div>
                    <div className="w-full">
                        <h2 className='font-bold text-3xl leading-[42px] text-center'>{t("login.l_head")}</h2>
                    </div>
                    <div className="w-full">
                        <form className='' onSubmit={handleSubmit}>
                            <div className={`w-full ${passwordError.textError || passwordError.valueError ? "mb-[18px]" : "mb-8"}`}>
                                <input type="password" name="password" value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} ref={passwordRef} id="password" placeholder={t("login.l_placeholder") as string} className={`w-full py-4 px-[15px] rounded placeholder:text-sm placeholder:font-normal placeholder:leading-[17.5px] ${!error ? "placeholder:text-main-dark" : "placeholder:text-main-orangePrimary"} outline-none border border-solid border-main-lightPrimary`} />
                            </div>
                            {
                                passwordError.valueError || passwordError.textError ? <div className="w-full py-2 px-[15px] mb-8">
                                    <p className='text-sm leading-[21px] font-normal text-main-orangePrimary'>{passwordError.textError || passwordError.valueError}</p>
                                </div> : null
                            }
                            <div className="w-full py-[15px]">
                                <button type='submit' className='w-full min-h-[56px] rounded-[40px] text-center bg-main-darkBase'>
                                    {
                                        loading === true ? <Loader /> : <span className='text-lg leading-[27px] font-normal text-white'>{t("login.l_btn")}</span>
                                    }
                                </button>
                            </div>
                        </form>
                        <div className="w-full flex justify-center">
                            <p className="text-sm leading-[21px] lg:max-w-[270px] max-w-sm font-normal text-main-darkBase text-center">
                                {t("login.l_bottom_text")} <Link to="/signup" className="underline">{t("login.l_bottom_text_link")}</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SignIn;