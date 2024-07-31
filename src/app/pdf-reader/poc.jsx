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
        <div className='bg-transparent'>
            Someon save me :-(
        </div>
    )
}