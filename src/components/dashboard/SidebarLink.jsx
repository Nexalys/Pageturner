'use client';

import Link from "next/link";

export function SidebarLink({ to='/', children, selected }) {
    return (
        <div className={`sidebar-link w-[90%] 
        ${selected && 'text-accent'} 
        ${!selected && 'hover:bg-accent/20 self-center'} py-1 rounded-[10px] transition duration-[0.4s] ease-in-out`}>
            <Link className={`flex gap-[6%] items-center text-base h-[3.5rem] ${selected && 'cursor-default'} ${!selected && 'px-[9.2%]'}`} href={to}>
                {selected && <div className='w-[3.2%] h-[100%] bg-accent rounded-r-full'></div>}
                {children}
            </Link>
        </div>
    )
}
