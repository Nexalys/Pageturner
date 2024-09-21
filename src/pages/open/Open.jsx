import { OptionsNav, Option } from "../../components/navigation/Options.jsx";
import { Outlet } from "react-router-dom";
import CreateWorkspace from "./CreateWorkspace"
import OpenWorkspace from "./OpenWorkspace";
import OpenFile from "./OpenFile";
import EditWorkspace from "./EditWorkspace";

export const OpenChildren = [
    {
        path: '/open/open-file',
        element: <OpenFile/>,
    },
    {
        path: '/open/open-workspace',
        element: <OpenWorkspace/>,
    },
    {
        path: '/open/create-workspace',
        element: <CreateWorkspace/>,
    },
    {
        path: '/open/edit-workspace',
        element: <EditWorkspace/>,
    },
];

export default function Open() {
    return (
        <div className='w-[60%] self-center flex flex-col gap-10 py-10'>
            <h3 className='text-5xl text-center'>
                Open a new PDF tab!
            </h3>
            <OptionsNav className='self-center'>
                <Option path='/open/open-file'>
                    Open File
                </Option>
                <Option path='/open/open-workspace'>
                    Open Workspace
                </Option>
                <Option path='/open/create-workspace'>
                    Create New Workspace
                </Option>
                <Option path='/open/edit-workspace'>
                    Edit Workspace
                </Option>
            </OptionsNav>
            <Outlet/>
        </div>
    )
}
