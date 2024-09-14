import { icons } from 'lucide-react';

export function Icon(props) {
    const LucideIcon = icons[props.name];

    return <LucideIcon {...props} className={`h-[1.2em] w-[1.2em] stroke-ma ${props.className}`} />;
}