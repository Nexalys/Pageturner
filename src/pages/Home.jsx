import { PDFOption } from "../components/pdf/PDFOption";
import { Recents } from '../components/pdf/recents-display/Recents';
import { Icon } from '../components/ui/Icon';

export async function Loader() {
    return { hi: 'how are you' }
}

const PDFOptions = [
    {
        name: 'Compress PDF',
        icon: <Icon name='Minimize2'/>
    },
    {
        name: 'Extract Text',
        icon: <Icon name='LetterText'/>
    },
    {
        name: 'Reorder Pages',
        icon: <Icon name='Shuffle'/>
    },
    {
        name: 'Batch PDF',
        icon: <Icon name='Files' />
    },
    {
        name: 'Flatten PDFs',
        icon: <Icon name='File' />
    }
]


export default function Homepage() {
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
                    <h4 className='text-2xl'>
                        Pick up where you left off!
                    </h4>
                </div>
            </div>
        </div>
    )
}