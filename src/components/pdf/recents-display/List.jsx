import {
    Dropdown,
    Option,
    OptionGroup,
    DropdownSeperator
} from "@/components/ui/Dropdown";

export function ListElement({ filename, pathname, isWorkspace }) {
    return (
        <div className='flex gap-10 items-center w-full rounded-m hover:bg-trans-gray py-2 px-4
        transition-all duration-[0.4s] ease-in-out border-text border-[0.5px]'>
            {!isWorkspace ? <i className="fa-regular fa-file-pdf text-xl"> </i> :
                <i className="fa-solid fa-laptop-file"></i>}
            {filename}
            <div className='ml-auto text-sm flex gap-4 items-center'>
                {!isWorkspace && pathname}
                {isWorkspace && 'Workspace'}
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