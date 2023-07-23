import React from "react";

import { HiOutlineTruck } from 'react-icons/hi';

const Impact = () => {
    return <section id="impact" className="section">
        <div className="container mx-auto">
            <div className="flex flex-col">
                <div className="flex flex-row gap-x-5 items-center">
                    <h1 className="h1 text-[170px]">Lorem ipsum</h1>
                    <HiOutlineTruck className="text-[190px]"/>
                </div>
                <div className="flex flex-row gap-x-5 items-center">
                    <HiOutlineTruck className="text-[170px]"/>
                    <h1 className="h1  text-[160px]">sit ameter de</h1>
                </div>
                <div className="flex flex-row gap-x-5">
                    <h1 className="h1 text-[160px]">consec</h1>
                    <HiOutlineTruck className="text-[160px]"/>
                    <h1 className="h1 text-[160px]">turis..</h1>
                </div>
                
            </div>
        </div>
    </section>
}

export default Impact;