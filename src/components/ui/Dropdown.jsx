'use client';

import { useState, useEffect } from "react";
import { Button } from '@/components/ui/Button';


function OptionGroup({ children }) {
    return (
        <div className='border-b-[0.5px] p-1 border-text flex flex-col gap-3'>
            {children}
        </div>
    );
}

function Option(props) {
    return (
        <div className="option whitespace-nowrap hover:bg-accent/20 px-5 py-2 rounded-sm flex gap-5 items-center relative" {...props}>
            {props?.selected && <span className='absolute left-[-1px] flex items-center'>
                <i className="fa-solid fa-grip-lines-vertical text-gray-400"></i>
            </span>}
            {props.children}
        </div>
    );
}

function Dropdown({ children, trigger, icon, title, buttonType }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseLeaveDropdown = (e) => {
        e.preventDefault();
        setTimeout(() => setIsOpen(false),400);
    }

    return (
        <div className="dropdown relative left-0 right-0 m-auto w-fit">
            <Button onClick={() => setIsOpen(!isOpen)} type={'outline'}>
                {icon}
                {trigger}
            </Button>
            {isOpen && <div className="dropdown-content rounded-m mt-2 h-fit w-fit bg-primary border-text border-[1px]
            absolute right-0 m-auto p-[20px] flex flex-col"
            onMouseLeave={(e) => handleMouseLeaveDropdown(e)}>
                {title && <div className='font-semibold text-xl text-center border-b-2 border-text'>
                    {title}
                </div>}
                {children}
            </div>}
        </div>
    );
}

export { Option, OptionGroup, Dropdown };