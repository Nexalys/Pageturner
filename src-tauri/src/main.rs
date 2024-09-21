// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// use tauri::api::{dialog::blocking::FileDialogBuilder, path::home_dir};

// #[tauri::command]
// fn load_file() -> Option<std::path::PathBuf> {
//     let file_path = FileDialogBuilder::new()
//         .set_title("Open PDF")
//         .set_directory(home_dir().unwrap())
//         .add_filter("PDF Document", &["pdf"]);
//     return file_path.pick_file();
// }

fn main() {
    tauri::Builder::default()
        // .invoke_handler(tauri::generate_handler![load_file])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
