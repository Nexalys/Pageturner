import { open } from "@tauri-apps/api/dialog";
import { homeDir } from "@tauri-apps/api/path";
import { useEffect } from "react"

export default function Open() {
    
    useEffect(() => {
        // const loadFile = async () => {
        //     const file = await invoke('open_file', {});
        //     console.log(file);
        // };
        const loadFile = async () => {
            const file = await open({
                title: "Open PDF",
                filters: [{
                    name: "PDF Document",
                    extensions: ['pdf']
                }],
                defaultPath: await homeDir()
            });
            console.log(file);
        }

        loadFile();
    }, [])

    return (
        <div className='w-[80%] self-center h-full flex flex-col gap-[10%]'>
            <h3 className='text-5xl text-center'>
                Open a new PDF tab!
            </h3>
        </div>
    )
}
