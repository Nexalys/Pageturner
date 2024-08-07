import { GridElement } from "@/components/pdf/recents-display/Grid";

export function Gridview({ files }) {
    const rows = Math.ceil(files.length / 3); // Use Math.ceil to ensure enough rows

    return (
        <div className={`grid grid-cols-2 md:grid-cols-3 mb-[15%]`} style={{ gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))` }}>
            {
                files.map((file, ind) =>
                        file.file && (
                            <GridElement
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
