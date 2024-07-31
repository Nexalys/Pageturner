export function PDFOption({ icon, label, onClick=null }) {
    return (
        <div className='flex flex-col gap-2 items-center border-text border-[0.5px] rounded-m py-[1%] px-[2%]' onClick={onClick}>
            <span className='text-4xl'>
                {icon}
            </span>
            {label}
        </div>
    )
}