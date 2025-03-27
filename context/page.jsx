"use client"
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { createContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
// import { useRouter } from "next/router";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {

    const { status } = useSession();
    const pathName = usePathname();
    const router = useRouter();

    useEffect(() => {
        // if (status === "loading") setLoader(true);
        if (
            status === "unauthenticated" &&
            pathName.includes("/")
        ) {
            router.push("/unauth-page");
            return
            // setLoader(false);
        } else {
            router.push("/");
        }

        // if (status === "authenticated") setLoader(false);
    }, [status]);

    return (
        <GlobalContext.Provider>
            {children}
        </GlobalContext.Provider>
    );
}