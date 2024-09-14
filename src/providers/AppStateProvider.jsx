'use client'

import { createContext, useRef, useContext } from 'react';
import { useStore } from 'zustand';
import { createAppStore } from "../stores/AppState";

export const AppStateContext = createContext(undefined);

export const AppStateProvider = ({children}) => {
    const storeRef = useRef(createAppStore());

    return (
        <AppStateContext.Provider value={storeRef.current}>
            {children}
        </AppStateContext.Provider>
    )
}

export const useAppState = (selector) => {
    const appContext = useContext(AppStateContext);
    if (!appContext) {
        throw new Error(`useAppState must be used within AppStateProvider`);
    }
    return useStore(appContext, selector);
}