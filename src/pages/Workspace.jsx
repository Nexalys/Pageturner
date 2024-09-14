import {Outlet, useLoaderData} from "react-router-dom";
import { readDir } from "@tauri-apps/api/fs";
import { useAppState } from "../providers/AppStateProvider.jsx";
import { useEffect, useState } from "react";
import { FileSidebar } from "../components/dashboard/FileSidebar.jsx";
import { MainNavbar } from "../components/navigation/MainNavbar.jsx";

export function workspaceLoader({ params }) {
    const { id } = params
    return id;
}

export default function Workspace() {
    const id = useLoaderData();
    const { tabs } = useAppState();

    const [ files, setFiles ] = useState([]);
    const selectedTab = tabs.find((tab) => tab.id === id);

    useEffect(() => {
        if (selectedTab) {
            const { directory } = selectedTab;
            const getFiles = async () => {
                const entries = await readDir(directory, { recursive: true });
                setFiles(entries);
            };
            getFiles().then();
        }
    }, [id, tabs]);

    return (
        <>
            <FileSidebar name={selectedTab.name} files={files}/>
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