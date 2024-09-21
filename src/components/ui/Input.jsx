import { useState } from "react";

export function Input(props) {
    const [focused, setFocused] = useState(false);
    const [display, setDisplay] = useState(true);

    return (
        <div className={`relative my-9 ${props.className}`}>
            <span
                className={`${display && 'inline'} ${!display && 'hidden'} 
                absolute py-3 px-5 opacity-40 pointer-events-none transition-all duration-[0.4%] 
                ${focused && 'opacity-100 -translate-y-[90%] text-sm'}`}>
                {props.label}
                {focused && ':'}
            </span>
            <input {...props}
                   className='bg-primary py-3 px-5 focus:outline-none rounded-sm w-full'
                   onFocus={() => {
                       setDisplay(true);
                       setFocused(true);
                   }}
                   onBlur={(e) => {
                       if (!e.target.value)
                           setFocused(false);
                       else
                           setDisplay(false);
                   }}
            />
        </div>
    );
}