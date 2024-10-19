// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
pub mod pdf_ops;

use std::{path::PathBuf, sync::Mutex};

use lopdf::Document;
use tauri::State;

pub struct StateWrapper(Mutex<AppState>);

impl Default for StateWrapper {
    fn default() -> Self {
        StateWrapper(Default::default())
    }
}

#[derive(Default)]
pub struct AppState {
    file: Option<Document>
}

#[tauri::command]
fn load_file(raw_state: State<StateWrapper>, path: PathBuf) {
    let temp_file = Document::load(path);
    let mut state = raw_state.0.lock().expect("file should be lockable?");
    if let Ok(file) = temp_file {
        println!("Read file");
        state.file = Some(file);
    }
}

fn main() {
    tauri::Builder::default()
        .manage(StateWrapper::default())
        .invoke_handler(tauri::generate_handler![load_file])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
