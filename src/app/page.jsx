'use client';

import { invoke } from '@tauri-apps/api/tauri'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { open } from '@tauri-apps/api/dialog';
import { readBinaryFile } from '@tauri-apps/api/fs';
import { ImageAlignment } from 'pdf-lib';



export default function Home() {
  async function processEntries(filePath) {
    const bin = await readBinaryFile(filePath);
    const file = new Blob([bin.buffer], {type: 'application/pdf'} /* (1) */);
    const fileURL = URL.createObjectURL(file);

    setImage(fileURL);
  }

  const handleOnClick = async () => {
    const msg = await invoke('my_custom_command'); 
    setMessage(msg);
  }

  const handleDialogOpen = async () => {
    const selected = await open({
      multiple: false, 
    });

    console.log(selected);
    processEntries(selected)
    await invoke('getFilesInDirectory', {filePath: selected});
  }


  const [message, setMessage] = useState('');
  const [image, setImage ] = useState();

  return (
    <div className='flex flex-col items-center bg-slate-800 text-white gap-10 min-h-[100vh] py-[10%]'>
       <h1 className="text-6xl">Hello!</h1>
       <button className='bg-sky-600 p-3 rounded-[10px] hover:bg-sky-300' onClick={handleOnClick}>Click me!</button>
       <button className='bg-sky-600 p-3 rounded-[10px] hover:bg-sky-300' onClick={handleDialogOpen}>Open me!</button>

       {message}
       {image && <iframe src={image}/>}
    </div>
  )
}