import { MainTab } from "./MainTab";
import { HomeTab, AddTab } from "./SpecialTabs";
import { useAppState } from "../../providers/AppStateProvider";
import { useEffect } from "react";

export function MainNavbar({ tabList, }) {
    const { tabs } = useAppState((state) => state)

    useEffect(() => {
        window.addEventListener('keydown',async (event) => {
            event.stopPropagation();
            if (event.key === "t") {
                console.log(event);
                alert('Hi!');
            }
        });

        return () => {
            window.removeEventListener('keydown',  () => {})
        }
    }, []);

    return (
        <div className='h-[60px] w-fit bg-background main-navigator relative
            rounded-tr-c flex items-center px-6 py-[35px] text-base gap-5'>
            <HomeTab />
            {tabs &&
                tabs.map((tab, ind) => <MainTab
                    key={ind}
                    to={`/workspaces/${tab.id}`}
                    workspaceName={tab.name}
                />)
            }
            <AddTab />
        </div>
    )
}