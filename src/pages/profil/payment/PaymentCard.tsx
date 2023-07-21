import React from 'react';
import arrowLeft from "../../../assets/svg/leftNav.svg"
import { Button, Layout } from '../../../components';

type Props = {}

const PaymentCard: React.FC<Props> = (props: Props) => {
  return (
    <Layout bgColor='#fafafc' bgFooter='bg-[#fff]'>
      <div className="lg:max-w-sm min-w-full mx-auto min-h-[calc(100vh-251px)] lg:px-0 md:px-[10px] flex lg:flex-row lg:justify-center justify-center flex-col lg:items-center">
        <div className="mt-10 lg:pl-0 pl-[10px] lg:hidden block">
          <button type='button' className='flex flex-row items-center gap-2'>
            <img src={arrowLeft} alt="" />
            <span className='text-main-darkBase font-normal text-xs leading-[15px]'>Вернуться к профилю</span>
          </button>
        </div>
        <div className="bg-white rounded-[20px] md:p-[30px] py-[30px] px-5 my-10">
          <div className="w-full">
            <div className="mb-5 lg:text-left text-center">
              <h2 className='text-lg font-bold leading-[22.5px] text-main-darkBase'>Оплата картой</h2>
            </div>
            <div className="">
              <form action="">
                <div className="flex flex-col gap-[10px] items-start mb-5">
                  <div className="w-full">
                    <input type="text" name="cardNumber" id="cardNumber" placeholder='Номер карты' className={`w-full py-4 px-[15px] rounded placeholder:text-sm opacity-60 placeholder:font-normal placeholder:leading-[17.5px] placeholder:text-main-dark outline-none border border-solid border-main-lightPrimary`} />
                  </div>
                  <div className="flex w-full flex-row gap-[10px]">
                    <div className="w-full">
                      <input type="text" name="monthYear" id="monthYear" placeholder='Месяц/год' className={`w-full py-4 pl-[15px] rounded placeholder:text-sm opacity-60 placeholder:font-normal placeholder:leading-[17.5px] placeholder:text-main-dark outline-none border border-solid border-main-lightPrimary`} />
                    </div>
                    <div className="w-full">
                      <input type="text" name="cvvKod" id="cvvKod" placeholder='CVC/CVV-код' className={`w-full py-4 pl-[15px] rounded placeholder:text-sm opacity-60 placeholder:font-normal placeholder:leading-[17.5px] placeholder:text-main-dark outline-none border border-solid border-main-lightPrimary`} />
                    </div>
                  </div>
                  <div className="w-full">
                    <input type="text" name="email" id="email" placeholder='Эллектронная почта' className={`w-full py-4 px-[15px] rounded placeholder:text-sm opacity-60 placeholder:font-normal placeholder:leading-[17.5px] placeholder:text-main-dark outline-none border border-solid border-main-lightPrimary`} />
                  </div>
                </div>
                <div className="mb-[10px]">
                  <Button type='button' rounded='6px' width='100%' padding='14px 24px' bgColor='#F4F4F8'>
                    <span className='font-normal text-sm leading-[17.5px] text-center text-main-mainGray'>Оплатить</span>
                  </Button>
                </div>
                <div className="px-10">
                  <p className='text-xs leading-[18.6px] text-center opacity-60 text-main-darkBase font-normal'>Нажимая кнопку «Оплатить», я соглашаюсь с <span className='text-main-orangePrimary'>условиями</span> Банка</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
};

export default PaymentCard;