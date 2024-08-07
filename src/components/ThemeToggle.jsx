'use client';

import { useTheme } from "next-themes";
import { useEffect } from "react";
import { Dropdown, Option } from "@/components/ui/Dropdown";
import {Icon} from "@/components/ui/Icon";

export function ThemeToggle() {
    const { theme, resolvedTheme, setTheme } = useTheme();

    useEffect(() => {
        setTheme('system')
    }, []);

    return (
        <div className='absolute top-[2.4%] right-[3%]
         h-10 aspect-square flex justify-center items-center'>
            <Dropdown label={'hello'} buttonType='outline' icon={resolvedTheme === 'dark' ?
                            <Icon name='Moon'/> :
                            <Icon name='Sun'/>}
                      title={'Theme Toggle'}
            >
                <Option
                    onClick={() => setTheme('light')}
                    selected={theme === 'light'}>
                    <Icon name='Sun'/>
                    Light
                </Option>
                <Option
                    onClick={() => setTheme('dark')}
                    selected={theme === 'dark'}>
                    <Icon name='Moon'/>
                    Dark
                </Option>
                <Option
                    onClick={() => setTheme('system')}
                    selected={theme === 'system'}>
                    <Icon name='MonitorCog'/>
                    System
                </Option>
            </Dropdown>
        </div>

    )
}