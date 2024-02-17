import React from 'react';

export default function Layout({ children }) {
    return (
        <div className='flex'>

            <div className=''>
                Sidebar
            </div>

            <div className=''>

                <h2>
                    NavBar
                </h2>

                <main>
                    {children}
                </main>

            </div>

        </div>
    );
}