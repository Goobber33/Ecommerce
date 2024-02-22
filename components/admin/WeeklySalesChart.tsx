"use client";

import React, { useState } from "react";

export default function WeeklySalesChart() {

    const tabs = [
        {
            title: 'Sales',
            type: 'sales'
        },
        {
            title: 'Orders',
            type: 'orders'
        },
    ]

    const [chartToDisplay, setChartToDisplay] = useState('sales')

    return (
        <div className="bg-slate-700 p-8 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Best Selling Charts</h2>
            <div className="p-4">


                <div className="text-sm font-medium text-center text-gray-200 border-b border-gray-400 dark:text-gray-400 dark:border-gray-700 ">
                    <ul className="flex flex-wrap -mb-px">

                        {
                            tabs.map((tab, i) => {
                                return (
                                    <li key={i} className="me-2">
                                        <button key={i} onClick={()=>setChartToDisplay(tab.type)} className={chartToDisplay == tab.type ? "inline-block p-4 text-orange-600 border-b-2 border-orange-600 rounded-t-lg active dark:text-orange-500 dark:border-orange-500" : "inline-block p-4 border-b-2 text-gray-200 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}>
                                            {tab.title}
                                        </button>
                                    </li>
                                )
                            })
                        }

                        
                    </ul>
                </div>

                <h2>Sales Chart</h2>

            </div>
        </div>
    )
}