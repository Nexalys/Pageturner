import { useRef } from "react";


export function SidebarFile({ path }) {
    const pathElements = path.split('/');
    const fileElement = useRef(null);

    const file = pathElements.at(-1);

    return (
        <div className='relative group w-full flex justify-center'>
            <div className='w-[80%] overflow-hidden text-ellipsis whitespace-nowrap py-1 px-2 hover:bg-background rounded-sm' ref={fileElement}>
                {file}
            </div>
            {fileElement.current?.clientWidth < fileElement.current?.scrollWidth &&
                <span className='group-hover:inline group-hover:scale-90 group-hover:visible group-hover:opacity-100
                 invisible absolute left-[103%] w-[100%] bg-primary scale-75 transition-all duration-[0.2s] ease-in-out opacity-0
                 rounded-sm p-4 top-0 bottom-0 my-auto h-fit
                 before:h-[20px] before:w-[20px] before:bg-primary before:rounded-sm before:absolute before:right-[calc(100%-10px)] before:rotate-45
                 before:top-0 before:bottom-0 before:my-auto'>
                    {file}
                </span>
            }
        </div>
    )
}