import {Link} from "react-router-dom";
import { useLocation } from "react-router-dom";

export function SidebarLink({ to='/', children }) {
    const path = useLocation().pathname;
    const active = to === path;

    return (
        <div className={`sidebar-link w-[90%] 
        ${active && 'text-accent'} 
        ${!active && 'hover:bg-accent/20 self-center'} py-1 rounded-[10px] transition duration-[0.4s] ease-in-out`}>
            <Link className={`flex gap-[6%] items-center text-base h-[3.5rem] ${active && 'cursor-default'} ${!active && 'px-[9.2%]'}`} to={to}>
                {active && <div className='w-[3.2%] h-[100%] bg-accent rounded-r-full'></div>}
                {children}
            </Link>
        </div>
    )
}
