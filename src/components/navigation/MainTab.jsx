import { usePathname } from "next/navigation";
import Link from "next/link";

export function MainTab({ workspaceName, home=false, to }) {
    const path = usePathname();

    const active = path === to;
    return (
        <Link href={to}>
            <div className={`hover:text-accent ${active && "bg-accent/20 text-accent"} 
        ${home && "text-[1.2rem] aspect-square"} transition duration-[0.4s] ease-in-out
        rounded-sm h-[80%] flex items-center justify-center px-3`}>
                {home ?
                    <i className="fa-solid fa-house"></i> :
                    workspaceName
                }
            </div>
        </Link>

    )
}