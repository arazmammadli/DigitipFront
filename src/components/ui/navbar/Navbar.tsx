import React, { useState, useEffect } from 'react';
import { colors } from '../../../constants/theme';
import { Link as NavLink, useLocation, useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import burn from "../../../assets/svg/burn.svg";
import globe from "../../../assets/svg/globe.svg";
import arrowUndo from "../../../assets/svg/arrowUndo.svg";
import hamburger from "../../../assets/svg/hamburger.svg";
import { Link } from "react-scroll";
import LanguageSwitcher from '../../languageSwitcher';
import { motion, AnimatePresence } from "framer-motion";
import { navigationData } from '../../../data/data';
import { useAppSelector } from '../../../redux/hooks';
import { selectCurrentToken } from '../../../features/reducers/authSlice';
import { useSendLogoutMutation } from '../../../features/auth/authApiSlice';
import useGetUser from '../../../hooks/useGetUser';
import { useTranslation } from "react-i18next"

type Props = {};

export const Navbar = (props: Props) => {
  const [isLanguage, setIsLanguage] = useState<Boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isResLanguage, setIsResLanguage] = useState<boolean>(false);
  const [currentLang, setCurrentLang] = useState<string>();
  const [isDropActive, setIsDropActive] = useState<boolean>(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const { token } = useAppSelector(selectCurrentToken);
  const [sendLogout, { isSuccess }] = useSendLogoutMutation();
  const [userData] = useGetUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) navigate("/")
  }, [isSuccess, navigate]);

  useEffect(() => {
    setCurrentLang(i18n.language);
  }, [i18n, i18n.language])

  return (
    <>
      <div className="max-w-[1280px] mx-auto">
        <div className="relative flex h-[88px] items-center justify-between px-[10px] lg:px-0">
          <div className="flex flex-1 items-center justify-start">
            <div className="flex flex-shrink-0 items-center">
              <NavLink to="/" className="block h-full">
                <img src="/images/logo.png" className='w-auto block' alt="Digitip Logo" />
              </NavLink>
            </div>
            <div className="hidden sm:ml-[39px] lg:block">
              <div className="flex space-x-4 items-center">
                {token === null ? navigationData.navData.map((item) => (
                  <Link
                    key={item.id}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={0}
                    className={`text-base font-normal text-main-darkPrimary leading-[24.8px] cursor-pointer`}
                  >
                    {t(`home.header.${item.to}`)}
                  </Link>
                )) : navigationData.responsiveNavData.map((item) => (
                  <NavLink
                    key={item.id}
                    to={`/${item.to}`}
                    className={`text-base font-normal ${location.pathname.includes(item.to) ? "text-main-orangePrimary" : "text-main-darkPrimary"} leading-[24.8px] cursor-pointer`}
                  >
                    {t(`personalOffice.header.${item.to}`)}
                  </NavLink>
                ))}
                {
                  token === null ? <Button bgColor={colors.Orange.main} rounded='4px' padding='4px 18px'>
                    <div className="flex items-center flex-row gap-2">
                      <img src={burn} alt="Burn Icon" />
                      <span className='text-base leading-[24.8px] font-normal text-white'>{t("home.header.headButton")}</span>
                    </div>
                  </Button> : <NavLink to='/profile/register/account' className='block bg-main-orangePrimary rounded py-1 px-[18px]'>
                    <div className="flex items-center flex-row gap-1">
                      <img src={arrowUndo} alt="Burn Icon" />
                      <span className='text-base leading-[24.8px] font-normal text-white'>{t("personalOffice.header.headButton")}</span>
                    </div>
                  </NavLink>
                }
              </div>
            </div>
          </div>
          <div className="hidden items-center flex-row gap-[41px] lg:flex">
            <div className="relative">
              <button type='button' className="flex items-center flex-row" onClick={() => setIsLanguage(!isLanguage)}>
                <img src={globe} alt="Globe Icon" />
                <span className='text-base font-normal leading-[24.8px] text-main-darkPrimary'>{currentLang?.toUpperCase()}</span>
              </button>
              <AnimatePresence>
                {
                  isLanguage && <motion.div initial={{ opacity: 0, scale: 0, translateX: "-50%" }}
                    animate={{ opacity: 1, scale: 1, translateX: "-50%" }}
                    exit={{ opacity: 0, scale: 0, transition: { duration: 0.5 }, translateX: "-50%" }}
                    transition={{ duration: 0.5 }} className="bg-white absolute left-1/2 -translate-x-1/2 rounded-xl py-[10px] mt-[10px] px-4 z-40 border border-solid border-main-lightPrimary">
                    <LanguageSwitcher setVisible={setIsLanguage} />
                  </motion.div>
                }
              </AnimatePresence>
            </div>
            <div className="flex flex-row items-center gap-[18px]">
              {
                token !== null ? <>
                  <div className="block">
                    {
                      token !== null && location.pathname.includes("profile") ? <button type='button' onClick={sendLogout} className='font-normal text-base leading-[24.8px] text-main-darkPrimary'>{t("profile.header.head_signout_text")}</button> : <span className='font-normal text-base leading-[24.8px] text-main-darkPrimary'>{userData.surname ? userData.name + " " + userData.surname : userData.name}</span>
                    }
                  </div>
                  <div className="relative">
                    <div className="">
                      {
                        !userData.userImg ? <button type='button' onClick={() => setIsDropActive(!isDropActive)} className='w-[55px] h-[55px] rounded-[50%] bg-[#d9d9d9]'></button> : <button type='button' className='flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                          <img src={userData.userImg} onClick={() => setIsDropActive(!isDropActive)} referrerPolicy="no-referrer" className="w-[55px] h-[55px] object-cover rounded-[50%]" alt="User Img" />
                        </button>
                      }
                    </div>
                    <AnimatePresence>
                      {
                        isDropActive && <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0, transition: { duration: 0.5 } }}
                          transition={{ duration: 0.5 }}
                          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md z-[100] shadow-lg py-1 bg-white ring-2 ring-[#ff4438] ring-inset ring-opacity-50 focus:outline-none"
                        >
                          <button
                            type="button"
                            className={"block px-4 py-2 w-full text-left text-sm transition-colors duration-300 ease-out text-gray-700 hover:bg-gray-200"}
                            onClick={sendLogout}
                          >
                            {t("profile.header.head_signout_text")}
                          </button>
                        </motion.div>
                      }
                    </AnimatePresence>
                  </div>
                </> : <div className="flex flex-row items-center justify-center py-3 px-6 border-solid border border-[#e8e8ea] rounded-2xl">
                  <NavLink
                    to="/auth"
                    className="leading-[24.8px] text-base font-normal text-center text-main-darkPrimary"
                  >
                    {t("home.header.headSignUp")}
                  </NavLink>
                  <span className='inline-block px-1'>/</span>
                  <NavLink
                    to="/auth"
                    className="leading-[24.8px] text-base font-normal text-center text-main-darkPrimary"
                  >
                    {t("home.header.headSignIn")}
                  </NavLink>
                </div>
              }
            </div>
          </div>
          <div className="lg:hidden flex space-x-4 items-center">

            <button type='button' className='hidden md:block rounded bg-main-orangePrimary py-1 px-[14px]'>
              <div className="flex items-center flex-row gap-2">
                <img src={arrowUndo} alt="Arrow Undo Svg" />
                <span className='text-base leading-[24.8px] font-normal text-white'>Вывести</span>
              </div>
            </button>

            <button type='button' className='block' onClick={() => setIsActive(true)}>
              <img src={hamburger} className="w-full object-cover" alt="Hamburger Svg" />
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence mode='wait'>
        {
          isActive && (
            <div className="lg:hidden relative z-40 w-full">
              <motion.div className="fixed inset-0 bg-[rgb(35,37,44)] bg-opacity-25" initial={{
                opacity: 0,
              }} animate={{
                opacity: 1,
                transition: {
                  opacity: {
                    duration: 0.25,
                    delay: 0.15,
                  },
                },
              }}
                exit={{
                  opacity: 0,
                  transition: {
                    opacity: {
                      duration: 0.25,
                    },
                  },
                }}></motion.div>
              <motion.div className="fixed inset-0 z-40 flex justify-end" initial={{
                translateX: "100%",
                opacity: 0,
              }}
                animate={{
                  translateX: 0,
                  opacity: 1,
                  transition: {
                    translateX: {
                      duration: 0.4,
                    },
                    opacity: {
                      duration: 0.25,
                      delay: 0.15,
                    },
                  },
                }}
                exit={{
                  translateX: "100%",
                  opacity: 0,
                  transition: {
                    translateX: {
                      duration: 0.4,
                    },
                    opacity: {
                      duration: 0.25,
                    },
                  },
                }}>
                <div className="relative w-full max-h-[42.5rem] rounded-tl-2xl px-5 rounded-bl-2xl max-w-xs overflow-y-auto bg-white shadow-xl">
                  <div className="flex justify-end px-4 pt-5 pb-2">
                    <button type="button" onClick={() => setIsActive(false)} className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400">
                      <svg className="h-6 w-6" x-description="Heroicon name: outline/x-mark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="flex flex-col justify-between gap-4">
                    <div className="">
                      <div className="flex justify-center w-full mb-[60px]">
                        <img src="/images/logo.png" alt="Logo" />
                      </div>
                      <div className="">
                        <ul className='flex flex-col items-center space-y-6'>
                          {
                            navigationData.navData.map((e) => (
                              <li className='flow-root'>
                                <Link key={e.id}
                                  to={e.to}
                                  spy={true}
                                  smooth={true}
                                  duration={500}
                                  offset={0}
                                  className={`text-base font-normal text-main-darkPrimary leading-[24.8px] cursor-pointer`}>{e.name}</Link>
                              </li>
                            ))
                          }
                          <Button bgColor={colors.Orange.main} rounded='4px' width='100%' padding='15px 18px'>
                            <div className="flex items-center flex-row gap-2">
                              <img src={burn} alt="Burn Icon" />
                              <span className='text-base leading-[24.8px] font-normal text-white'>Подключиться</span>
                            </div>
                          </Button>
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                      {
                        token !== null ? <div className='flex flex-row items-center gap-2'>
                          <div className="block">
                            {
                              token !== null && location.pathname.includes("profile") ? <button type='button' onClick={sendLogout} className='font-normal text-base leading-[24.8px] text-main-darkPrimary'>Выход</button> : <span className='font-normal text-base leading-[24.8px] text-main-darkPrimary'>{userData.surname ? userData.name + " " + userData.surname : userData.name}</span>
                            }
                          </div>
                          {
                            !userData.userImg ? <div className="flex">
                              <button type='button' className='w-[55px] h-[55px] rounded-[50%] bg-[#d9d9d9]'></button>
                            </div> : <div className="block min-w-max">
                              <img src={userData.userImg} className="w-[55px] h-[55px] object-cover rounded-[50%]" alt="User Img" />
                            </div>
                          }
                        </div> : <div className="flex flex-row w-full items-center justify-center py-3 px-6 border-solid border border-[#e8e8ea] rounded-2xl">
                          <NavLink
                            to="/auth"
                            className="leading-[24.8px] text-base font-normal text-center text-main-darkPrimary"
                          >
                            Sign up
                          </NavLink>
                          <span className='inline-block px-1'>/</span>
                          <NavLink
                            to="/auth"
                            className="leading-[24.8px] text-base font-normal text-center text-main-darkPrimary"
                          >
                            Login
                          </NavLink>
                        </div>
                      }
                    </div>
                  </div>
                  <AnimatePresence>
                    {
                      isResLanguage && (
                        <motion.div className="relative" initial={{ opacity: 0, translateX: "-50%" }}
                          animate={{ opacity: 1, translateX: "0%" }}
                          exit={{ opacity: 0, transition: { duration: 0.5 }, translateX: "-50%" }}
                          transition={{ duration: 0.5 }}>
                          <div className="bg-white absolute -left-4 rounded-xl py-[10px] mt-[10px] px-4 z-40 border border-solid border-main-lightPrimary">
                            <LanguageSwitcher setVisible={setIsResLanguage} />
                          </div>
                        </motion.div>
                      )
                    }
                  </AnimatePresence>
                  <div className="absolute bottom-10">
                    <button type='button' className="flex flex-row" onClick={() => setIsResLanguage(!isResLanguage)}>
                      <img src={globe} alt="Globe Icon" />
                      <span className='text-base font-normal leading-[24.8px] text-main-darkPrimary'>RU</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )
        }
      </AnimatePresence>
      {isDropActive && <div className="w-full h-full !my-0 !ml-0 dark:bg-dark dark:bg-opacity-60  bg-opacity-60 absolute left-0 top-0 z-[98]" onClick={() => setIsDropActive(false)} style={{
        top: `${window.scrollY}px`,
      }}></div>}
    </>
  )
}
