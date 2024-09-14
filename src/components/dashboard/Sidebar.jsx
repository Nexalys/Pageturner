import { Link } from "react-router-dom";
import { SidebarLink } from "./SidebarLink";
import { Icon } from '../ui/Icon';

export function HomeSidebar() {
    return (
        <>
            <section className='h-full w-[25%] flex flex-col justify-center relative top-[-4%]'>
                <Link to={'/'}>
                    <h1 className='text-center text-5xl font-light my-7 py-[10%] text-accent'>
                        Pageturner
                    </h1>
                </Link>
                <div className='flex flex-col gap-5 h-[70%] text-[1.1rem]'>
                    <SidebarLink to='/'>
                        <Icon name='LayoutDashboard'/>
                        Dashboard
                    </SidebarLink>
                    <SidebarLink to='/dashboard-wsp'>
                        <Icon name='BookOpen'/>
                        Workspaces
                    </SidebarLink>
                    <SidebarLink to='/open'>
                        <Icon name='FolderOpen'/>
                        Open
                    </SidebarLink>
                    <div className='mt-auto'></div>
                    <hr className='w-[80%] h-[0.5px] border-accent self-center'/>
                    <SidebarLink to='/settings'>
                        <Icon name='SlidersHorizontal'/>
                        Settings
                    </SidebarLink>
                    <SidebarLink to='/help'>
                        <Icon name='Info'/>
                        Help
                    </SidebarLink>
                </div>
            </section>
        </>
    )
}