import React from 'react'
import { createPortal } from 'react-dom';
import Button from '../ui/button/Button';
import close from "../../assets/svg/close.svg";

type Props = {
    onDisable: React.Dispatch<boolean>;
    subText?: string;
    imgSrc: string;
    heading: string;
    btnText: string;
}

const Success: React.FC<Props> = ({ imgSrc, heading, subText, onDisable, btnText }) => {
    return (
        createPortal(
            <div className="fixed top-0 bg-[rgba(35,37,44,0.4)] z-[9999999] left-0 h-screen w-full flex items-center lg:px-0 px-5 lg:justify-center">
                <div className="bg-white relative lg:min-w-[840px] min-w-full rounded-[20px]">
                    <button type='button' onClick={() => onDisable(false)} className="w-10 h-10 absolute top-6 right-6 flex justify-center items-center rounded-md shadow-[0px_9px_7px_rgba(202,209,220,0.2)]">
                        <img src={close} alt="Close Svg" />
                    </button>
                    <div className="lg:max-w-[568px] max-w-[560px] mx-auto py-20">
                        <div className="flex flex-col items-center gap-6 justify-center">
                            <div className="max-w-[240px]">
                                <img src={`/images/${imgSrc}`} className='w-full object-cover' alt="Modal Img" />
                            </div>
                            <div className="w-full">
                                <h2 className={`font-bold text-3xl leading-[37.5px] text-center text-main-dark ${subText ? "mb-2" : "mb-0"}`}>{heading}</h2>
                                {
                                    subText ? <p className='font-medium text-base leading-5 text-center text-main-darkBase opacity-60'>{subText}</p> : null
                                }
                            </div>

                            <div className="flex w-full justify-center flex-row">
                                <div className="flex flex-row gap-[10px]">
                                    <Button rounded='4px' padding='16px 32px' border='1px solid #27AE60' type='button'>
                                        <span className='font-medium text-xs leading-[15px] text-center text-main-greenPrimary'>{btnText}</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>, document.querySelector("#modal-root") || document.body)
    )
};

export default Success;