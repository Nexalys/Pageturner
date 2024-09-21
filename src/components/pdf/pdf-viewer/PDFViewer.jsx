import { useLoaderData } from "react-router-dom";
import { pdfjs, Document, Page, Outline } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { useState, useRef, Suspense } from "react";
import { Icon } from '../../ui/Icon';
import { Button } from '../../ui/Button';

const options = {
    cMapUrl: '/cmaps/',
};

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/legacy/build/pdf.worker.min.mjs',
    import.meta.url
).toString();


// Polyfill for promise resolver support for react-pdf
if (typeof Promise.withResolvers === 'undefined') {
    if (window)
        window.Promise.withResolvers = function () {
            let resolve, reject;
            const promise = new Promise((res, rej) => {
                resolve = res;
                reject = rej;
            });
            return { promise, resolve, reject };
        };
}



const handleFileSelect = (event, setFilename) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);

    reader.onload = () => {
        const blob = new Blob([reader.result], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);

        setFilename(url);
    }
};

const Pages = ({ pages }) => {
    return (
        <>
            {Array.from(Array(pages), (el, index) => (
                <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    className="pdf-page"
                />
            ))}
        </>
    )
};


function Home() {
    const [filename, setFilename] = useState('');
    const [pages, setPages] = useState(0);

    const pdfContainer = useRef(null);

    return (
        <div className='flex flex-col h-full' ref={pdfContainer}>
            <h1>Select a file</h1>
            <input
                type='file'
                onChange={(event) => handleFileSelect(event, setFilename)}
            />
            <Document
                file={filename}
                onLoadSuccess={({ numPages }) => setPages(numPages)}
                className="pdf-document"
                options={options}
            >
                <div className="flex flex-col gap-10 scroll-smooth w-fit">
                    {Array.from(new Array(200), (el, index) => (
                        <Page
                            renderMode='canvas'
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                            className="pdf-page"
                        />
                    ))}
                </div>
            </Document>
            <Button type='gray-ghost' className='absolute bottom-10 right-10 text-xl' onClick={() => pdfContainer.current.scrollTop = 0}>
                <Icon name='CircleFadingArrowUp'/>
            </Button>
        </div>
    );
}


export function PDFViewer() {
    return (
        <div>
            <Home/>
        </div>
    )
}