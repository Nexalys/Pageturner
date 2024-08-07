import { createStore } from "zustand/vanilla";

const defaultInitState = {
    paths: [
        {
            id: 1112,
            path: 'path/to/something',
        }
    ],
    tabs: [
        {
            id: '1234',
            name: 'Tab Name',
            context: {
                scrollX: 10,
                scrollY: 10,
            }
        }
    ]
}

export const createAppStore = (initState = defaultInitState,) => {
    return createStore()((set) =>({
        ...defaultInitState,
        addPath: ( genId, pathname ) => (set((state) => ({
            ...state.tabs,
            paths: [...state.path, {
                id: genId,
                pathname: pathname,
            }]
        })))
    }))
}