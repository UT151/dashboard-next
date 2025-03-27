"use client"

import { useRef } from 'react'
import { Menubar } from 'primereact/menubar';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Menu } from 'primereact/menu';
import SidebarComponent from './Sidebar';
import { signIn, useSession, signOut } from 'next-auth/react';

const Header = () => {

    let overlayPanelRef = useRef(null);

    const { status, data: session } = useSession();
    console.log(status);

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        },
        {
            label: 'Features',
            icon: 'pi pi-star'
        },
        {
            label: 'Projects',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Components',
                    icon: 'pi pi-bolt'
                },
                {
                    label: 'Blocks',
                    icon: 'pi pi-server'
                },
                {
                    label: 'UI Kit',
                    icon: 'pi pi-pencil'
                },
                {
                    label: 'Templates',
                    icon: 'pi pi-palette',
                    items: [
                        {
                            label: 'Apollo',
                            icon: 'pi pi-palette'
                        },
                        {
                            label: 'Ultima',
                            icon: 'pi pi-palette'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope'
        }
    ];

    const handleLogout = () => {
        signOut();
    };

    const list = [
        {
            label: 'Profile',
            icon: 'pi pi-user',
            command: () => {
                // Handle profile click
            },
        },
        {
            label: 'Settings',
            icon: 'pi pi-cog',
            command: () => {
                // Handle settings click
            },
        },
        {
            separator: true,
        },
        {
            label: status === "authenticated" ? "Logout" : "Login",
            icon: 'pi pi-power-off',
            command: handleLogout,
        },
    ];

    return (
        <div className={`flex justify-between align-middle items-center px-4 w-full bg-white shadow-lg`}>
            <div className="flex align-middle justify-center gap-3">
                <SidebarComponent />
                <div className='text-2xl font-medium cursor-pointer'>
                    <h1 className='text-emerald-700'>Dashboard</h1>
                </div>
            </div>
            <Menubar model={items}
                className={`px-16 gap-16 flex justify-center items-center w-full bg-white`}
            />
            {/* <Button
                label={status === "authenticated" ? "Logout" : "Login"}
                className={`pr-6`}
                onClick={(e) => {
                    e.preventDefault();
                    status === "authenticated" ? signOut() : signIn("google")
                }
                }
            /> */}
            {session?.user ? (
                <Avatar
                    // image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                    image={session.user.image}
                    size="large"
                    shape="circle"
                    onClick={(e) => overlayPanelRef.current.toggle(e)}
                />
            ) : (
                <Avatar
                    icon="pi pi-user"
                    className={`p-6`}
                    size="normal"
                    shape="circle"
                // onClick={(e) => overlayPanelRef.current.toggle(e)}
                />
            )}
            <OverlayPanel ref={overlayPanelRef} dismissable={true}>
                <Menu model={list} />
            </OverlayPanel>
        </div>
    )
}

export default Header
