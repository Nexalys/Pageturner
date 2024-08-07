import { icons } from 'lucide-react';

export function Icon({ name }) {
    const LucideIcon = icons[name];

    return <LucideIcon className='h-[1.2em] w-[1.2em] stroke-ma'/>;
};