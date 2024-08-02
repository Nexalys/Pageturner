'use client';

import { useState } from "react";
import { Button } from '@/components/ui/Button';

function DropdownSeperator() {
    return (
        <hr className='w-full border-text border-[0.5px] my-4'/>
    )
}

function OptionGroup({ children }) {
    return (
        <div className='dropdown-option-group'>
            {children}
        </div>
    );
}

function Option(props) {
    return (
        <div className="option whitespace-nowrap hover:bg-trans-gray px-5 py-2 rounded-sm flex gap-5 items-center relative" {...props}>
            {props?.selected && <span className='absolute left-[-1px] flex items-center'>
                <i className="fa-solid fa-grip-lines-vertical text-gray-400"></i>
            </span>}
            {props.children}
        </div>
    );
}

function Dropdown({ children, trigger, icon, title, buttonType }) {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState('bottom');

    const positionStyle = {
        'bottom': "dropdown-content rounded-sm mt-2 h-fit w-fit bg-primary border-text border-[1px] min-w-[200px] absolute right-0 m-auto p-[20px] flex flex-col z-[2]",
        "top": "dropdown-content rounded-sm mt-2 h-fit w-fit bg-primary border-text border-[1px] min-w-[200px] absolute right-[100%] bottom-[100%] m-auto p-[20px] flex flex-col z-[2]"
    }

    let onDropdown = false;

    const handleMouseLeaveDropdown = (e) => {
        e.preventDefault();
        setTimeout(() => setIsOpen(false),400);
    }

    const handleLeaveButton = (e) => {
        e.preventDefault();
        setTimeout(() => {
            if (!onDropdown) {
                setIsOpen(false)
            }
        }, 350)
    }

    const handleMouseEnterDropdown = (e) => {
        e.preventDefault();
        onDropdown = true;
    }

    const handleButtonClick = (e) => {
        e.preventDefault();
        console.log(e.target.clientHeight, window.innerHeight)
        if ((e.clientY + e.target.clientHeight) > 0.7*window.innerHeight) {
            setPosition('top');
        } else {
            setPosition('bottom');
        }
        setIsOpen(true);
    }

    return (
        <div className="dropdown relative left-0 right-0 m-auto w-fit">
            <Button onClick={(e) => handleButtonClick(e)} type={buttonType} onMouseLeave={(e) => handleLeaveButton(e)}>
                {icon}
                {trigger}
            </Button>
            {isOpen && <div className={positionStyle[position]}
            onMouseLeave={(e) => handleMouseLeaveDropdown(e)}
            onMouseEnter={(e) => handleMouseEnterDropdown(e)}>
                {title && <div className='font-extralight text-center text-text-sc  text-sm'>
                    {title}
                </div>}
                {children}
            </div>}
        </div>
    );
}

export { Option, OptionGroup, Dropdown, DropdownSeperator };