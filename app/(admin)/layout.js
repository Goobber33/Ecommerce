import Sidebar from '@/components/admin/Sidebar';
import React from 'react';

export default function Layout({ children }) {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='w-full'>
                <h2> NavBar </h2>
                <main>
                    {children}
                </main>
            </div>
        </div>
    );
}