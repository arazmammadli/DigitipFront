import React, { SyntheticEvent, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useResetPasswordMutation } from '../../../features/auth/authApiSlice';
import savePwdValidation from "../../../utils/savePwdValidation";
import { useTranslation } from 'react-i18next';
import Layout from '../../Layout/Layout';
import Loader from '../../loader/Loader';

type Props = {};

export interface ISavePwdData {
    password: string;
    verifyPassword: string;
}

export interface ISavePwdError {
    passwordMessage: string;
    verifyPasswordMessage: string;
    allCheckError?: string;
}

const SavePwd: React.FC<Props> = (props: Props) => {
    const [error, setError] = useState<ISavePwdError>({ passwordMessage: "", verifyPasswordMessage: "" });
    const [formData, setFormData] = useState<ISavePwdData>({ password: "", verifyPassword: "" });
    const [loading, setLoading] = useState<boolean>(false);
    const { t } = useTranslation();
    const { validate } = savePwdValidation();
    const { resetToken } = useParams();
    const [resetPassword] = useResetPasswordMutation();
    const navigate = useNavigate();

    const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const ge = validate(formData, e);
        if (!ge.passwordMessage && !ge.verifyPasswordMessage && !ge.allCheckError && resetToken) {
            const { email } = await resetPassword({ password: formData.password, verifyPassword: formData.verifyPassword, resetToken: resetToken }).unwrap();
            setFormData({ ...formData, password: "", verifyPassword: "" });
            navigate("/login", { state: { email: email } });
            setLoading(false);
        } else {
            setError(ge);
            setLoading(false);
        }
    }

    return (
        <Layout bgColor='#fafafc' bgFooter='bg-[#fff]'>

            <div className="flex items-center justify-center lg:bg-[#f4f4f4] bg-white relative bg-cover bg-center bg-no-repeat w-full py-16 min-h-[calc(100vh-90px)]">
                <div className="flex lg:max-w-xl max-w-full w-full flex-col items-center py-16 lg:px-14 md:px-5 px-[10px] bg-white shadow-[0_9_54_0_#d7dade_20%] rounded-[20px]">
                    <div className="flex flex-col items-start gap-6 w-full">
                        <div className="w-full flex justify-center">
                            <img src="/images/authForgot.png" className='object-cover max-w-[200px]' alt="Auth Forgot Password Img" />
                        </div>
                        <div className="w-full">
                            <h2 className='font-bold text-3xl leading-[42px] text-center mb-8'>{t("resetPassword.r_head")}</h2>
                        </div>
                        <div className="w-full">
                            <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
                                <div className="flex flex-col items-start gap-2">
                                    <div className="w-full">
                                        <input type="password" value={formData.password} name="password" id="password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} placeholder={t("resetPassword.r_password_placeholder") as string} className={`w-full py-4 px-[15px] rounded opacity-60 placeholder:text-sm placeholder:font-normal placeholder:leading-[17.5px] ${error.passwordMessage === "" ? "placeholder:text-main-dark" : "placeholder:text-main-orangePrimary"} outline-none border border-solid border-main-lightPrimary`} />
                                    </div>
                                    <div className="w-full">
                                        <input type="password" value={formData.verifyPassword} name="verifyPassword" id="verifyPassword" onChange={(e) => setFormData({ ...formData, verifyPassword: e.target.value })} placeholder={t("resetPassword.r_vp_placeholder") as string} className={`w-full py-4 px-[15px] rounded opacity-60 placeholder:text-sm placeholder:font-normal placeholder:leading-[17.5px] ${error.verifyPasswordMessage === "" ? "placeholder:text-main-dark" : "placeholder:text-main-orangePrimary"} outline-none border border-solid border-main-lightPrimary`} />
                                    </div>
                                </div>
                                <div className="w-full py-[15px]">
                                    <button type='submit' className='w-full min-h-[56px] rounded-[40px] text-center bg-main-darkBase'>
                                        {
                                            loading === true ? <Loader /> : <span className='text-lg leading-[27px] font-normal text-white'>{t("resetPassword.r_btn")}</span>
                                        }
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default SavePwd;