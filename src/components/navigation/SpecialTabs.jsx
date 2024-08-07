'use client';

import { Icon } from '@/components/ui/Icon';
import { usePathname } from "next/navigation";
import Link from "next/link";

export function HomeTab() {
    const path = usePathname();
    const active = path === '/';

    return (
        <Link href='/'>
            <div className={`hover:text-accent ${active && "bg-trans-gray text-accent"} transition duration-[0.4s] ease-in-out
            h-fit w=fit px-5 py-3 rounded-full flex items-center justify-center`}>
                <Icon name='LayoutDashboard' />
            </div>
        </Link>
    )
}

export function AddTab() {
    return (
        <div className='flex items-center justify-center h-fit p-3 rounded-sm w-fit absolute left-full ml-4 z-[2] text-text-sc hover:bg-trans-gray
            transition-all duration-[0.4s] ease-in-out text-xl'>
            <Link href='/open'>
                <Icon name='Plus'/>
            </Link>
        </div>
    )
}