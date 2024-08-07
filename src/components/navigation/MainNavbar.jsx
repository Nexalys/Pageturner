'use client';

import { MainTab } from "@/components/navigation/MainTab";
import { HomeTab, AddTab } from "@/components/navigation/SpecialTabs";
import { useAppState } from "@/providers/AppStateProvider";

export function MainNavbar({ tabList, }) {

    return (
        <div className='h-[60px] w-fit bg-background main-navigator relative
            rounded-tr-c flex items-center px-6 py-[35px] text-base gap-5'>
            <HomeTab />
            <MainTab
                workspaceName='School PDFs'
                to={'/workspaces/1234'}
            />
            <MainTab
                workspaceName='Volunteer Work'
                to={'/workspaces/1221'}
            />
            <AddTab />
        </div>
    )
}