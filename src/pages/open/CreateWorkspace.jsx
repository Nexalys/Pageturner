import { Link } from 'react-router-dom';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { Icon } from '../../components/ui/Icon';
import { open } from '@tauri-apps/api/dialog';
import {useState} from "react";

export default function CreateWorkspace() {
    const [ entries, setEntries ] = useState([]);

    const creatWorkspaceReducer = (state, action) => {
        switch (action.type) {
            case 'adding_files':
                return [
                    ...state,
                    ...action.newEntries,
                ];
            case 'removing_files':
                return [

                ]
        }
    }

    return (
        <div className='flex flex-col gap-10'>
            <div>
                <h3 className='text-3xl mb-5'>Create Workspace</h3>
                <p className='text-sm'>
                    This page is where you can enter the required information to make a new workspace.
                    <br/>
                    You can <Link to='/open/edit-workspace' className='text-accent'>edit your existing workspaces
                    here!</Link>
                </p>
            </div>
            <div>
                <div className='flex w-full justify-between'>
                    <Input label='New Workspace Name' className='w-full'/>
                </div>
                <div className='flex flex-col gap-5'>
                    {entries.length > 0 && <div className='flex flex-col gap-5 bg-primary rounded-lg p-5'>
                        <h5 className='text-xl text-accent'>Added Files/Directories:</h5>
                        {
                            entries.map((entry) => (
                                <div key={entry.path} className='py-2 px-10 rounded-md items-center
                                gap-5 text-2xl flex hover:bg-background transition duration-[0.4s]'>
                                    {entry.isDirectory ? <Icon name='Folder'/> : <Icon name='File'/>}
                                    <div className='flex flex-col gap-1'>
                                        <h5 className='text-xl'
                                            onClick={(e) => e.target.contentEditable = true}

                                        >
                                            {entry.name}
                                        </h5>
                                        <span className='text-sm'>
                                            {entry.path}
                                        </span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>}
                    <div className='flex w-full justify-between'>
                        <Button
                            type='outline'
                            className='flex gap-4 items-center justify-center opacity-70 w-[47%] h-[50px]'
                            onClick={async () => {
                                const files = await open({
                                    multiple: true,
                                    filters: [{
                                        name: 'pdf',
                                        extensions: ['pdf']
                                    }]
                                });

                                const newEntries = files.map((file) => {
                                    return {
                                        path: file,
                                        name: file.split('/').at(-1),
                                        isDirectory: false,
                                    }
                                });

                                setEntries([
                                    ...entries,
                                    ...newEntries
                                ]);
                            }}
                        >
                            <Icon name='FilePlus'/>
                            Add new file/directory to Workspace
                        </Button>
                        <Button
                            type='outline'
                            className='flex gap-4 items-center justify-center opacity-70 w-[47%] h-[50px]'
                            onClick={async () => {
                                const files = await open({
                                    multiple: true,
                                    directory: true,
                                });

                                const newEntries = files.map((file) => {
                                    return {
                                        path: file,
                                        name: file.split('/').at(-1),
                                        isDirectory: true,
                                    }
                                });

                                setEntries([
                                    ...entries,
                                    ...newEntries
                                ]);
                            }}
                        >
                            <Icon name='FolderPlus'/>
                            Add new file/directory to Workspace
                        </Button>
                    </div>
                    <Button className='text-xl py-7 w-full'>
                        Create new workspace
                    </Button>
                </div>
            </div>
        </div>
    );
}