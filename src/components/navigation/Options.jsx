import { Link, useLocation } from "react-router-dom";

export function Option(props) {
    const selected = (useLocation().pathname === props.path);

    return (
        <span {...props} className={`${props.className} ${selected && 'bg-accent text-onAccent'} ${!selected && 'hover:bg-primary'} transition duration-[0.4s] 
        w-fit rounded-full`}>
            <Link to={props.path} className='px-10 py-3 h-full w-full flex justify-center items-center'>
                {props.children}
            </Link>
        </span>
    );
}

export function OptionsNav(props) {
    return (
        <div className={`flex h-[80px] bg-primary/50 rounded-full w-fit ${props.className}`}>
            {props.children}
        </div>
    );
}