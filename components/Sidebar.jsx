'use client'
import Link from 'next/link';
import { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

const SidebarComponent = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div className="card flex justify-content-center items-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)}>
                <nav className=" min-h-screen">
                    <div className="py-4">
                        <Link href="/">
                            <div className="block px-4 py-4 text-xl text-black hover:bg-emerald-500 hover:text-white hover:rounded-lg">Dashboard</div>
                        </Link>
                        <Link href="/users/page">
                            <div className="block px-4 py-4 text-xl text-black hover:bg-emerald-500 hover:text-white hover:rounded-lg">Users</div>
                        </Link>
                        <Link href="/products/page">
                            <div className="block px-4 py-4 text-xl text-black hover:bg-emerald-500 hover:text-white hover:rounded-lg">Products</div>
                        </Link>
                        <Link href="/orders">
                            <div className="block px-4 py-4 text-xl text-black hover:bg-emerald-500 hover:text-white hover:rounded-lg">Orders</div>
                        </Link>
                        <Link href="/settings/page">
                            <div className="block px-4 py-4 text-xl text-black hover:bg-emerald-500 hover:text-white hover:rounded-lg">Settings</div>
                        </Link>
                    </div>
                </nav>
            </Sidebar>
            <div className="font-size: 1.5rem">
                <Button icon="pi pi-bars" onClick={() => setVisible(true)} />
            </div>
        </div>
    )
}

export default SidebarComponent;
