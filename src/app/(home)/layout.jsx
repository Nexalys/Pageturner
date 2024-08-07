import { MainNavbar } from "@/components/navigation/MainNavbar";
import { HomeSidebar } from "@/components/dashboard/Sidebar";

export default function RootLayout({ children }) {
    return (
        <main className='bg-primary h-[100vh] flex py-[1%] pr-[1%]'>
            <HomeSidebar/>
            <section className=' w-full h-full rounded-c overflow-hidden'>
                <MainNavbar/>
                <div className='bg-background h-full w-full rounded-c rounded-tl-none flex flex-col py-[5%] overflow-auto'>
                    {children}
                </div>
            </section>
    </main>
    );
}
