import Navbar from '@/components/admin/Navbar';
import Sidebar from '@/components/admin/Sidebar';
import React from 'react';

export default function Layout({ children }) {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='w-full'>
                <Navbar />
                <main className='ml-60 p-8 bg-gray-900 text-slate-50 min-h-screen mt-16'>
                    {children}
                </main>
            </div>
        </div>
    );
}