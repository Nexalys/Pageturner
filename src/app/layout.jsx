import { Sora } from "next/font/google";

import { Draggable } from "@/components/Draggable";
import { ThemeProvider } from "next-themes";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AppStateProvider } from "@/providers/AppStateProvider";

import './globals.css';

const sora = Sora({ subsets: ["latin"] });

export const metadata = {
    title: "Pageturner",
    description: "PDF App",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={`${sora.className} text-text m-0`}>
        <Draggable/>
        <ThemeProvider
            attribute="class"
            enableSystem
            disableTransitionOnChange
        >
            <ThemeToggle />
            <AppStateProvider>
                {children}
            </AppStateProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}
