export function PDFOption({ icon, label, onClick=null }) {
    return (
        <div className='flex flex-col gap-4 items-center border-text border-[0.5px] rounded-m py-8 px-10
        hover:scale-[1.1] hover:text-accent transition-all duration-[0.4s] ease-in-out justify-center
        hover:border-accent' onClick={onClick}>
            <span className='text-4xl'>
                {icon}
            </span>
            {label}
        </div>
    )
}