import React, { useState } from 'react'

type Props = {
    amount: string;
    id: number;
}

const AmountButton: React.FC<Props> = ({ amount }) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    return (
        <button type='button' onClick={() => setIsActive(!isActive)} className={`flex justify-center max-h-[43px] items-center py-3 px-6 ${isActive === false ? "bg-[#FDFDFE]" : "bg-main-orangePrimary"} border border-solid border-main-lightPrimary rounded-md`}>
            <span className={`font-normal text-base leading-[19.2px] min-w-max text-right ${isActive === false ? "text-[rgba(50,19,53,0.5)]" : "text-white"}`}>{amount}</span>
        </button>
    )
};

export default AmountButton