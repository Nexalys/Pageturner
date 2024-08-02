import { PDFOption } from "@/components/pdf/PDFOption";
import { Recents } from '@/components/pdf/recents-display/Recents';

const PDFOptions = [
    {
        name: 'Compress PDF',
        icon: <i className="fa-solid fa-minimize"></i>
    },
    {
        name: 'Extract Text',
        icon: <i className="fa-regular fa-file-lines"></i>
    },
    {
        name: 'Reorder Pages',
        icon: <i className="fa-solid fa-rotate"></i>
    },
    {
        name: 'Batch PDF',
        icon: <i className="fa-solid fa-layer-group"></i>
    },
    {
        name: 'Flatten PDFs',
        icon: <i className= "fa-regular fa-file-pdf" ></i>
    }
]


export default function Page() {
    return (
      <div className='w-[80%] self-center h-full flex flex-col gap-[10%]'>
        <h3 className='text-2xl'>
            PDF Tools
        </h3>
        <div className='flex w-full justify-between'>
            {PDFOptions.map((option, ind) => (<PDFOption
                label={option.name}
                key={ind}
                icon={option.icon}
            />))}
        </div>
        <div className='flex gap-[10%]'>
            <Recents />
            <div>
                <h3 className='text-2xl'>
                    Pick up where you left off!
                </h3>
            </div>
        </div>
      </div>
    )
}