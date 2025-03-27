'use client'
import { signIn } from 'next-auth/react';
import { Button } from 'primereact/button';

const UnauthPage = () => {

    const handleLoginClick = () => {
        signIn('google');
    };

    return (
        <div className={`flex flex-col justify-center items-center mt-16 text-xl`}>
            <h1>Unauthorized Access</h1>
            <p>Please sign in to access this page.</p>
            <Button
                className={`mt-4 p-3 text-white bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 focus:outline-none focus:ring focus:ring-emerald-300`}
                rounded
                onClick={handleLoginClick}>
                Sign In Using Google
            </Button>
        </div>
    )
}

export default UnauthPage
