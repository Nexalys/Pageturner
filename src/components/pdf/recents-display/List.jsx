import {
    Dropdown,
    Option,
    OptionGroup,
    DropdownSeperator
} from "@/components/ui/Dropdown";
import { Icon } from '@/components/ui/Icon';

export function ListElement({ filename, pathname, isWorkspace }) {
    return (
        <div className='flex gap-5 items-center w-full rounded-m hover:bg-trans-gray py-4 px-5
        transition-all duration-[0.4s] ease-in-out border-text border-[0.5px]'>
            {!isWorkspace ?
                <Icon name='FileInput'/> :
                <Icon name='BookOpen'/>
            }
            {filename}
            <div className='ml-auto text-sm flex gap-4 items-center'>
                {!isWorkspace && pathname}
                {isWorkspace && 'Workspace'}
                <Dropdown buttonType='gray-ghost' icon={<Icon name='EllipsisVertical'/>}>
                    <OptionGroup>
                        <Option>
                            <Icon name='FolderOpen' />
                            Open {isWorkspace ? 'Workspace' : 'File'}
                        </Option>
                        <Option>
                            <Icon name='FolderPlus' />
                            Add to workspace
                        </Option>
                    </OptionGroup>
                    <DropdownSeperator />
                    <OptionGroup>
                        <Option>
                            <span className='text-error flex gap-4 items-baseline'>
                                <Icon name='Trash' />
                                Remove from Recents
                            </span>
                        </Option>
                    </OptionGroup>
                </Dropdown>
            </div>
        </div>
    )
}