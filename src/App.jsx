import { HomeSidebar } from './components/dashboard/Sidebar';
import { MainNavbar } from "./components/navigation/MainNavbar.jsx";
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <>
            <HomeSidebar/>
            <section className=' w-full h-full rounded-c overflow-hidden'>
                <MainNavbar/>
                <div
                    className='bg-background h-full w-full rounded-c rounded-tl-none flex flex-col py-[5%] overflow-auto'>
                    <Outlet/>
                </div>
            </section>
        </>
    )
}

export default App
