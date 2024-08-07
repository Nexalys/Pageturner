'use client';

import { usePathname } from "next/navigation";
import { Icon } from '@/components/ui/Icon';
import Link from "next/link";

export function MainTab({ workspaceName, to }) {
    const path = usePathname();

    const active = path === to;
    return (
        <Link href={to}>
            <div className={`hover:text-accent ${active && "bg-trans-gray text-accent"} transition duration-[0.4s] ease-in-out
            h-fit w=fit px-5 py-3 rounded-full flex items-center justify-center`}>
                {workspaceName}
            </div>
        </Link>
    )
}