import React from 'react'

type Props = {
    bgColor?: string;
    type?: string;
    children?: React.ReactNode;
    width?: string,
    padding: string;
    rounded: string,
    shadow?: string,
    border?: string,
    onClick?:() => void;
}

const Button: React.FC<Props> = ({ bgColor, children, padding, rounded, shadow, width, type,border,onClick }) => {
    return (
        <button
            style={{
                backgroundColor: bgColor,
                padding,
                borderRadius: rounded,
                width: width,
                boxShadow: shadow,
                border
            }}
            onClick={onClick}
            type={type ? "submit" : "button"}
            className='rounded flex justify-center items-center'
        >
            {children}
        </button>
    )
}

export default Button;