import React from 'react'
import shortid from 'shortid';
import { transactions } from '../../../../data/data';
import { useTranslation } from 'react-i18next';
import { ITransactions } from '../../../../types/data';

type Props = {
    height: string;
    data: ITransactions[]
}

const Transactions: React.FC<Props> = ({ height, data }) => {
    const {t} = useTranslation();
    return (
        <div className="lg:mb-0 mb-6 py-10">
            <div className={`${height} relative overflow-hidden lg:overflow-y-auto transactions_container lg:pr-5 pr-0`}>
                <div className="w-full lg:text-left text-center border-b border-solid border-[#e0e3eb] mb-4 pb-2">
                    <h2 className='font-medium text-[32px] leading-10 text-main-darkBase'>{t("profile.transaction.transaction_head")}</h2>
                </div>
                <div className="flex flex-col gap-4 relative">
                    {
                        data.length !== 0 ? data.map((t) => (
                            <div key={shortid.generate()} className="w-full flex lg:justify-center items-center h-[42px] text-main-darkPrimary rounded-md py-3 md:px-5 px-[10px] bg-[rgba(250,250,253,0.4)] border border-solid border-[#E8E8EA]">
                                <ul className='flex md:w-full lg:w-max justify-start gap-5 md:justify-between lg:gap-12 items-center'>
                                    {
                                        t.lists.map((l) => (
                                            <li key={shortid.generate()}>
                                                <span className='font-normal text-sm leading-[17.5px]'>{l.text}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        )) : <div className="flex flex-col items-center justify-center gap-9">
                            <img src="/images/payment-with-card.png" alt="" />
                            <p className='font-normal text-xl leading-[31px] text-center text-main-darkPrimary'>{t("profile.transaction.transaction_text")}</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
};

export default Transactions;