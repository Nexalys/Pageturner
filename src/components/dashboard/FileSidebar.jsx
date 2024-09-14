import {SidebarFile} from "./SidebarFile.jsx";

export function FileSidebar({ name, files }) {
    return (
        <section className='h-full w-[25%] flex flex-col justify-center relative top-[-4%]'>
            <h1 className='text-center text-5xl font-light my-7 py-[10%] text-accent'>
                {name}
            </h1>
            <div className='flex flex-col gap-5 self-center w-full'>
                {files.map((file, ind) => (
                    <SidebarFile path={file.path} key={ind} />
                ))}
            </div>

        </section>
    )
}
