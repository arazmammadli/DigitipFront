import React from 'react';
import { SignIn } from '../../components';
import { Navbar } from "../../components/ui/navbar/Navbar";

type Props = {}

const Login: React.FC<Props> = (props: Props) => {

    return (
        <>
            <header className='w-full shadow-[0_9px_7px_rgba(202,209,220,0.2)] border border-solid border-[#e8e8ea]'>
                <Navbar />
            </header>
            <main className='bg-[#f4f4f4] '>
                <SignIn />
            </main>
        </>
    )
};

export default Login;