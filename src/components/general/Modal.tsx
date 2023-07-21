import React from 'react';
import { createPortal } from "react-dom";
import close from "../../assets/svg/close.svg"

type Props = {
    children: JSX.Element | JSX.Element[];
    onDisable: React.Dispatch<boolean>
}

const Modal: React.FC<Props> = ({ children, onDisable }) => {
    return (
        createPortal(
            <div className="fixed top-0 bg-[rgba(35,37,44,0.4)] z-[9999999] left-0 h-screen w-full flex items-center lg:px-0 px-5 lg:justify-center">
                <div className="bg-white relative lg:min-w-[840px] min-w-full rounded-[20px]">
                    <button type='button' onClick={() => onDisable(false)} className="w-10 h-10 absolute top-6 right-6 flex justify-center items-center rounded-md shadow-[0px_9px_7px_rgba(202,209,220,0.2)]">
                        <img src={close} alt="Close Svg" />
                    </button>
                    {children}
                </div>
            </div>, document.querySelector("#modal-root") || document.body)
    )
};

export default Modal;