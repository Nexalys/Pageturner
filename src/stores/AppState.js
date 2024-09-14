import { createStore } from "zustand/vanilla";

const defaultInitState = {
    ids: [],
    paths: [
        {
            id: '1234',
            path: 'path/to/something',
            context: {
                scrollX: 10,
                scrollY: 10,
            }
        }
    ],
    tabs: [
        {
            id: '1234',
            name: 'Tab Name',
            directory: '/Users/rudrakshsrivastava/Textbooks'
        },
        {
            id: '2345',
            name: 'Other Tab Name',
        }
    ]
}

export const createAppStore = (initState = defaultInitState) => {
    return createStore()((set) =>({
        ...initState,
        addPath: ( genId, pathname ) => (set((state) => ({
            ...state.tabs,
            paths: [...state.path, {
                id: genId,
                pathname: pathname,
            }]
        }))),
        removePath: (id) => (set((state) => {
            const newTabs = state.tabs.filter((tab) => tab.id !== id);
            const newPaths = state.paths.filter((path) => path.id !== id);

            console.log(newTabs);
            console.log(newPaths);

            return {
                ...state,
                tabs: newTabs,
                paths: newPaths
            }
        }))
    }))
}