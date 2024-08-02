import { ListElement } from "@/components/pdf/recents-display/List";


export function Listview({ files }) {
    return (
        <div className='flex flex-col gap-5'>
            {
                files.map((file, ind) =>
                    file.file && (
                        <ListElement
                            key={ind}
                            isWorkspace={file.isWorkspace}
                            filename={file.file}
                            pathname={file.path}
                        />
                    )
                )
            }
        </div>
    );
}
