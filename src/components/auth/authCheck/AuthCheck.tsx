import React, { SyntheticEvent, useRef, useState } from 'react'
import { regexEmail } from '../../../data/data';
import LoginButton from '../login/LoginButton';
import googleAuth from "../../../assets/svg/googleAuth.svg";
import fbAuth from "../../../assets/svg/fbAuth.svg";
import appleAuth from "../../../assets/svg/appleAuth.svg";
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuthCheckMutation } from "../../../features/auth/authApiSlice";
import Cookies from 'js-cookie';
import { useAppDispatch } from '../../../redux/hooks';
import { login } from '../../../features/reducers/authSlice';
import Loader from '../../loader/Loader';

type Props = {

}

const AuthCheck: React.FC<Props> = (props: Props) => {
    const emailRef = useRef<HTMLInputElement>(null);
    const [emailValue, setEmailValue] = useState<string>("");
    const [error, setError] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);
    const [authCheck] = useAuthCheckMutation();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const validate = (email: string) => {
        let e: string;
        if (!email) {
            if (emailRef.current) {
                emailRef.current.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
                emailRef.current.style.border = "1px solid #ff443b";
            }
            e = t("authCheckError.emptyError");
        } else if (email && !regexEmail.test(email)) {
            if (emailRef.current) {
                emailRef.current.style.backgroundColor = "rgba(255, 0, 0, 0.1)";
                emailRef.current.style.border = "1px solid #ff443b";
            }
            e = t("authCheckError.wrongError");
        } else {
            if (emailRef.current) {
                emailRef.current.style.backgroundColor = "#fff";
                emailRef.current.style.border = "1px solid #E8E8EA";
            }
            e = "";
        }

        return e;
    }

    const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        
        const check = validate(emailValue);
        if (!check) {
            const res: any = await authCheck({ email: emailValue });
            const resStatus: boolean = res.error.data.success;
            resStatus ? navigate("/login", { state: { email: emailValue } }) : navigate("/signup", { state: { email: emailValue } });
            setLoading(false);
        } else {
            setError(check);
            setLoading(false);
        }
    };

    const google = () => {
        window.open("http://localhost:5000/api/auth/google", "_self");
    };

    const facebook = () => {
        window.open("http://localhost:5000/api/auth/facebook", "_self")
    }


    return (
        <div className="flex items-center justify-center relative lg:bg-[#f4f4f4] bg-white bg-cover bg-center bg-no-repeat w-full lg:py-20 min-h-[calc(100vh-90px)]">
            <div className="flex lg:max-w-xl max-w-full w-full flex-col items-center py-16 lg:px-14 md:px-5 px-[10px] bg-white shadow-[0_9_54_0_#d7dade_20%] rounded-[20px]">
                <h2 className='font-bold text-[27px] leading-[42px] text-center md:text-left lg:text-center mb-4'>{t("authCheck.a_head")}</h2>
                <div className="flex flex-col lg:px-0 md:px-[90px] items-start gap-6 w-full">
                    <div className="flex flex-col gap-6 w-full">
                        <LoginButton icon={googleAuth} text="g_btn" onClick={google} />
                        <LoginButton icon={fbAuth} text="fb_btn" onClick={facebook} />
                        <LoginButton icon={appleAuth} text="apple_btn" />
                    </div>
                    <div className="w-full my-5">
                        <div className={`relative h-[2px] w-full bg-[rgba(102,102,102,0.25)] before:content-['${t('authCheck.a_auth_info')}'] before:absolute before:w-max before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:bg-white before:px-6 before:text-base before:font-normal before:leading-[20.13px] before:text-[#666]`}></div>
                    </div>
                    <div className="w-full">
                        <form className='' onSubmit={handleSubmit}>
                            <div className={`w-full ${error ? "mb-[10px]" : "mb-2"}`}>
                                <input type="text" name="email" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} ref={emailRef} id="email" placeholder='E-mail' className={`w-full py-4 px-[15px] opacity-60 rounded placeholder:text-sm placeholder:font-normal placeholder:leading-[17.5px] ${!error ? "placeholder:text-main-dark" : "placeholder:text-main-orangePrimary"} outline-none border border-solid border-main-lightPrimary`} />
                            </div>
                            {error && <div className='w-full py-2 px-[15px] mb-2'>
                                <p className='text-sm leading-[21px] font-normal text-main-orangePrimary'>{error}</p>
                            </div>}
                            <div className="w-full mb-8">
                                <Link to={"/forgot/password"} className="font-normal text-sm leading-[18px] text-main-darkBase underline">{t("authCheck.a_forgot")}</Link>
                            </div>
                            <div className="w-full py-[15px]">
                                <button type='submit' className='w-full min-h-[56px] rounded-[40px] text-center bg-main-darkBase'>
                                    {
                                        loading === true ? <Loader /> : <span className='text-lg leading-[27px] font-normal text-white'>{t("authCheck.a_btn")}</span>
                                    }
                                </button>
                            </div>
                        </form>
                        <div className="w-full flex justify-center">
                            <p className="text-sm leading-[21px] max-w-[270px] font-normal text-main-darkBase text-center">
                                {t("authCheck.a_bottom_text")} <Link to="/signup" className="underline">{t("authCheck.a_bottom_text_link")}</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AuthCheck;