import { Button } from "../components/ui/Button";
import { useState } from 'react';
import { Icon } from '../components/ui/Icon';

export default function DashboardsWSP() {
    const [ selectable, setSelecatable ] = useState(false);

    return (
        <div className='w-[80%] self-center h-full flex flex-col gap-[10%]'>
            <h3 className='text-4xl'>
                Workspaces
            </h3>
            <div className='flex w-full gap-[10%]'>
                <div className='w-[60%]'>
                    <div className='flex gap-5 items-center'>
                        <Button>
                            <div className='flex gap-3 items-center'>
                                <Icon name='FolderPlus' />
                                New Workspace
                            </div>
                        </Button>
                        <span className='ml-auto flex gap-7 items-center'>
                            <Button type='outline' onClick={() => setSelecatable(!selectable)}>
                                {!selectable ? 'Select Workspaces' : 'Done'}
                            </Button>
                            {selectable &&
                                <div className='h-fit w-fit px-2 py-1 text-error text-xl flex items-center justify-center aspect-square rounded-sm hover:bg-trans-gray transition-all duration-[0.4s] ease-in-out'>
                                    <Icon name={'Trash'}/>
                                </div>
                            }
                        </span>
                    </div>
                </div>
                <div className='flex flex-col w-[30%]'>
                    <div className='flex flex-col gap-10'>
                        <h3 className='text-2xl'>
                            What are workspaces?
                        </h3>
                        <p>
                            Workspaces are an optional mechanism as to how <span className='text-accent font-extralight'>Pageturner</span>
                            keeps track of your PDFs. Should you choose to organise files into predefined workspaces, they persist in this apps configurations
                            and enable you to combine PDFs into different groups without changing your file sturcture and manually adding them to a directory.
                        </p>
                        <h3 className='text-2xl'>
                            More workspace options
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}