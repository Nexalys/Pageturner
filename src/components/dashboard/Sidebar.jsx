'use client';

import Link from "next/link";
import { SidebarLink } from "@/components/dashboard/SidebarLink";
import { usePathname } from "next/navigation";
import {path} from "@tauri-apps/api";

export function HomeSidebar() {
    const pathname = usePathname();
    console.log(pathname);

    return (
        <section className='h-full w-[25%] flex flex-col justify-center relative top-[-4%]'>
            <Link href={'/'}>
                <h1 className='mx-10 my-7 text-3xl font-semibold py-[10%] text-accent'>
                    Pageturner
                </h1>
            </Link>
            <div className='flex flex-col gap-5 h-[70%]'>
                <SidebarLink to='/' selected={pathname === '/'}>
                    <i className="fa-solid fa-cubes"></i>
                    Dashboard
                </SidebarLink>
                <SidebarLink to='/dashboard-wsp' selected={pathname === '/dashboard-wsp'}>
                    <i className="fa-solid fa-briefcase"></i>
                    Workspaces
                </SidebarLink>
                <SidebarLink to='/open' selected={pathname === '/open'}>
                    <i className="fa-regular fa-folder-open"></i>
                    Open
                </SidebarLink>
                <div className='mt-auto'></div>
                <hr className='w-[80%] h-[0.5px] border-accent self-center'/>
                <SidebarLink to='/settings' selected={pathname === '/settings'}>
                    <i className="fa-solid fa-gear"></i>
                    Settings
                </SidebarLink>
                <SidebarLink to='/help' selected={pathname === '/help'}>
                    <i className="fa-solid fa-circle-info"></i>
                    Help
                </SidebarLink>
            </div>
        </section>
    )
}