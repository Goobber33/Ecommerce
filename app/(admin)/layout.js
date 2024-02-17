import Navbar from '@/components/admin/Navbar';
import Sidebar from '@/components/admin/Sidebar';
import React from 'react';

export default function Layout({ children }) {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='w-full'>
                <Navbar />
                <main>
                    {children}
                </main>
            </div>
        </div>
    );
}