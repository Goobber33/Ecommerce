import { Bell, Sun, User } from "lucide-react";
import React from "react";

export default function Navbar() {
    return (
        <div className="">
            <div className="flex space-x-3">
                <button><Sun /></button>
                <button><Bell /></button>
                <button><User /></button>
            </div>
        </div>
    )
}