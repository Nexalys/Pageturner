import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Draggable } from "./components/Draggable.jsx";
import { AppStateProvider } from "./providers/AppStateProvider.jsx";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "next-themes";

import App from './App.jsx'
import pages from './pages/Pages';
import { ThemeToggle } from "./components/ThemeToggle.jsx";

import './index.css'


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: pages.error,
        children: [
            {
                path: '/dashboard-wsp',
                element: pages.dashboard,
            },
            {
                path: '/',
                element: pages.home
            },
            {
                path: '/open',
                element: pages.open,
                children: pages.OpenChildren
            }
        ]
    },
    {
        path: "/workspaces/:id",
        ...pages.workspace
    }
]);


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Draggable/>
        <AppStateProvider>
            <ThemeProvider
                attribute="class"
                disableTransitionOnChange
            >
                <ThemeToggle/>
                <RouterProvider router={router}/>
            </ThemeProvider>
        </AppStateProvider>
    </StrictMode>,
)
