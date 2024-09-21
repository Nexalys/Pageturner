import { invoke } from "@tauri-apps/api";

export async function isDirectory(path) {
    return await invoke('is_directory', { filePath: path });
}
