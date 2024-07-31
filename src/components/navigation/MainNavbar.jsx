'use client';

import { MainTab } from "@/components/navigation/MainTab";
import { usePathname } from "next/navigation";

export function MainNavbar() {
    return (
        <div className='h-[6%] w-fit bg-background main-navigator relative
            rounded-tr-c flex items-center px-[1.5%] py-1.5 text-base gap-5'>
            <MainTab
                home={true}
                active={true}
            />
            <MainTab
                workspaceName='School PDFs'
            />
            <MainTab
                workspaceName='Volunteer Work'
            />
        </div>
    )
}