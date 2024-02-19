import { Layers } from "lucide-react";
import React from "react";

export default function LargeCard({ className }: { className: string }) {
    return (
        <div className={`rounded-lg text-white shadow-md p-8 flex items-center flex-col gap-2 ${className}`}>
            <Layers />
            <h4>
                Today&apos;s Orders
            </h4>
            <h2 className="text-3xl">
                UGX.108.12k
            </h2>
        </div>
    )
}