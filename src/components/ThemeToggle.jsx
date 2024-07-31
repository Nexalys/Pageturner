'use client';

import { useTheme } from "next-themes";
import { useEffect } from "react";
import { Dropdown, Option } from "@/components/ui/Dropdown";

export function ThemeToggle() {
    const { theme, resolvedTheme, setTheme } = useTheme();

    useEffect(() => {
        setTheme('system')
    }, []);

    return (
        <div className='absolute top-[2.4%] right-[3%]
         h-10 aspect-square flex justify-center items-center'>
            <Dropdown label={'hello'} buttonType='outline' icon={resolvedTheme === 'dark' ?
                            <i className="fa-regular fa-moon"></i> :
                            <i className="fa-regular fa-sun"></i>}
            >
                <Option
                    onClick={() => setTheme('light')}
                    selected={theme === 'light'}>
                    <i className="fa-regular fa-sun"/>
                    Light
                </Option>
                <Option
                    onClick={() => setTheme('dark')}
                    selected={theme === 'dark'}>
                    <i className="fa-regular fa-moon"/>
                    Dark
                </Option>
                <Option
                    onClick={() => setTheme('system')}
                    selected={theme === 'system'}>
                    <i className="fa-regular fa-gear"/>
                    System
                </Option>
            </Dropdown>
        </div>

    )
}