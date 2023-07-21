import React, { useState, useEffect, SyntheticEvent, ChangeEvent } from 'react'
import { Button, Layout, Modal } from '../../../components';
import repeat from "../../../assets/svg/repeat.svg";
import card from "../../../assets/svg/card.svg";
import arrowLeft from "../../../assets/svg/leftNav.svg";
import { Link, useNavigate } from 'react-router-dom';
import { useUpdateUserMutation } from '../../../features/user/userApiSlice';
import { useTranslation } from 'react-i18next';
import useGetUser from '../../../hooks/useGetUser';
import { IUserUpdateReq } from '../../../types/auth';
import Loader from '../../../components/loader/Loader';

type Props = {};

const Settings: React.FC<Props> = (props: Props) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [userImg, setUserImg] = useState<File | string>("");
    const [userData, setUserData] = useGetUser();
    const [formData, setFormData] = useState<IUserUpdateReq>({} as IUserUpdateReq);
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const [updateUser, { isSuccess, data }] = useUpdateUserMutation();
    const [valueCheck, setValueCheck] = useState<boolean | null>(null);
    const { t } = useTranslation();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length === 1) {
            setValueCheck(true);
            const img = e.target.files[0];
            if (img) {
                setUserImg(img);
            }
        }
    }

    const deleteImg = () => {
        setFormData({ ...formData, file: "" });
    }

    const editUser = async () => {
        try {
            await updateUser(formData);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        await editUser();
        setValueCheck(null);
    }

    useEffect(() => {
        if (userImg) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, file: reader.result as string })
            };
            reader.readAsDataURL(userImg as File);
        }
    }, [userImg]);

    useEffect(() => {
        if (userData) {
            setFormData((prevState) => (
                {
                    name: userData.name || "",
                    surname: userData.surname || "",
                    file: userData.userImg || "",
                    position: userData.position || "",
                    phone: userData.phone || "",
                    nameSystem: userData.nameSystem || "",
                    workAddress: userData.workAddress || "",
                    aboutMe: userData.aboutMe || "",
                    id: userData._id
                }
            ))
        }
    }, [userData])

    useEffect(() => {
        if (isSuccess) {
            setUserData(data);
            navigate("/profile");
            setLoading(false);
        }
    }, [isSuccess, data, navigate])

    return (
        <>
            <Layout bgColor='#fafafc' bgFooter='bg-[#fff]'>
                <div className="lg:max-w-[840px] md:max-w-full mx-auto pt-[50px] pb-14">
                    <div className="mb-4 lg:pl-0 pl-[10px]">
                        <button type='button' className='flex flex-row items-center gap-2' onClick={() => {
                            if (valueCheck === null) {
                                navigate("/profile")
                            } else {
                                setShowModal(true)
                            }
                        }}>
                            <img src={arrowLeft} alt="Arrow icon" />
                            <span className='text-main-darkBase font-normal text-xs leading-[15px]'>{t("profile.settings.s_back")}</span>
                        </button>
                    </div>
                    <div className="bg-white rounded-[20px]">
                        <div className="flex md:flex-row flex-col lg:p-10 py-10 px-[10px] md:gap-[30px] lg:gap-9">
                            <div className="md:flex-[0_0_35%] md:max-w-[35%] flex-[0_0_100%] max-w-full">
                                <div className="mb-[18px]">
                                    <img src={formData.file || "/images/profil-settings.png"} className='max-w-[260px] min-h-[260px] rounded-[50%] object-cover' alt="Profil Img" />
                                </div>
                                <div className="flex flex-row gap-[10px] mb-[17px]">
                                    <div className="w-full">
                                        <input type="file" onChange={handleChange} name="fileUpload" id="fileUpload" className='hidden' />
                                        <label htmlFor="fileUpload" className='p-3 md:py-3 text-center block w-full md:px-[17.5px] rounded bg-[#F4F4F8] cursor-pointer'><span className='text-xs font-medium leading-[15px] text-center text-main-dark'>{t("profile.settings.s_upload_btn")}</span></label>
                                    </div>
                                    <div className="w-full">
                                        <button type='button' onClick={deleteImg} className='py-3 block px-[17.5px] w-full rounded bg-main-orangePrimary cursor-pointer'>
                                            <span className='text-xs font-medium leading-[15px] text-center text-white'>{t("profile.settings.s_delete_btn")}</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="">
                                    <button type='button' className='flex w-full md:p-0 py-[14px] md:bg-white  bg-[#E8E8EA] md:rounded-none rounded md:border-none border border-solid border-main-lightPrimary flex-row items-center justify-center md:justify-start gap-2 mb-[15px] opacity-50'>
                                        <img src={repeat} alt="" />
                                        <span className='text-[#000] font-normal text-xs leading-[15px] '>{t("profile.settings.s_update_pwd")}</span>
                                    </button>
                                </div>
                            </div>
                            <div className="md:flex-[0_0_62%] md:max-w-[62%] lg:flex-[0_0_65%] lg:max-w-[65%] flex-[0_0_100%] max-w-full">
                                <form action="" onSubmit={handleSubmit} className='md:pr-9'>
                                    <div className="flex flex-col items-start gap-[10px] mb-5">
                                        <div className="w-full">
                                            <input type="text" value={formData.name || ""} onChange={(e) => {
                                                setFormData({ ...formData, name: e.target.value })
                                                setValueCheck(true)
                                            }} name="name" id="name" placeholder={t("profile.settings.name_placeholder") as string} className={`w-full py-4 px-[15px] max-h-[46px] opacity-60 rounded placeholder:text-sm placeholder:font-normal placeholder:leading-[17.5px] placeholder:text-main-dark outline-none border border-solid border-main-lightPrimary`} />
                                        </div>
                                        <div className="w-full">
                                            <input type="text" value={formData.surname || ""} onChange={(e) => {
                                                setFormData({ ...formData, surname: e.target.value })
                                                setValueCheck(true)
                                            }} name="surname" id="surname" placeholder={t("profile.settings.surname_placeholder") as string} className={`w-full py-4 px-[15px] opacity-60 max-h-[46px] rounded placeholder:text-sm placeholder:font-normal placeholder:leading-[17.5px] placeholder:text-main-dark outline-none border border-solid border-main-lightPrimary`} />
                                        </div>
                                        <div className="w-full">
                                            <input type="text" value={formData.position || ""} onChange={(e) => {
                                                setFormData({ ...formData, position: e.target.value })
                                                setValueCheck(true)
                                            }} name="position" id="position" placeholder={t("profile.settings.position_placeholder") as string} className={`w-full py-4 opacity-60 max-h-[46px] px-[15px] rounded placeholder:text-sm placeholder:font-normal placeholder:leading-[17.5px] placeholder:text-main-dark outline-none border border-solid border-main-lightPrimary`} />
                                        </div>
                                        <div className="w-full">
                                            <input type="text" value={formData.phone || ""} onChange={(e) => {
                                                setFormData({ ...formData, phone: e.target.value })
                                                setValueCheck(true)
                                            }} name="phone" id="phone" placeholder={t("profile.settings.phone_placeholder") as string} className={`w-full py-4 px-[15px] opacity-60 max-h-[46px] rounded placeholder:text-sm placeholder:font-normal placeholder:leading-[17.5px] placeholder:text-main-dark outline-none border border-solid border-main-lightPrimary`} />
                                        </div>
                                        <div className="w-full">
                                            <input type="text" value={formData.nameSystem || ""} onChange={(e) => {
                                                setFormData({ ...formData, nameSystem: e.target.value })
                                                setValueCheck(true)
                                            }} name="nameSystem" id="nameSystem" placeholder={t("profile.settings.name_system_placeholder") as string} className={`w-full py-4 opacity-60 max-h-[46px] px-[15px] rounded placeholder:text-sm placeholder:font-normal placeholder:leading-[17.5px] placeholder:text-main-dark outline-none border border-solid border-main-lightPrimary`} />
                                        </div>
                                        <div className="w-full">
                                            <input type="text" value={formData.workAddress || ""} onChange={(e) => {
                                                setFormData({ ...formData, workAddress: e.target.value })
                                                setValueCheck(true)
                                            }} name="workAddress" id="workAddress" placeholder={t("profile.settings.work_address_placeholder") as string} className={`w-full py-4 opacity-60 max-h-[46px] px-[15px] rounded placeholder:text-sm placeholder:font-normal placeholder:leading-[17.5px] placeholder:text-main-dark outline-none border border-solid border-main-lightPrimary`} />
                                        </div>
                                        <div className="w-full">
                                            <textarea cols={100} value={formData.aboutMe || ""} name="aboutMe" onChange={(e) => {
                                                setFormData({ ...formData, aboutMe: e.target.value })
                                                setValueCheck(true)
                                            }} id="aboutMe" placeholder={t("profile.settings.aboutMe_placeholder") as string} className={`w-full resize-none py-4 opacity-60 px-[15px] rounded placeholder:text-sm placeholder:font-normal placeholder:leading-[17.5px] placeholder:text-main-dark outline-none border border-solid border-main-lightPrimary`} />
                                        </div>
                                    </div>
                                    <div className="w-full mb-5">
                                        <Link to={"/profile/register/account"} className="flex flex-row gap-2 opacity-60">
                                            <img src={card} alt="Card Svg" />
                                            <span className='text-xs font-normal leading-[15px] text-main-darkBase'>{t("profile.settings.redirect_link")}</span>
                                        </Link>
                                    </div>
                                    <div className="w-full">
                                        <Button rounded='4px' type='submit' padding='12px 48px' border='1px solid #27AE60'>
                                            {
                                                loading === true ? <Loader /> : <span className='text-xs font-medium text-center leading-[15px] text-main-greenPrimary'>{t("profile.settings.btn")}</span>
                                            }
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
            {
                (valueCheck !== null && showModal) && <Modal onDisable={setShowModal}>
                    <div className="lg:max-w-[568px] max-w-[560px] mx-auto py-20">
                        <div className="flex flex-col items-center gap-6 justify-center">
                            <div className="max-w-[240px]">
                                <img src="/images/settings-modal.png" className='w-full object-cover' alt="Modal Img" />
                            </div>
                            <div className="w-full">
                                <h2 className='font-bold text-3xl leading-[37.5px] text-center text-main-dark'>{t("profile.modal.modal_head")}</h2>
                            </div>
                            <div className="flex w-full justify-center flex-row">
                                <div className="flex flex-col md:flex-row gap-[10px]">
                                    <Button rounded='4px' onClick={async () => {
                                        await editUser()
                                    }} padding='16px 32px' border='1px solid #27AE60' type='button'>
                                        <span className='font-medium text-xs leading-[15px] text-center text-main-greenPrimary'>{t("profile.modal.modal_success_btn")}</span>
                                    </Button>
                                    <Button rounded='4px' onClick={() => {
                                        navigate("/profile")
                                    }} padding='16px 32px' bgColor='#FDFDFE' border='1px solid #747A88' type='button'>
                                        <span className='font-medium text-xs leading-[15px] text-center text-main-mainGray'>{t("profile.modal.modal_failed_btn")}</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            }
        </>
    )
};

export default Settings;