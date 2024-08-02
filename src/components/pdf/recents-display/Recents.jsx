'use client';

import { useState } from "react";
import { Listview } from "@/components/pdf/recents-display/Listview";
import { Gridview } from "@/components/pdf/recents-display/Gridview";

const views = Object.freeze({
    List: 0,
    Grid: 1
});

const files = [
    {
        file: 'Filename.pdf',
        path: 'path/to/filename.pdf',
        isWorkspace: false,
    },
    {
        file: 'Another File.pdf',
        path: 'path/to/Another File.pdf',
        isWorkspace: false,
    },
    {
        file: 'Another File.pdf',
        path: 'path/to/Another File.pdf',
        isWorkspace: false,
    },
    {
        file: 'Another File.pdf',
        path: 'path/to/Another File.pdf',
        isWorkspace: false,
    },
    {
        file: 'Another File.pdf',
        path: 'path/to/Another File.pdf',
        isWorkspace: false,
    },
    {
        file: 'Workspace.pdf',
        path: null,
        isWorkspace: true,
    },
    {
        file: 'Workspace.pdf',
        path: null,
        isWorkspace: true,
    },
    {
        file: 'Workspace.pdf',
        path: null,
        isWorkspace: true,
    },
    {
        file: 'Workspace.pdf',
        path: null,
        isWorkspace: true,
    },
    {
        file: 'Another File.pdf',
        path: 'path/to/Another File.pdf',
        isWorkspace: false,
    },
    {
        file: 'Another File.pdf',
        path: 'path/to/Another File.pdf',
        isWorkspace: false,
    },
    {
        file: 'Workspace.pdf',
        path: null,
        isWorkspace: true,
    },
];

export function Recents() {
    const [view, setView] = useState(views.List);

    const toggleView = () => {
        setView(view === views.List ? views.Grid : views.List);
    };

    if (files) {
        return (
            <div className='flex flex-col w-[50%] gap-10'>
                <div className='flex items-center w-full text-[1.3rem]'>
                    <h3 className='text-2xl mr-auto'>
                        Recents
                    </h3>
                    <div className='flex gap-5'>
                        <div
                            className='flex items-center justify-center w-fit aspect-square p-2 hover:bg-gray-400/20 rounded-sm transition-[background-color] duration-[0.4s] ease-in-out'
                            onClick={toggleView}
                        >
                            {view === views.List ? (
                                <i className="fa-solid fa-list-ul"></i>
                            ) : (
                                <i className="fa-solid fa-grip"></i>
                            )}
                        </div>
                    </div>
                </div>
                {view === views.List && <Listview files={files}/>}
                {view === views.Grid && <Gridview files={files}/>}
            </div>
        );
    } else {
        return (
            <div className='flex flex-col w-[50%] gap-10 justify-center'>
                    <h3 className='text-2xl mr-auto'>
                        Recents
                    </h3>
                    <h4 className='text-4xl font-extralight text-center w-[70%] self-center bg-trans-gray relative top-[40%]
                    rounded-sm border-dashed border-[2px] border-text-sc p-4 text-text-sc'>
                        You have no recent files!
                    </h4>
            </div>
        )
    }

}
