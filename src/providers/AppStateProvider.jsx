'use client'

import { createContext, useRef, useContext } from 'react';
import { useStore } from 'zustand';
import { createAppStore } from "@/stores/AppState";

export const AppStateContext = createContext(undefined);

export const AppStateProvider = ({children}) => {
    const storeRef = useRef();

    if (!storeRef.current) {
        storeRef.current = createAppStore();
    }

    return (
        <AppStateContext.Provider value={storeRef.current}>
            {children}
        </AppStateContext.Provider>
    )
}

export const useAppState = (selector) => {
    const appStateContext = useContext(AppStateContext);

    if (!appStateContext) {
        throw new Error(`useAppState must be used within the AppStateProvider`);
    }

    return useStore(appStateContext, selector);
}