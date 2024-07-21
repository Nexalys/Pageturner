"use client";

import { useState } from 'react';
import { pdfjs, Document, Page, Outline } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

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

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/legacy/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

function getPDF(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}

export default function Home() {
  const [filename, setFilename] = useState('');
  const [pages, setPages] = useState(0);

  async function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
      const pdfBuffer = await getPDF(file);
      renderPDF(pdfBuffer);
    }
  }

  async function renderPDF(pdfBinary) {
    const tempBLOB = new Blob([pdfBinary], {
      type: 'application/pdf',
    });

    const url = URL.createObjectURL(tempBLOB);
    setFilename(url);
  }

  function handleDocLoad({numPages}) {
    const copyPages = new Array(); 

    for (let page = 0; page < numPages; ++page) {
      copyPages.push(
        <Page pageIndex={page} renderTextLayer={true} renderAnnotationLayer={true} />
      );
    }

    setPages(copyPages);
  }

  return (
    <div className='flex flex-col'>
      <h1>Select a file</h1>
      <input
        type='file'
        onChange={(event) => handleFileSelect(event)}
      />
      <div className=''>
        {filename && (
          <Document file={filename} className='' renderMode='canvas' onLoadSuccess={(props) => handleDocLoad(props)}>
            <Outline />
            <div className='flex flex-col bg-slate-900 gap-10 items-center'>
              {pages}
            </div>
            
          </Document>
        )}
      </div>
    </div>
  );
}
