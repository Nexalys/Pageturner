export function PDFOption({ icon, label, onClick=null }) {
    return (
        <div className='flex flex-col gap-2 items-center border-text border-[0.5px] rounded-m py-[1%] px-[2%]
        hover:scale-[1.1] hover:text-accent transition-all duration-[0.4s] ease-in-out
        hover:border-accent' onClick={onClick}>
            <span className='text-4xl'>
                {icon}
            </span>
            {label}
        </div>
    )
}