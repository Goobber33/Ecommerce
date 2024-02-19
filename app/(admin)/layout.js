import Navbar from '@/components/admin/Navbar';
import Sidebar from '@/components/admin/Sidebar';
import React from 'react';

export default function Layout({ children }) {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='w-full'>
                <Navbar />
                <main className='p-8 bg-zinc-900 text-slate-50 min-h-screen'>
                    {children}
                </main>
            </div>
        </div>
    );
}