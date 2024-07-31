import { PDFOption } from "@/components/pdf/PDFOption";

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
        icon: <i class = "fa-regular fa-file-pdf" > </i>
    }
]


export default function Page() {
    return (
      <div className='w-full h-full py-[5%] px-[5%] flex flex-col gap-10'>
        <h3 className='text-2xl'>
            PDF Tools
        </h3>
        <div className='flex w-full justify-around'>
            {PDFOptions.map((option, ind) => (<PDFOption
                label={option.name}
                key={ind}
                icon={option.icon}
            />))}
        </div>
      </div>
  )
}