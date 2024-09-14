import { Icon } from '..//ui/Icon';
import { useLocation, Link } from "react-router-dom";

export function HomeTab() {
    const path = useLocation().pathname;
    const active = path === '/';

    return (
        <Link to='/'>
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
            <Link to='/open'>
                <Icon name='Plus'/>
            </Link>
        </div>
    )
}