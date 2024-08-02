import {Dropdown, DropdownSeperator, Option, OptionGroup} from "@/components/ui/Dropdown";

export function GridElement({ filename, pathname, isWorkspace }) {
    return (
        <div className='flex flex-col gap-3 items-center text-sm whitespace-nowrap'>
            {!isWorkspace ? <i className="fa-regular fa-file-pdf text-3xl"></i> :
                <i className="fa-solid fa-laptop-file"></i>}
            <div className='flex items-center gap-1'>
                <div className='mr-auto flex flex-col'>
                    {filename}
                    <span className='text-[0.6rem]'>
                        {!isWorkspace && pathname}
                        {isWorkspace && 'Workspace'}
                    </span>

                </div>
                <Dropdown buttonType='gray-ghost' icon={<i className="fa-solid fa-ellipsis-vertical"></i>}>
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