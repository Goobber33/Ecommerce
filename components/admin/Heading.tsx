import React from "react";

export default function Heading({title}: {title: string}) {
    return (
    
            <h2 className='py-8 text-2xl font-semibold text-slate-50'>{title}</h2>
    
    )
}