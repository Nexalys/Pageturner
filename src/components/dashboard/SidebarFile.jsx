import { useRef } from "react";


export function SidebarFile({ path }) {
    const pathElements = path.split('/');
    const fileElement = useRef(null);

    const file = pathElements.at(-1);

    return (
        <div className='relative group w-full flex justify-center'>
            {fileElement.current?.clientWidth < fileElement.current?.scrollWidth &&
                <span className='group-hover:inline hidden absolute left-[100%] w-[100%] bg-primary'>
                    {file}
                </span>
            }
            <div className='w-[80%] overflow-hidden text-ellipsis whitespace-nowrap py-1 px-2 hover:bg-background rounded-sm' ref={fileElement}>
                {file}
            </div>
        </div>
    )
}