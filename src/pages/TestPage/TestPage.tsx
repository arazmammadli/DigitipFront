import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Error, Modal, Success } from '../../components';

type Props = {}

const TestPage: React.FC<Props> = (props: Props) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
    const [showErrorModal, setShowErrorModal] = useState<boolean>(false);
    return (
        <>
            <div>
                <div className="px-5">
                    <div className="py-4">
                        <div className="mb-4">
                            <ul className=''>
                                <li>
                                    <Link to={'/home'} className="underline">Home</Link>
                                </li>
                                <li>
                                    <Link to={'/personal-office'} className="underline">Личный кабинет</Link>
                                </li>
                                <li>
                                    <Link to={'/profile'} className="underline">Профиль</Link>
                                </li>
                                <li>
                                    <Link to={'/profile/blank'} className="underline">Пустой профиль</Link>
                                </li>
                                <li>
                                    <Link to={'/profile/settings'} className="underline">Настройки</Link>
                                </li>
                                <li>
                                    <Link to={'/profile/register/account'} className="underline">Зарегистрирован банке</Link>
                                </li>
                                <li>
                                    <Link to={'/profile/withdraw'} className="underline">После регистрации счёта</Link>
                                </li>
                                <li>
                                    <Link to={'/profile/payment-qrcode'} className="underline">Payment Qrcode</Link>
                                </li>
                                <li>
                                    <Link to={'/profile/payment-card'} className="underline">Payment Card</Link>
                                </li>
                                <li>
                                    <Link to={'/forgot/password/verify'} className="underline">New Password</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex lg:flex-row flex-col gap-3">
                            <button type='button' onClick={() => setShowModal(true)} className='flex justify-center items-center rounded bg-main-orangePrimary text-white py-1 px-[18px] text-base font-normal leading-[24.8px] lg:block'>
                                Open modal
                            </button>
                            <button type='button' onClick={() => setShowSuccessModal(true)} className='flex justify-center items-center rounded bg-main-orangePrimary text-white py-1 px-[18px] text-base font-normal leading-[24.8px] lg:block'>
                                Open Success Modal
                            </button>
                            <button type='button' onClick={() => setShowErrorModal(true)} className='flex justify-center items-center rounded bg-main-orangePrimary text-white py-1 px-[18px] text-base font-normal leading-[24.8px] lg:block'>
                                Open Error Modal
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {
                showModal && <Modal onDisable={setShowModal}>
                    <div className="lg:max-w-[568px] md:max-w-[560px] mx-auto py-20">
                        <div className="flex flex-col items-center gap-6 justify-center">
                            <div className="max-w-[240px]">
                                <img src="/images/settings-modal.png" className='w-full object-cover' alt="Modal Img" />
                            </div>
                            <div className="w-full">
                                <h2 className='font-bold text-3xl leading-[37.5px] text-center text-main-dark'>Вы не сохранили изменения, уверены что хотите вернуться к профилю?</h2>
                            </div>
                            <div className="flex w-full justify-center flex-row">
                                <div className="flex flex-col md:flex-row gap-[10px]">
                                    <Button rounded='4px' padding='16px 32px' width='100%' border='1px solid #27AE60' type='button'>
                                        <span className='font-medium text-xs leading-[15px] text-center text-main-greenPrimary'>Сохранить настрйоки</span>
                                    </Button>
                                    <Button rounded='4px' padding='16px 32px' width='100%' bgColor='#FDFDFE' border='1px solid #747A88' type='button'>
                                        <span className='font-medium text-xs leading-[15px] text-center text-main-mainGray'>Сохранить настрйоки</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            }
            {showSuccessModal && <Success onDisable={setShowSuccessModal} imgSrc='account-register-success.png' heading='Вы удачно подключили предпринимательский счет, теперь вы можете вывести ваши средства.' btnText='Перейти к профилю' />}
            {showErrorModal && <Error onDisable={setShowErrorModal} imgSrc='payment-error.png' heading='Оплата не прошла' subText='попробуйте другой метод оплаты' btnText='Повторить' />}
        </>
    )
};

export default TestPage;