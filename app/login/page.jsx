'use client'
import { useSession, signIn, signOut } from "next-auth/react"

const Login = () => {

    const { data: session } = useSession();

    if (session) {
        return (
            <>
                Signed In as {session?.user?.email} <br />
                <button onClick={() => signOut()}>Sign Out</button>
            </>
        )
    } return (
        <>
            Not Signed in <br />
            <button onClick={() => signIn()}>Sign In</button>
        </>
    )
}

export default Login
