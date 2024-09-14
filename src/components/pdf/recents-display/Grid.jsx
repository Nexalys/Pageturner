import {Dropdown, DropdownSeperator, Option, OptionGroup} from "../../ui/Dropdown";
import { Icon } from '../../ui/Icon';

export function GridElement({ filename, pathname, isWorkspace }) {
    return (
        <div className='flex flex-col gap-5 items-center justify-center rounded-sm
         px-10 py-10 hover:scale-[1.1]
         transition-all duration-[0.4s] ease-in-out'>
            <div className='text-2xl'>
                {!isWorkspace ?
                    <Icon name='FileInput'/> :
                    <Icon name='BookOpen'/>
                }
            </div>

            <div className='flex items-center gap-1'>
                <div className='mr-auto flex flex-col text-clip text-nowrap overflow-auto max-w-[100%]'>
                    {filename}
                    <span className='text-sm text-text-sc
                    transition-all duration-[0.4s] ease-in-out'>
                        {!isWorkspace && pathname}
                        {isWorkspace && 'Workspace'}
                    </span>
                </div>

                <Dropdown buttonType='gray-ghost' icon={<Icon name='EllipsisVertical'/>}>
                    <OptionGroup>
                        <Option>
                            <i className="fa-regular fa-folder-open"></i>
                            Open {isWorkspace ? 'Workspace' : 'File'}
                        </Option>
                        <Option>
                            <i className="fa-solid fa-folder-plus"></i>
                            Add to workspace
                        </Option>
                    </OptionGroup>
                    <DropdownSeperator />
                    <OptionGroup>
                        <Option>
                            <span className='text-error flex gap-4 items-baseline'>
                                <i className="fa-solid fa-trash-can"></i>
                                Remove from Recents
                            </span>
                        </Option>
                    </OptionGroup>
                </Dropdown>
            </div>
        </div>
    )
}