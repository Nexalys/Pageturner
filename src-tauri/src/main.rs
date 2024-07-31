// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::api::file;

#[tauri::command]
fn my_custom_command() -> String {
  println!("This is a command invoked from the frontend");
  "Hello from Rust!".into()
}

#[tauri::command]
fn get_files_in_directory(file_path: String) {
  println!("{}", file_path);
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![my_custom_command, get_files_in_directory])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
